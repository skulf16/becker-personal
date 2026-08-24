import { Nunito, Roboto } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/Sidebar";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-nunito",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata = {
  title: "Becker Personal + Perspektiven – Personalberatung Berlin & Brandenburg",
  description:
    "Becker Personal + Perspektiven unterstützt Unternehmen seit fast 18 Jahren durch Personalberatung in der Region Berlin, Potsdam und dem Land Brandenburg. Personalvermittlung, Headhunting und zukunftsfähige Personalstrategien.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de" className={`${nunito.variable} ${roboto.variable}`}>
      <body>
        <div className="site">
          <Sidebar />
          <main className="site-main">{children}</main>
        </div>
      </body>
    </html>
  );
}
