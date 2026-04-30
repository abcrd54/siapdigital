import { useEffect, useRef } from "react";

function LordIcon({
  src,
  size = 48,
  trigger = "in-reveal",
  state,
  colors = "primary:#2563ff,secondary:#0f172a",
  stroke = "regular",
  delay,
  className = "",
}) {
  const iconRef = useRef(null);
  const isRevealLoop = trigger === "in-reveal";

  useEffect(() => {
    if (!isRevealLoop || !iconRef.current) return undefined;

    const icon = iconRef.current;
    let phaseTimer;

    const playRevealThenLoop = () => {
      if (!icon) return;

      icon.setAttribute("trigger", "in");

      window.clearTimeout(phaseTimer);
      phaseTimer = window.setTimeout(() => {
        icon.setAttribute("trigger", "loop");
      }, 900);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        playRevealThenLoop();
      },
      { threshold: 0.45 },
    );

    observer.observe(icon);

    return () => {
      observer.disconnect();
      window.clearTimeout(phaseTimer);
    };
  }, [isRevealLoop, src, state]);

  return (
    <lord-icon
      ref={iconRef}
      src={src}
      trigger={isRevealLoop ? "in" : trigger}
      state={state}
      colors={colors}
      stroke={stroke}
      delay={delay}
      className={className}
      style={{ width: `${size}px`, height: `${size}px` }}
    />
  );
}

export default LordIcon;
