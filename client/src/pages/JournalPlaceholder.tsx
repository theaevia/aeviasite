import { Button } from "@/components/ui/button";
import { journalUrl } from "@/lib/journal";

export default function JournalPlaceholder() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-secondary">
      <div className="bg-white rounded-2xl shadow-lg p-10 max-w-lg text-center">
        <h1 className="text-4xl font-serif font-bold mb-4 text-primary">Journal</h1>
        <p className="text-lg text-foreground/70 mb-6">
          The Aevia Journal now lives at a dedicated home.
          <br />Visit our latest articles, guides, and stories on the new site.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Button variant="default" asChild>
            <a href={journalUrl('/')}>Go to journal.theaevia.co.uk</a>
          </Button>
          <Button variant="outline" asChild>
            <a href="/">Return Home</a>
          </Button>
        </div>
      </div>
    </div>
  );
}
