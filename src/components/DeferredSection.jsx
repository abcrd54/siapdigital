import { startTransition, useEffect, useRef, useState } from "react";

function DeferredSection({ children, className = "", id, minHeightClass = "" }) {
  const containerRef = useRef(null);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const node = containerRef.current;

    if (!node || shouldRender) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        startTransition(() => {
          setShouldRender(true);
        });
        observer.disconnect();
      },
      { rootMargin: "320px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [shouldRender]);

  return (
    <div
      id={id}
      ref={containerRef}
      className={`${className} ${minHeightClass}`.trim()}
    >
      {shouldRender ? children : null}
    </div>
  );
}

export default DeferredSection;
