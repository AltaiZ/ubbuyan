import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

// Path to custom store
const customPath = path.join(process.cwd(), 'data', 'custom.json');

async function readBaseData() {
  // Dynamically import the large JS dataset on the server
  const mod = await import('../../../../data/data');
  // Expecting named export jsonData
  return (mod as any).jsonData || [];
}

export async function DELETE(request: Request) {
  try {
    const body = await request.json().catch(() => ({}));
    const deadId = body?.dead_id as string | undefined;
    if (!deadId) {
      return NextResponse.json({ success: false, message: 'dead_id is required' }, { status: 400 });
    }

    const custom = await readCustomData();
    const initialLen = custom.length;
    const next = custom.filter((e: any) => e.dead_id !== deadId);
    if (next.length === initialLen) {
      // Not found in custom store (cannot delete base dataset)
      const [base] = await Promise.all([readBaseData()]);
      const merged = [...custom, ...base];
      return NextResponse.json({ success: false, message: 'Entry not found or not deletable', list: merged, totalCount: merged.length }, { status: 404 });
    }

    await writeCustomData(next);

    const base = await readBaseData();
    const merged = [...next, ...base];
    return NextResponse.json({ success: true, list: merged, totalCount: merged.length });
  } catch (e: any) {
    return NextResponse.json({ success: false, message: e?.message || 'Failed to delete entry' }, { status: 500 });
  }
}

async function ensureCustomFile() {
  try {
    await fs.access(customPath);
  } catch {
    await fs.mkdir(path.dirname(customPath), { recursive: true });
    await fs.writeFile(customPath, '[]', 'utf8');
  }
}

async function readCustomData() {
  await ensureCustomFile();
  const raw = await fs.readFile(customPath, 'utf8');
  try {
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

async function writeCustomData(data: any[]) {
  await ensureCustomFile();
  await fs.writeFile(customPath, JSON.stringify(data, null, 2), 'utf8');
}

export async function GET() {
  try {
    const [base, custom] = await Promise.all([readBaseData(), readCustomData()]);
    // Merge: custom first so newest appear first
    const merged = [...custom, ...base];
    return NextResponse.json({ list: merged, totalCount: merged.length });
  } catch (e: any) {
    return NextResponse.json({ message: e?.message || 'Failed to read data' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    // Basic validation and normalization
    const newEntry = {
      last_name: body.last_name || '',
      first_name: body.first_name || '',
      born_year: Number(body.born_year) || 0,
      dead_year: Number(body.dead_year) || 0,
      location: body.location || '',
      apartment: body.apartment || '',
      dead_id: body.dead_id || Date.now().toString(),
    };

    const custom = await readCustomData();
    custom.unshift(newEntry);
    await writeCustomData(custom);

    // Return updated merged list
    const base = await readBaseData();
    const merged = [...custom, ...base];

    return NextResponse.json({ success: true, entry: newEntry, list: merged, totalCount: merged.length });
  } catch (e: any) {
    return NextResponse.json({ success: false, message: e?.message || 'Failed to save entry' }, { status: 500 });
  }
}
