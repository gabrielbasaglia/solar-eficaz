import { Oswald, Poppins, Raleway } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/provider/ThemeProvider";
import { Navbar } from "@/components/navbar/Navbar";

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
          <div className="xl:max-w-screen-2xl lg:max-w-screen-lg md:max-w-screen-md max-w-screen-sm mx-auto lg:px-20 md:px-10 px-5">
            <Navbar />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
