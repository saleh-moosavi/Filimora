import { IObserverProps } from "../types/PropTypes";
import { useEffect, useRef, useState, useCallback } from "react";

export default function Observer({
  children,
  skeleton,
  rootMargin = "50px",
  threshold = 0.1,
}: IObserverProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleIntersection = useCallback(
    ([entry]: IntersectionObserverEntry[]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    },
    []
  );

  useEffect(() => {
    const element = ref.current;
    if (!element || isVisible) return;

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin,
      threshold,
    });

    observer.observe(element);

    return () => observer.disconnect();
  }, [handleIntersection, rootMargin, threshold, isVisible]);

  return (
    <div className="min-h-[24rem]" ref={ref}>
      {isVisible ? children : skeleton}
    </div>
  );
}
