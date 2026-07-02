"use client";

import { useCallback, useEffect, useRef, useState } from "react";

interface ScaledSheetProps {
  children: React.ReactNode;
  /** Set to true when this sheet is guaranteed to be visible (e.g. its tab is active). */
  active?: boolean;
}

export default function ScaledSheet({ children, active = true }: ScaledSheetProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [naturalSize, setNaturalSize] = useState({ width: 0, height: 0 });

  const update = useCallback(() => {
    const container = containerRef.current;
    const content = contentRef.current;
    if (!container || !content) return;

    const containerWidth = container.clientWidth;
    const { offsetWidth, offsetHeight } = content;
    if (!offsetWidth || !containerWidth) return;

    setNaturalSize({ width: offsetWidth, height: offsetHeight });
    setScale(Math.min(1, containerWidth / offsetWidth));
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;
    if (!container || !content) return;

    update();
    const observer = new ResizeObserver(update);
    observer.observe(container);
    observer.observe(content);
    return () => observer.disconnect();
  }, [update]);

  // Re-measure once this panel actually becomes visible (e.g. switching
  // mobile tabs from a display:none state, where sizes read as 0).
  useEffect(() => {
    if (active) update();
  }, [active, update]);

  return (
    <div
      ref={containerRef}
      className="scaled-sheet-container flex items-start justify-center overflow-hidden"
      style={{ height: naturalSize.height * scale || undefined }}
    >
      <div
        ref={contentRef}
        className="scaled-sheet-content w-fit shrink-0 rounded-sm shadow-lg shadow-black/[0.06] ring-1 ring-black/[0.04]"
        style={{
          transform: `scale(${scale})`,
          transformOrigin: "top center",
        }}
      >
        {children}
      </div>
    </div>
  );
}
