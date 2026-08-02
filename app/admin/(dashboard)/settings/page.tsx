import { getSettings } from "@/lib/admin-store";
import { SettingsForm } from "@/components/admin/settings-form";

export const dynamic = "force-dynamic";

export default async function AdminSettingsPage() {
  const settings = await getSettings();

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="font-serif text-3xl font-semibold text-foreground">Settings</h1>
        <p className="mt-1 text-body">Business contact details and service areas.</p>
      </div>
      <SettingsForm settings={settings} />
    </div>
  );
}
