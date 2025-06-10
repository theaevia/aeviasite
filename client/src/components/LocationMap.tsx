import React from "react";

export default function LocationMap() {
  return (
    <div className="w-full h-96">
      <iframe
        title="The Aevia Location"
        src="https://maps.google.com/maps?q=51.5310793,-0.1203023&amp;z=17&amp;output=embed"
        width="100%"
        height="100%"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-full border-0 rounded-2xl"
      ></iframe>
    </div>
  );
}
