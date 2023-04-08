"use client";

import { DM_Sans } from "next/font/google";
import clsx from "clsx";
import Footer from "components/Footer";
import Header from "components/Header";
import ScrollTop from "components/ScrollTop";

const fontStyle = DM_Sans({
  weight: ["500", "700"],
  subsets: ["latin"],
});

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <div
      className={clsx(
        fontStyle.className,
        "grid min-h-screen grid-rows-[auto_1fr_auto]"
      )}
    >
      <Header />
      <main>{children}</main>
      <Footer />
      <ScrollTop />
    </div>
  );
}
