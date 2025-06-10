import React from "react";

export default function LocationMap() {
  return (
    <div className="w-full h-96">
      <iframe
        title="The Aevia Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d198.41522661709957!2d-0.1203023!3d51.5310793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761be0d6318279:0x6231887d02d12d6b!2sThe%20Aevia!5e0!3m2!1sen!2suk!4v1719577257843!5m2!1sen!2suk"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
        className="w-full h-full border-0 rounded-2xl"
      ></iframe>
    </div>
  );
}
