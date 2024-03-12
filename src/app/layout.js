import { Oswald, Poppins, Raleway } from "next/font/google";
import "./globals.css";
import { cn } from "@/src/lib/utils";
import { ThemeProvider } from "@/src/provider/ThemeProvider";
import { Navbar } from "@/src/components/navbar/Navbar";

const poppins = Poppins({
  weight: ["300", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-pop",
});
const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-ra",
});
const oswald = Oswald({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-os",
});

export const metadata = {
  title: "Energia Eficaz",
  description: "Tudo sobre energia renovável",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body
        className={cn(
          "min-h-screen antialiased",
          poppins.variable,
          raleway.variable,
          oswald.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="2xl:max-w-screen-2xl  xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md max-w-screen-sm mx-auto lg:px-20 md:px-10 px-5 font-ra">
            <Navbar />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
