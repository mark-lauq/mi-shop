import { db } from "@/lib/db";
import {
  products,
  productCategories,
  productLabels,
} from "@/lib/schema/product";
import {
  productsData,
  productCategoriesData,
  productLabelsData,
} from "@/lib/placeholder-data/product";

export async function seedProducts() {
  // 删除表
  await db.execute("drop table if exists mi_shop.products;");

  // 创建表
  await db.execute(createTableSql);

  // 插入数据
  await db.insert(products).values(
    productsData.map((product, index) => ({
      ...product,
      categoryId: product.categoryId!,
      price: product.price.toString(),
      originalPrice: product.originalPrice?.toString(),
      sortNo: index + 1,
    }))
  );
}

const createTableSql = `
    create table mi_shop.products
    (
        id                int auto_increment
            primary key,
        category_id       int                                      not null comment '类别id',
        name              varchar(100)                             not null comment '名称',
        slug              varchar(100) comment '访问标识',
        picture_url       varchar(200)                             not null comment '图片地址',
        description       text comment '描述',
        price             decimal(10, 2) default 0.00              not null comment '最低价格',
        original_price    decimal(10, 2) comment '原价',
        has_multiple_skus tinyint(1)     default 0                 not null comment '是否有多个sku',
        sales             int            default 0                 not null comment '销量',
        rating            int            default 5                 not null comment '评分',
        static_details    json comment '静态详情',
        enabled           tinyint(1)     default 1                 not null,
        sort_no           int            default 0                 not null,
        created_at        timestamp      default CURRENT_TIMESTAMP not null,
        updated_at        timestamp      default (now())           null on update CURRENT_TIMESTAMP,
        constraint products_pk unique (name),
        constraint products_slug_unique unique (slug)
    ) comment '商品表';
`;

export async function seedProductCategories() {
  // 删除表
  await db.execute("drop table if exists mi_shop.product_categories;");

  // 创建表
  await db.execute(createCategoryTableSql);

  // 插入数据
  const values = productCategoriesData.reduce(
    (
      acc: {
        id: number;
        name: string;
        pictureUrl?: string;
        parentId?: number;
        sortNo: number;
      }[],
      category,
      index
    ) => {
      acc.push({
        id: category.id,
        name: category.name,
        pictureUrl: category.pictureUrl,
        sortNo: index + 1,
      });
      category.children?.forEach((child, childIndex) => {
        acc.push({
          id: child.id,
          name: child.name,
          pictureUrl: child.pictureUrl,
          parentId: category.id,
          sortNo: childIndex + 1,
        });
      });
      return acc;
    },
    []
  );
  await db.insert(productCategories).values(values);
}

const createCategoryTableSql = `
    create table mi_shop.product_categories
    (
        id          int auto_increment
            primary key,
        name        varchar(32)                         not null comment '类别名称',
        parent_id   int       default 0                 not null comment '父类别id',
        picture_url varchar(255) comment '图片地址',
        sort_no     int       default 0                 not null,
        created_at  timestamp default CURRENT_TIMESTAMP not null,
        updated_at  timestamp default (now())           null on update CURRENT_TIMESTAMP,
        constraint product_categories_pk
            unique (name)
    ) comment '商品类别表';
`;

export async function seedProductLabels() {
  // 删除表
  await db.execute("drop table if exists mi_shop.product_labels;");

  // 创建表
  await db.execute(createLabelTableSql);

  // 插入数据
  await db.insert(productLabels).values(productLabelsData);
}

const createLabelTableSql = `
    create table mi_shop.product_labels
    (
        id          int auto_increment
            primary key,
        category_id int                                 not null comment '类别id',
        name        varchar(100)                        not null comment '名称',
        picture_url varchar(255) comment '图片地址',
        created_at  timestamp default CURRENT_TIMESTAMP not null,
        updated_at  timestamp default (now())           null on update CURRENT_TIMESTAMP,
        constraint product_labels_pk_2
            unique (name)
    )
        comment '商品标签表';
`;
