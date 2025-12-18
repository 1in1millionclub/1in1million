import localFont from "next/font/local";
export const mont = localFont({
  variable: "--font-mont",
  src: [
    {
      path: "./mont-extralightdemo.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "./mont-regular.woff",
      weight: "400",
      style: "normal",
    },
  ],
});
export const monument = localFont({
  variable: "--font-monument",
  src: [
    {
      path: "./monumentextended-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./monumentextended-ultrabold.woff2",
      weight: "800",
      style: "normal",
    },
  ],
});
