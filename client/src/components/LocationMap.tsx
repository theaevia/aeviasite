import React from "react";

const MAP_SRC = `https://www.google.com/maps/embed/v1/place?key=${import.meta.env.VITE_EMBED_KEY}&q=51.5310793,-0.1203023&zoom=17`;

export default function LocationMap() {
  return (
    <div className="w-full h-96">
      <iframe
        title="The Aevia – King's Cross"
        src={MAP_SRC}
        className="w-full h-full border-0 rounded-2xl"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
