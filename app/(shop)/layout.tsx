import type { PropsWithChildren } from "react";

export default async function ShopLayout({ children }: PropsWithChildren) {
  return <main>{children}</main>;
}
