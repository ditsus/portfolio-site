import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Portfolio",
  description: "James Sheng Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <Navbar />
        <div className="pt-20">{children}</div>
      </body>
    </html>
  );
}
