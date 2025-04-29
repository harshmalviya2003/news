import "./globals.css";
import { ThemeProvider } from 'next-themes';
import Header from "@/compoenets/header";
import Sidebar from "@/compoenets/leftSidebar";
import RightSidebar from "@/compoenets/RightSidebar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex flex-col min-h-screen bg-black">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Header />
          <div className="flex flex-1 mt-16">
            <Sidebar />
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