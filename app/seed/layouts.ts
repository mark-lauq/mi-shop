import { db } from "@/lib/db";

import { layoutHeroCategories, layoutHeroCategoryItems } from "@/lib/schema";
import {
  layoutHeroCategoriesData,
  layoutHeroCategoryItemsData,
} from "@/lib/placeholder-data";

export async function seedLayoutHeroCategories() {
  // 删除表
  await db.execute("drop table if exists mi_shop.layout_hero_categories;");
  await db.execute("drop table if exists mi_shop.layout_hero_category_items;");

  // 创建表
  await db.execute(createHeroCategoriesTableSql);
  await db.execute(createHeroCategoryItemsTableSql);

  // 插入数据
  await db.insert(layoutHeroCategories).values(layoutHeroCategoriesData);
  await db.insert(layoutHeroCategoryItems).values(layoutHeroCategoryItemsData);
}

const createHeroCategoriesTableSql = `
    create table if not exists mi_shop.layout_hero_categories
    (
        id         int auto_increment
            primary key,
        name       varchar(100)                        not null comment '名称',
        created_at timestamp default CURRENT_TIMESTAMP not null,
        updated_at timestamp default (now())           null on update CURRENT_TIMESTAMP,
        constraint home_hero_categories_pk_2
            unique (name)
    )
        comment '首页轮播图左侧类别数据表';
`;

const createHeroCategoryItemsTableSql = `
    create table if not exists mi_shop.layout_hero_category_items
    (
        id            int auto_increment
            primary key,
        parent_id     int                                   not null,
        type          varchar(16) default 'product'         not null comment '类型（product 商品、category 商品类别、label 商品标签）',
        associated_id int                                   not null comment '关联的id（商品id/商品类别id/商品标签id）',
        created_at    timestamp   default CURRENT_TIMESTAMP not null,
        updated_at    timestamp   default (now())           null
    );
`;
