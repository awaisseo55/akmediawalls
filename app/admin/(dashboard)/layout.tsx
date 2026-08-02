import type { Metadata } from "next";
import Link from "next/link";
import { Images, LayoutDashboard, MessageSquareText, Newspaper, Settings } from "lucide-react";

import { LogoutButton } from "@/components/admin/logout-button";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

const NAV = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/leads", label: "Leads", icon: MessageSquareText },
  { href: "/admin/gallery", label: "Gallery", icon: Images },
  { href: "/admin/blog", label: "Blog", icon: Newspaper },
  { href: "/admin/settings", label: "Settings", icon: Settings },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-background-alt">
      <aside className="hidden w-64 shrink-0 flex-col border-r border-border bg-forest text-white sm:flex">
        <div className="px-6 py-6">
          <Link href="/admin" className="font-serif text-xl font-semibold">
            AK Media Walls
          </Link>
          <p className="mt-0.5 text-xs uppercase tracking-widest text-white/50">Admin Panel</p>
        </div>
        <nav className="flex flex-1 flex-col gap-1 px-3">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium text-white/85 transition-colors hover:bg-white/10 hover:text-white"
            >
              <item.icon className="size-4" />
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="border-t border-white/10 p-4">
          <LogoutButton />
        </div>
      </aside>

      <div className="flex flex-1 flex-col">
        <header className="flex items-center justify-between border-b border-border bg-card px-4 py-4 sm:hidden">
          <span className="font-serif text-lg font-semibold text-primary">AK Admin</span>
          <LogoutButton />
        </header>
        <main className="flex-1 p-4 sm:p-8">{children}</main>
      </div>
    </div>
  );
}
