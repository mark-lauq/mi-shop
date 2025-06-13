import type { Banner } from "@/types/banner";
import { LayoutHeroCategoryItemType } from "@/enums/layout";

export const bannersData: Banner[] = [
  {
    src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9e9c620dbad5c650b6ff0c573df76e14.jpg?thumb=1&w=1226&h=120&f=webp&q=90",
    href: "https://www.mi.com/shop/buy?product_id=20779",
  },
  {
    src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/88e35cffc82cd98cd53172460067af17.jpg?thumb=1&w=1226&h=120&f=webp&q=90",
    href: "https://www.mi.com/shop/buy?product_id=9836",
  },
];

export const carouselsData: Banner[] = [
  {
    src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2e389157059c44d9352b42e04407cbb7.jpg?w=2452&h=920",
    href: "https://www.mi.com/shop/buy?product_id=20982",
  },
  {
    src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e47bc402508c005ec3c0f4c13bb8b705.jpg?thumb=1&w=1226&h=460&f=webp&q=90",
    href: "https://www.mi.com/shop/buy?product_id=20978",
  },
  {
    src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c71581f232c12eb988a565c368364930.jpg?thumb=1&w=1226&h=460&f=webp&q=90",
    href: "https://www.mi.com/shop/buy?product_id=20993",
  },
  {
    src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5d2e4ce0cc22c7d87981bac22d64e44d.jpg?thumb=1&w=1226&h=460&f=webp&q=90",
    href: "https://www.mi.com/shop/buy?product_id=21028",
  },
  {
    src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7f5a5fc15d61ee9f1f423f49f08e61d9.jpg?thumb=1&w=1226&h=460&f=webp&q=90",
    href: "https://www.mi.com/shop/buy?product_id=21075",
  },
  {
    src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/57b08b308c5eacf0655fd5da8d5a965f.jpg?thumb=1&w=1226&h=460&f=webp&q=90",
    href: "https://www.mi.com/shop/buy?product_id=20807",
  },
];

export const promotionsData: Banner[] = [
  {
    src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e981f78d2ac17c504975a719cb8b069d.png?w=632&h=340",
    href: "https://www.mi.com/shop/buy?product_id=10050081",
  },
  {
    src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6b04dfc206dec442fe161b33082681ec.png?w=632&h=340",
    href: "https://www.mi.com/shop/buy?product_id=10050079",
  },
  {
    src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6b0c7fadbd84a808287af5faad6e62d7.png?w=632&h=340",
    href: "https://www.mi.com/shop/buy?product_id=20588",
  },
];

interface LayoutHeroCategory {
  id: number;
  name: string;
}

export const layoutHeroCategoriesData: LayoutHeroCategory[] = [
  {
    id: 1,
    name: "手机",
  },
  {
    id: 2,
    name: "电视",
  },
  {
    id: 3,
    name: "家电",
  },
  {
    id: 4,
    name: "笔记本 平板 显示器",
  },
  {
    id: 5,
    name: "出行 穿戴",
  },
  {
    id: 6,
    name: "耳机 音箱",
  },
  {
    id: 7,
    name: "健康 儿童",
  },
  {
    id: 8,
    name: "生活 箱包",
  },
  {
    id: 9,
    name: "智能 路由器",
  },
  {
    id: 10,
    name: "电源 配件",
  },
];

interface LayoutHeroCategoryItem {
  parentId: number;
  type: LayoutHeroCategoryItemType;
  associatedId: number;
}

export const layoutHeroCategoryItemsData: LayoutHeroCategoryItem[] = [
  {
    parentId: 1,
    type: LayoutHeroCategoryItemType.LABEL,
    associatedId: 1,
  },
  {
    parentId: 1,
    type: LayoutHeroCategoryItemType.LABEL,
    associatedId: 2,
  },
  {
    parentId: 1,
    type: LayoutHeroCategoryItemType.LABEL,
    associatedId: 3,
  },
  {
    parentId: 1,
    type: LayoutHeroCategoryItemType.LABEL,
    associatedId: 4,
  },
  {
    parentId: 1,
    type: LayoutHeroCategoryItemType.LABEL,
    associatedId: 5,
  },
  {
    parentId: 1,
    type: LayoutHeroCategoryItemType.LABEL,
    associatedId: 6,
  },
  {
    parentId: 1,
    type: LayoutHeroCategoryItemType.LABEL,
    associatedId: 7,
  },
  {
    parentId: 2,
    type: LayoutHeroCategoryItemType.PRODUCT,
    associatedId: 37,
  },
  {
    parentId: 2,
    type: LayoutHeroCategoryItemType.PRODUCT,
    associatedId: 38,
  },
  {
    parentId: 2,
    type: LayoutHeroCategoryItemType.PRODUCT,
    associatedId: 39,
  },
  {
    parentId: 2,
    type: LayoutHeroCategoryItemType.PRODUCT,
    associatedId: 40,
  },
  {
    parentId: 2,
    type: LayoutHeroCategoryItemType.PRODUCT,
    associatedId: 41,
  },
  {
    parentId: 2,
    type: LayoutHeroCategoryItemType.PRODUCT,
    associatedId: 42,
  },
  {
    parentId: 3,
    type: LayoutHeroCategoryItemType.LABEL,
    associatedId: 18,
  },
  {
    parentId: 3,
    type: LayoutHeroCategoryItemType.LABEL,
    associatedId: 19,
  },
  {
    parentId: 3,
    type: LayoutHeroCategoryItemType.LABEL,
    associatedId: 20,
  },
  {
    parentId: 3,
    type: LayoutHeroCategoryItemType.CATEGORY,
    associatedId: 303,
  },
  {
    parentId: 3,
    type: LayoutHeroCategoryItemType.LABEL,
    associatedId: 21,
  },
  {
    parentId: 3,
    type: LayoutHeroCategoryItemType.LABEL,
    associatedId: 22,
  },
  {
    parentId: 3,
    type: LayoutHeroCategoryItemType.LABEL,
    associatedId: 23,
  },
  {
    parentId: 4,
    type: LayoutHeroCategoryItemType.PRODUCT,
    associatedId: 49,
  },
  {
    parentId: 4,
    type: LayoutHeroCategoryItemType.PRODUCT,
    associatedId: 50,
  },
  {
    parentId: 4,
    type: LayoutHeroCategoryItemType.PRODUCT,
    associatedId: 43,
  },
  {
    parentId: 4,
    type: LayoutHeroCategoryItemType.PRODUCT,
    associatedId: 44,
  },
  {
    parentId: 4,
    type: LayoutHeroCategoryItemType.LABEL,
    associatedId: 8,
  },
  {
    parentId: 4,
    type: LayoutHeroCategoryItemType.LABEL,
    associatedId: 9,
  },
  {
    parentId: 4,
    type: LayoutHeroCategoryItemType.PRODUCT,
    associatedId: 46,
  },
  {
    parentId: 4,
    type: LayoutHeroCategoryItemType.PRODUCT,
    associatedId: 45,
  },
  {
    parentId: 4,
    type: LayoutHeroCategoryItemType.LABEL,
    associatedId: 10,
  },
  {
    parentId: 4,
    type: LayoutHeroCategoryItemType.LABEL,
    associatedId: 11,
  },
];
