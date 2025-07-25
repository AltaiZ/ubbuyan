"use client";

import React, { useEffect, useRef } from "react";
import Script from "next/script";

interface MarkerData {
  lat: number;
  lng: number;
  name: string;
  address1?: string;
}

const markersData: MarkerData[] = [
  {
    lat: 47.9278265,
    lng: 106.9415559,
    name: "Мамба дацан",
    address1: "Улаанбаатар хот, СБД 1-р хороо, Авто замчдын гудамж 54",
  },
  {
    lat: 47.9390453,
    lng: 106.9349934,
    name: "Дамбадаржаалин Хийд",
    address1: "Улаанбаатар хот , БЗД 2-р хороо",
  },
  {
    lat: 47.9198087,
    lng: 106.9582959,
    name: "Тарвалин хийд",
    address1: "Улаанбаатар хот, БЗД 15-р хороо",
  },
  // Бусад маркеруудыг энд нэмж оруулна уу
];

const MapComponent: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initializeMap = () => {
      if (!mapRef.current || !window.google) return;

      const map = new google.maps.Map(mapRef.current, {
        center: { lat: 47.910643, lng: 106.929639 },
        zoom: 13,
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
          const content = `
            <div>
              <strong>${name}</strong>
              <br />
              ${address1 || ""}
            </div>`;
          infoWindow.setContent(content);
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
