interface MapProps {
  className?: string;
}

export default function Map({ className = "" }: MapProps) {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
  return (
    <div className={`w-full h-[500px] overflow-hidden shadow-lg ${className}`}>
      <iframe
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        allow="geolocation"
        referrerPolicy="no-referrer-when-downgrade"
        src={`https://www.google.com/maps/embed/v1/place?q=260+Pentonville+Road,+London&zoom=17&key=${apiKey}`}
      />
    </div>
  );
} 
