import OptimizedImage from "./OptimizedImage";

function WhatsAppIcon({ className = "", size = 18 }) {
  return (
    <OptimizedImage
      src="/images/whatsapp.svg"
      alt=""
      aria-hidden="true"
      width={size}
      height={size}
      loading="eager"
      className={`shrink-0 brightness-0 invert ${className}`}
    />
  );
}

export default WhatsAppIcon;
