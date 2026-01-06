import type { Metadata } from "next";
import "@/src/app/globals.css";
export const metadata: Metadata = {
  title: "Role Based PM",
  description: "Role Based Project Management System",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        {children}
      </body>
    </html>
  );
}