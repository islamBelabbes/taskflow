import AppSideBar from "@/components/app-sidebar";
import Header from "@/components/header";
import { ScrollArea } from "@/components/ui/scroll-area";
import { SidebarProvider } from "@/components/ui/sidebar";
import "@/styles/globals.css";

import { type Metadata } from "next";
import { Inter } from "next/font/google";

export const metadata: Metadata = {
  title: "Task Flow",
  description: "Manage your Projects with ease",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body>
        <SidebarProvider>
          <AppSideBar />

          <div className="flex h-screen grow flex-col">
            <Header />
            <main className="h-full grow overflow-hidden bg-[#f8f8f8] px-1 py-6 lg:px-4">
              <ScrollArea className="h-full px-3">{children}</ScrollArea>
            </main>
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
