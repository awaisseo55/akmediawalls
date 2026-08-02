import { getLeads } from "@/lib/leads";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const dynamic = "force-dynamic";

export default async function AdminLeadsPage() {
  const leads = await getLeads();

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="font-serif text-3xl font-semibold text-foreground">Leads</h1>
        <p className="mt-1 text-body">{leads.length} enquiries received via the contact form.</p>
      </div>

      {leads.length === 0 ? (
        <Card className="p-8 text-center text-body">
          No leads yet. Submissions from the contact form will appear here.
        </Card>
      ) : (
        <div className="flex flex-col gap-4">
          {leads.map((lead) => (
            <Card key={lead.id} className="p-6">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="font-serif text-lg font-semibold text-foreground">{lead.name}</p>
                  <p className="text-sm text-muted">
                    {lead.email} &middot; {lead.phone} &middot; {lead.postcode}
                  </p>
                </div>
                <Badge variant="forest">{lead.service || "General enquiry"}</Badge>
              </div>
              {lead.message && <p className="mt-3 text-sm text-body">{lead.message}</p>}
              <div className="mt-4 flex flex-wrap items-center gap-4 border-t border-border pt-4 text-xs text-muted">
                <span>Preferred contact: {lead.preferredContact || "Not specified"}</span>
                <span>{new Date(lead.createdAt).toLocaleString("en-GB")}</span>
                {lead.photoUrl && (
                  <a href={lead.photoUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-primary">
                    View attached photo
                  </a>
                )}
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
