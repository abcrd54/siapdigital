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
