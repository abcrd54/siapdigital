function iconProps(props) {
  return {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    viewBox: "0 0 24 24",
    "aria-hidden": "true",
    ...props,
  };
}

export function MenuIcon(props) {
  return (
    <svg {...iconProps(props)}>
      <path d="M4 12h16" />
      <path d="M4 6h16" />
      <path d="M4 18h16" />
    </svg>
  );
}

export function ArrowUpRightIcon(props) {
  return (
    <svg {...iconProps(props)}>
      <path d="M7 17 17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}

export function SparklesIcon(props) {
  return (
    <svg {...iconProps(props)}>
      <path d="m12 3-1.9 4.6L5.5 9.5l4.6 1.9L12 16l1.9-4.6 4.6-1.9-4.6-1.9z" />
      <path d="M19 3v4" />
      <path d="M21 5h-4" />
      <path d="M5 16v3" />
      <path d="M6.5 17.5h-3" />
    </svg>
  );
}

export function StarIcon(props) {
  return (
    <svg {...iconProps(props)}>
      <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1 6.2L12 17.3 6.5 20.2l1-6.2L3 9.6l6.2-.9z" />
    </svg>
  );
}

export function XIcon(props) {
  return (
    <svg {...iconProps(props)}>
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

export function MapPinIcon(props) {
  return (
    <svg {...iconProps(props)}>
      <path d="M12 21s-6-4.35-6-10a6 6 0 1 1 12 0c0 5.65-6 10-6 10Z" />
      <path d="M12 13.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
    </svg>
  );
}

export function MailIcon(props) {
  return (
    <svg {...iconProps(props)}>
      <rect x="3" y="5.5" width="18" height="13" rx="2.5" />
      <path d="m4.5 7 7.5 6 7.5-6" />
    </svg>
  );
}

export function AnimatedMapPinIcon({ size = 64, className = "" }) {
  return (
    <div
      className={`map-pin-animated relative inline-flex items-center justify-center ${className}`.trim()}
      style={{ width: `${size}px`, height: `${size}px` }}
      aria-hidden="true"
    >
      <span className="map-pin-ring absolute inset-[10%] rounded-full border-2 border-primary/16" />
      <span className="map-pin-dot absolute bottom-[10%] h-2.5 w-2.5 rounded-full bg-primary/18" />
      <MapPinIcon className="map-pin-core relative z-10 h-full w-full text-primary" />
    </div>
  );
}

export function AnimatedMailIcon({ size = 64, className = "" }) {
  return (
    <div
      className={`mail-icon-animated relative inline-flex items-center justify-center ${className}`.trim()}
      style={{ width: `${size}px`, height: `${size}px` }}
      aria-hidden="true"
    >
      <span className="mail-icon-ring absolute inset-[8%] rounded-full border-2 border-primary/14" />
      <span className="mail-icon-glow absolute inset-[18%] rounded-full bg-primary/10 blur-[10px]" />
      <svg
        viewBox="0 0 64 64"
        className="mail-icon-core relative z-10 h-full w-full overflow-visible text-primary"
        fill="none"
      >
        <path
          className="mail-icon-letter"
          d="M20 23.5h24v16H20z"
          fill="currentColor"
          fillOpacity="0.12"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinejoin="round"
        />
        <path
          className="mail-icon-letter-line"
          d="M25 29.5h14"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        <path
          className="mail-icon-letter-line"
          d="M25 34.5h9"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        <rect
          x="14"
          y="22"
          width="36"
          height="24"
          rx="5"
          fill="white"
          stroke="currentColor"
          strokeWidth="2.4"
        />
        <path
          d="M14 27.5 29.6 38.8a4 4 0 0 0 4.8 0L50 27.5"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          className="mail-icon-flap"
          d="M17 24.5 32 35l15-10.5"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          className="mail-icon-spark mail-icon-spark-one"
          d="M50.5 16.5v5"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <path
          className="mail-icon-spark mail-icon-spark-one"
          d="M48 19h5"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <path
          className="mail-icon-spark mail-icon-spark-two"
          d="M14 16.5v3.5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          className="mail-icon-spark mail-icon-spark-two"
          d="M12.25 18.25h3.5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
