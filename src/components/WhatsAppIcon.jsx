import OptimizedImage from "./OptimizedImage";

function WhatsAppIcon({ className = "", size = 18, invert = false }) {
  return (
    <OptimizedImage
      src="/images/whatsapp.svg"
      alt=""
      aria-hidden="true"
      width={size}
      height={size}
      loading="eager"
      className={`shrink-0 ${invert ? "brightness-0 invert" : ""} ${className}`}
    />
  );
}

export default WhatsAppIcon;
