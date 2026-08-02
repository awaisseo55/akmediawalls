import Image from "next/image";

import { GALLERY } from "@/data/gallery";
import { getAdminGalleryItems } from "@/lib/admin-store";
import { GalleryUploadForm } from "@/components/admin/gallery-upload-form";
import { PortfolioPlaceholder } from "@/components/shared/portfolio-placeholder";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const dynamic = "force-dynamic";

export default async function AdminGalleryPage() {
  const adminItems = await getAdminGalleryItems();
  const allItems = [...adminItems, ...GALLERY];

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="font-serif text-3xl font-semibold text-foreground">Gallery</h1>
        <p className="mt-1 text-body">{allItems.length} portfolio photos, tagged by style and city.</p>
      </div>

      <GalleryUploadForm />

      <Card className="p-6">
        <h2 className="mb-4 font-serif text-xl font-semibold text-foreground">All Gallery Items</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {allItems.map((item) => (
            <div key={item.id} className="overflow-hidden rounded-lg border border-border">
              <div className="relative h-32 w-full">
                {item.image ? (
                  <Image src={item.image} alt={item.title} fill sizes="200px" className="object-cover" />
                ) : (
                  <PortfolioPlaceholder label="" />
                )}
              </div>
              <div className="p-3">
                <p className="truncate text-xs font-medium text-foreground">{item.title}</p>
                <div className="mt-1.5 flex items-center gap-1.5">
                  <Badge variant="outline" className="px-2 py-0.5 text-[10px]">{item.style}</Badge>
                  <span className="text-[10px] text-muted">{item.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
