import {
  type PropsWithChildren,
  type CSSProperties,
  type RefObject,
  Children,
  useImperativeHandle,
} from "react";
import clsx from "clsx";
import useCarousel from "./useCarousel";
import styles from "./styles.module.css";
// 临时解决方案。基于 turbopack 启动并使用 CSS Modules 时
// 且 animation 中定义的 duration 是 CSS 变量，会导致不能正确解析 animation name
import "./keyframes.css";

export interface CarouselProps extends PropsWithChildren {
  ref?: RefObject<CarouselInstance | null>;
  style?: CSSProperties;
  className?: string;
  // 自动切换
  autoplay?: boolean;
  // 动画效果
  animation?: "scrollX" | "scrollY" | "fade";
  // 动画方向
  direction?: "forward" | "reverse";
  // 动画时长
  duration?: number;
  // 切换间隔
  interval?: number;
  // 衔接滑动
  circular?: boolean;
  // 切换前
  beforeChange?: (current: number, next: number) => void;
  // 切换后
  afterChange?: (current: number) => void;
}

export interface CarouselInstance {
  next: () => void;
  prev: () => void;
  to: (index: number) => void;
}

export default function Carousel({
  children,
  ref,
  style,
  className,
  autoplay = true,
  animation = "fade",
  direction: initDirection = "forward",
  duration = 800,
  interval = 3000,
  circular = true,
  beforeChange,
  afterChange,
}: CarouselProps) {
  const [
    { activeIndex, prevIndex, nextIndex, direction, timer },
    { switchIndex, startPlay },
  ] = useCarousel({
    direction: initDirection,
    children,
    autoplay,
    interval,
    circular,
    beforeChange,
    afterChange,
  });

  function toIndex(index: number) {
    startPlay();
    switchIndex(true, index);
  }

  useImperativeHandle(ref, () => {
    return {
      next() {
        startPlay();
        switchIndex();
      },
      prev() {
        startPlay();
        switchIndex(false);
      },
      to: toIndex,
    };
  });

  return (
    <ul
      style={{ ...style, "--duration": `${duration}ms` } as CSSProperties}
      className={clsx(styles.carousel, className)}
      onMouseEnter={() => {
        clearInterval(timer.current);
      }}
      onMouseLeave={startPlay}
    >
      {Children.map(children, (child, index) => {
        return (
          <li
            className={clsx(
              styles.carouselItem,
              styles[animation],
              styles[direction as string],
              index === activeIndex && styles.active,
              prevIndex === index && styles.prev,
              nextIndex === index && styles.next
            )}
          >
            {child}
          </li>
        );
      })}
    </ul>
  );
}
