import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col min-h-screen">
          <header className="bg-gray-900 mb-8 py-4">
            <div className="container mx-auto flex justify-center text-white">
              <Link href="/">
                Home
              </Link>
              <span className="mx-auto font-bold">Blog</span>{" "}
            </div>
          </header>
          <main className="container mx-auto flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}
