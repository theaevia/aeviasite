interface MapProps {
  className?: string;
}

export default function Map({ className = "" }: MapProps) {
  return (
    <div className={`w-full h-[500px] rounded-2xl overflow-hidden shadow-lg ${className}`}>
      <iframe
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        allow="geolocation"
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed/v1/place?q=260+Pentonville+Road,+London&zoom=17&key=AIzaSyCDgTsuub3PQLTOFCUWH62hG7_MCw-JVaY"
      />
    </div>
  );
} 