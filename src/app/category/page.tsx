import { notFound } from 'next/navigation';

async function getPostByCategory(category: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/posts?category=${category}`,
    { cache: 'no-store' }
  );
  
  if (!res.ok) return null;
  return res.json();
}

export default async function CategoryPage({ 
  params 
}: { 
  params: { category: string } 
}) {
  const post = await getPostByCategory(params.category);

  if (!post) {
    notFound();
  }

  return (
    <div className="container">
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
}