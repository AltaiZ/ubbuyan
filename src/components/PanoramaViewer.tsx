"use client";

export default function PanoramaViewer() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Виртуал Аялал
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Улаанбаатар Буяны орчин үеийн байгууламжийг 360° виртуал аялалаар үзнэ үү
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden" style={{ height: "calc(100vh - 250px)", minHeight: "600px" }}>
          <iframe
            src="/virt/index.htm"
            width="100%"
            height="100%"
            style={{ border: "none" }}
            title="Ulaanbaatar Buyan Virtual Tour"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
