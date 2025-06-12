import { db } from "@/lib/db";
import { banners } from "@/lib/schema";
import { bannersData } from "@/lib/placeholder-data";
import { BannerType } from "@/enums/banner";

export async function seedBanners() {
  // 删除表
  await db.execute("drop table if exists mi_shop.banners");

  // 创建表
  await db.execute(`
    create table mi_shop.banners
    (
        id            int auto_increment primary key,
        type          varchar(16) default 'hero'            not null comment '类型',
        src           varchar(200)                          not null comment '广告图地址',
        href          text                                  not null comment '链接地址',
        target        varchar(8)  default '_blank'          not null comment '打开方式',
        associated_id int                                   null comment '关联的id',
        sort_no       int         default 0                 not null,
        enabled       tinyint(1)  default 1                 not null,
        created_at    timestamp   default CURRENT_TIMESTAMP not null,
        updated_at    timestamp   default (now())           null on update CURRENT_TIMESTAMP
    ) comment '广告图表';
  `);

  // 插入数据
  const values: (typeof banners.$inferInsert)[] = [];

  bannersData.forEach((banner, index) => {
    values.push({
      ...banner,
      type: BannerType.HOME_BANNER,
      sortNo: index + 1,
    });
  });

  await db.insert(banners).values(values);
}
