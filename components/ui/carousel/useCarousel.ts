"use client";

import {
  useState,
  useRef,
  useMemo,
  useEffect,
  useCallback,
  Children,
} from "react";
import useUpdateEffect from "@/hooks/useUpdateEffect";
import type { CarouselProps } from "./index";

export default function useCarousel({
  children,
  autoplay,
  interval,
  circular,
  beforeChange,
  afterChange,
  direction: initDirection,
}: CarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(-1);
  const [nextIndex, setNextIndex] = useState(-1);
  const [direction, setDirection] = useState(initDirection);

  const timer = useRef<NodeJS.Timeout>(undefined);
  const length = useMemo(() => Children.count(children), [children]);

  const switchIndex = useCallback(
    (next = true, index = -1) => {
      setActiveIndex((value) => {
        setPrevIndex(value);

        let newValue = index;
        if (index === -1) {
          if (next) {
            newValue = value < length - 1 ? value + 1 : 0;
            setDirection(newValue === 0 && !circular ? "reverse" : "forward");
          } else {
            setDirection("reverse");
            newValue = value > 0 ? value - 1 : length - 1;
          }
        } else {
          setDirection(index > value ? "forward" : "reverse");
        }

        setNextIndex(newValue);
        beforeChange?.(value, newValue);

        return newValue;
      });
    },
    [circular, length, beforeChange]
  );

  const startPlay = useCallback(() => {
    if (autoplay) {
      clearInterval(timer.current);
      timer.current = setInterval(switchIndex, interval);
    }
  }, [autoplay, interval, switchIndex]);

  useEffect(() => {
    startPlay();
    return () => {
      clearInterval(timer.current);
    };
  }, [startPlay]);

  useUpdateEffect(() => {
    afterChange?.(activeIndex);
  }, [activeIndex, afterChange]);

  return [
    { activeIndex, prevIndex, nextIndex, direction, timer, length },
    { switchIndex, startPlay },
  ] as const;
}
