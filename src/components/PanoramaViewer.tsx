"use client";

import { useEffect, useMemo, useState } from "react";
import View360, { EquirectProjection } from "@egjs/react-view360";
import "@egjs/react-view360/css/view360.min.css";

interface PanoramaImage {
  id: string;
  name: string;
  path: string;
}

const panoramaImages: PanoramaImage[] = [
  {
    id: "1",
    name: "Panorama 1",
    path: "/media/panorama_0DF81440_2BDB_1B30_41C5_793F78152255_hd_t.jpg",
  },
  {
    id: "2",
    name: "Panorama 2",
    path: "/media/panorama_0EE025BA_2BDB_0552_41C4_7837B0307D9A_hd_t.jpg",
  },
  {
    id: "3",
    name: "Panorama 3",
    path: "/media/panorama_0EE336A4_2BD5_0776_41BA_21ABA792A1B5_hd_t.jpg",
  },
  {
    id: "4",
    name: "Panorama 4",
    path: "/media/panorama_0EE431C9_2BDB_1D3E_418D_42FDF594B858_hd_t.jpg",
  },
  {
    id: "5",
    name: "Panorama 5",
    path: "/media/panorama_0EE57AB4_2BDB_0F57_41BD_D61C655DE6B1_hd_t.jpg",
  },
  {
    id: "6",
    name: "Panorama 6",
    path: "/media/panorama_0EE623CF_2BDB_3D31_41C4_AEA6100A6D0B_hd_t.jpg",
  },
  {
    id: "7",
    name: "Panorama 7",
    path: "/media/panorama_0EE982E5_2BDB_1CF6_41BD_E23972660314_hd_t.jpg",
  },
  {
    id: "8",
    name: "Panorama 8",
    path: "/media/panorama_0EE9ADD5_2BDB_04D1_4194_8618F52793EA_hd_t.jpg",
  },
  {
    id: "9",
    name: "Panorama 9",
    path: "/media/panorama_0EE9EB48_2BDB_0D3E_41C5_6CB34EAB0D58_hd_t.jpg",
  },
  {
    id: "10",
    name: "Panorama 10",
    path: "/media/panorama_0EEA3FE3_2BDB_04F2_41AF_E05C9B1AE183_hd_t.jpg",
  },
  {
    id: "11",
    name: "Panorama 11",
    path: "/media/panorama_0EEA7466_2BDB_3BF2_4195_1FF672AC431E_hd_t.jpg",
  },
  {
    id: "12",
    name: "Panorama 12",
    path: "/media/panorama_0EEAB6E6_2BDB_04F3_4196_711157B08F9C_hd_t.jpg",
  },
  {
    id: "13",
    name: "Panorama 13",
    path: "/media/panorama_0EEC25C4_2BDB_0536_41A4_442A042653BE_hd_t.jpg",
  },
  {
    id: "14",
    name: "Panorama 14",
    path: "/media/panorama_0EEDAF06_2BDB_0532_41C4_22179DE31A02_hd_t.jpg",
  },
  {
    id: "15",
    name: "Panorama 15",
    path: "/media/panorama_0EEE0857_2BDB_0BD2_419D_7E64C6E69286_hd_t.jpg",
  },
  {
    id: "16",
    name: "Panorama 16",
    path: "/media/panorama_0EEF414E_2BDB_FD32_41B9_2A2F1237554A_hd_t.jpg",
  },
  {
    id: "17",
    name: "Panorama 17",
    path: "/media/panorama_0EEF6A5F_2BDB_0FD2_41BC_52955738B8E9_hd_t.jpg",
  },
];

export default function PanoramaViewer() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const projection = useMemo(
    () =>
      new EquirectProjection({
        src: panoramaImages[currentIndex].path,
        video: false,
      }),
    [currentIndex]
  );

  const handleNext = () => {
    setIsLoading(true);
    setCurrentIndex((prev) => (prev + 1) % panoramaImages.length);
  };

  const handlePrevious = () => {
    setIsLoading(true);
    setCurrentIndex(
      (prev) => (prev - 1 + panoramaImages.length) % panoramaImages.length
    );
  };

  const handleThumbnailClick = (index: number) => {
    if (index === currentIndex) return;
    setIsLoading(true);
    setCurrentIndex(index);
  };

  const handleReady = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (isLoading) {
        setIsLoading(false);
      }
    }, 3000);

    return () => clearTimeout(timeout);
  }, [currentIndex, isLoading]);

  return (
    <div className="relative w-full h-screen bg-black">
      <div className="w-full h-full">
        <View360
          key={currentIndex}
          projection={projection}
          className="w-full h-full"
          onReady={handleReady}
          autoplay={false}
          useGrabCursor={true}
          scrollable={true}
          initialZoom={0.6}
        />
      </div>

      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 z-10">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white mb-4"></div>
            <div className="text-white text-lg">Loading...</div>
          </div>
        </div>
      )}

      <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-20">
        <button
          onClick={handlePrevious}
          className="bg-black bg-opacity-70 hover:bg-opacity-90 text-white p-4 rounded-full transition-all"
          aria-label="Previous panorama"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      </div>

      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-20">
        <button
          onClick={handleNext}
          className="bg-black bg-opacity-70 hover:bg-opacity-90 text-white p-4 rounded-full transition-all"
          aria-label="Next panorama"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 max-w-full overflow-x-auto scrollbar-hide">
        <div className="flex gap-2 px-4">
          {panoramaImages.map((img, index) => (
            <button
              key={img.id}
              onClick={() => handleThumbnailClick(index)}
              disabled={isLoading}
              className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                index === currentIndex
                  ? "border-white scale-110"
                  : "border-transparent opacity-60 hover:opacity-100"
              } ${isLoading ? "cursor-not-allowed" : "cursor-pointer"}`}
              aria-label={`View ${img.name}`}
            >
              <img
                src={img.path}
                alt={img.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
