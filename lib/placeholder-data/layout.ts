import { LayoutHeroCategoryItemType } from "@/enums/layout";

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
