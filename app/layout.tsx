import "./globals.css";
import { NavLink } from "./nav-link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-stone-900 text-stone-100">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <header className="border-b p-4">
          <nav className="flex gap-3 text-lg font-medium">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/movies">Movies</NavLink>
          </nav>
        </header>
        <div className="p-4">{children}</div>
      </body>
    </html>
  );
}
