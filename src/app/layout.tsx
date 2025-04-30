import "./globals.css";
import { ThemeProvider } from 'next-themes';
import Header from "@/compoenets/header";
import RightSidebar from "@/compoenets/RightSidebar";
import LeftSidebar from "@/compoenets/leftSidebar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="light dark:dark">
      <body className="flex flex-col min-h-screen bg-white dark:bg-[#18191A] transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <div className="flex flex-1 mt-16">
            <LeftSidebar />
            <main className="flex-1 flex justify-center p-4">
              <div className="w-full max-w-3xl">{children}</div>
            </main>
            <RightSidebar />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}