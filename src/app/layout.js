import dns from "node:dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]); //google dns

import "./globals.css";
import { Montserrat, Poppins } from "next/font/google";
import { ToastContainer } from "react-toastify";

const poppins = Poppins({
  variable: "--font-poppins-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const montserrat = Montserrat({
  variable: "--font-montserrat-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Dragon News",
  description: "Best news channel in Bangladesh.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={`${poppins.className} min-h-full flex flex-col`}>
        <ToastContainer />
        {children}
      </body>
    </html>
  );
}
