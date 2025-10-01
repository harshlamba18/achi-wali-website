import { Arima, Righteous, Roboto } from "next/font/google";

const arimaFont = Arima({
  subsets: ["latin"],
});

const righteousFont = Righteous({
  subsets: ["latin"],
  weight: "400",
});

const robotoFont = Roboto({
  subsets: ["latin"],
});

export { arimaFont, righteousFont, robotoFont };
