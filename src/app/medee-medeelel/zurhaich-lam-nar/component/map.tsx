"use client";

import React, { useEffect, useRef } from "react";
import Script from "next/script";

interface MarkerData {
  lat: number;
  lng: number;
  name: string;
  address1: string;
}

const markersData: MarkerData[] = [
  {
    lat: 47.910643,
    lng: 106.929639,
    name: "Улаанбаатар буян төв байр",
    address1: "Улаанбаатар хот, СБД 1-р хороо, Авто замчдын гудамж 54",
  },
  {
    lat: 47.91694,
    lng: 106.624242,
    name: "Баруун буяны төв цогцолбор",
    address1: "Сонгино хйрхан дүүрэг, 32-р хороо, Баруун турууны ам",
  },
  {
    lat: 47.918318,
    lng: 107.107501,
    name: "Зүүн буяны төв цогцолбор",
    address1: "Баянзүр дүүрэг, 20-р хороо",
  },
  {
    lat: 48.041027,
    lng: 106.496952,
    name: "Дурсгалын цэцэрлэгт хүрээлэн",
    address1: "Сонгинохайрхан дүүрэг, 21-р хороо, Шүлэг уулын энгэрт",
  },
  {
    lat: 47.710694,
    lng: 107.216096,
    name: "Диваажингийн цэцэрлэгт хүрээлэн",
    address1: "Төв аймгийн сэргэлэн сум, Баян уулын энгэрт",
  },
];

const MapComponent: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initializeMap = () => {
      if (!mapRef.current || !window.google) return;

      const map = new google.maps.Map(mapRef.current, {
        center: { lat: 47.910643, lng: 106.929639 },
        zoom: 12,
        mapTypeId: "roadmap",
      });

      const infoWindow = new google.maps.InfoWindow();
      const bounds = new google.maps.LatLngBounds();

      markersData.forEach(({ lat, lng, name, address1 }) => {
        const position = new google.maps.LatLng(lat, lng);
        const marker = new google.maps.Marker({
          position,
          map,
          title: name,
        });

        marker.addListener("click", () => {
          infoWindow.setContent(
            `<div><strong>${name}</strong><br>${address1}</div>`
          );
          infoWindow.open(map, marker);
        });

        bounds.extend(position);
      });

      map.fitBounds(bounds);
    };

    if (window.google) {
      initializeMap();
    } else {
      (window as any).initMap = initializeMap;
    }
  }, []);

  return (
    <>
      <Script
        src={`https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY&callback=initMap`}
        strategy="lazyOnload"
      />

      <div ref={mapRef} style={{ width: "100%", height: "500px" }} />
    </>
  );
};

export default MapComponent;
