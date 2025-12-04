import { Inter, Knewave } from "next/font/google";
import "./globals.css";
import Provider from "./Provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
const knewave = Knewave({
  variable: "--font-knewave",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Electri App",
  description: "Electronic Store App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* 🔥 Add Remix Icon CDN */}
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css"
          rel="stylesheet"
        />
      </head>

      <body className={`${inter.variable} ${knewave.variable} antialiased`}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
