import React from "react";

interface MapEmbedProps {
  className?: string;
  height?: number | string;
}

export default function MapEmbed({ className = "", height = 450 }: MapEmbedProps) {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
  const src = `https://www.google.com/maps/embed/v1/place?q=place_id:ChIJR2mHKT8bdkgR2JPgoEHSwt8&key=${apiKey}`;
  return (
    <div className={className}>
      <iframe
        title="Google Maps location of The Aevia"
        width="100%"
        height={typeof height === 'number' ? height.toString() : height}
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src={src}
      />
    </div>
  );
}
