import { createElement, useEffect, useRef, useState } from "react";

function Reveal({
  as = "div",
  children,
  className = "",
  delay = 0,
  threshold = 0.2,
  ...rest
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || visible) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setVisible(true);
        observer.disconnect();
      },
      { threshold, rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, visible]);

  return createElement(as, {
    ref,
    className: `reveal-up ${visible ? "is-visible" : ""} ${className}`.trim(),
    style: { transitionDelay: `${delay}ms` },
    ...rest,
    children,
  });
}

export default Reveal;
