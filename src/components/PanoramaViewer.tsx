"use client";

export default function PanoramaViewer() {
  return (
    <div className="w-full h-screen flex justify-center">
      <iframe
        src="/tour/index.htm"
        width="90%"
        height="100%"
        style={{ border: "none" }}
        title="Ulaanbaatar Buyan Virtual Tour"
        allowFullScreen
      />
    </div>
  );
}
