import Link from "next/link";
import { ArrowRight, Images, MessageSquareText, Newspaper } from "lucide-react";

import { getLeads } from "@/lib/leads";
import { getAdminGalleryItems, getAdminBlogPosts } from "@/lib/admin-store";
import { GALLERY } from "@/data/gallery";
import { BLOG_POSTS } from "@/data/blog";
import { Card } from "@/components/ui/card";

export const dynamic = "force-dynamic";

export default async function AdminDashboardPage() {
  const [leads, adminGallery, adminBlog] = await Promise.all([
    getLeads(),
    getAdminGalleryItems(),
    getAdminBlogPosts(),
  ]);

  const stats = [
    { label: "Total Leads", value: leads.length, href: "/admin/leads", icon: MessageSquareText },
    { label: "Gallery Items", value: GALLERY.length + adminGallery.length, href: "/admin/gallery", icon: Images },
    { label: "Blog Posts", value: BLOG_POSTS.length + adminBlog.length, href: "/admin/blog", icon: Newspaper },
  ];

  const recentLeads = leads.slice(0, 5);

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="font-serif text-3xl font-semibold text-foreground">Dashboard</h1>
        <p className="mt-1 text-body">Overview of leads and site content.</p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        {stats.map((stat) => (
          <Link key={stat.label} href={stat.href}>
            <Card className="flex items-center gap-4 p-6 transition-shadow hover:shadow-warm-lg">
              <span className="flex size-12 items-center justify-center rounded-full bg-forest/10 text-primary">
                <stat.icon className="size-5" />
              </span>
              <div>
                <p className="font-serif text-3xl font-semibold text-foreground">{stat.value}</p>
                <p className="text-sm text-muted">{stat.label}</p>
              </div>
            </Card>
          </Link>
        ))}
      </div>

      <Card className="p-6">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="font-serif text-xl font-semibold text-foreground">Recent Leads</h2>
          <Link href="/admin/leads" className="flex items-center gap-1 text-sm font-semibold text-primary">
            View all <ArrowRight className="size-4" />
          </Link>
        </div>
        {recentLeads.length === 0 ? (
          <p className="text-sm text-muted">
            No leads yet. Once your contact form is live, submissions will appear here.
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-border text-xs uppercase tracking-wider text-muted">
                  <th className="py-2 pr-4">Name</th>
                  <th className="py-2 pr-4">Service</th>
                  <th className="py-2 pr-4">Postcode</th>
                  <th className="py-2 pr-4">Date</th>
                </tr>
              </thead>
              <tbody>
                {recentLeads.map((lead) => (
                  <tr key={lead.id} className="border-b border-border last:border-0">
                    <td className="py-3 pr-4 font-medium text-foreground">{lead.name}</td>
                    <td className="py-3 pr-4 text-body">{lead.service}</td>
                    <td className="py-3 pr-4 text-body">{lead.postcode}</td>
                    <td className="py-3 pr-4 text-muted">
                      {new Date(lead.createdAt).toLocaleDateString("en-GB")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Card>
    </div>
  );
}
