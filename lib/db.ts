import { drizzle, MySql2Database } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import * as schema from "./schema";

export type SchemaType = typeof schema;

declare global {
  // eslint-disable-next-line no-var
  var _db: MySql2Database<SchemaType> | undefined;
}

function createDatabaseConnection() {
  const poolConnection = mysql.createPool({
    uri: process.env.DATABASE_URL!,
    connectionLimit: 10,
  });

  return drizzle({
    schema,
    client: poolConnection,
    mode: "default",
  });
}

// 优先获取缓存的实例，解决开发环境下多次 reload 导致连接过多的问题
const db = globalThis._db || createDatabaseConnection();

if (process.env.NODE_ENV !== "production") {
  globalThis._db = db;
}

export { db, schema };
