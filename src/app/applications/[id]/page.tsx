import Link from "next/link";
import { notFound } from "next/navigation";
import { getApplicationById } from "@/lib/mock-data";
import { statusStyles } from "@/lib/status-styles";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function ApplicationDetailPage({ params }: Props) {

  const { id } = await params;

  const application = getApplicationById(id);

  if (!application) {
    notFound();
  }

  const {company, position, status, source, appliedAt} = application;

  return (
    <main className="flex flex-col gap-6">
      <Link href="/applications" className="self-start text-sm font-medium text-foreground/70 transition-colors hover:text-accent">
        ← Go back
      </Link>

      <article className="rounded-lg bg-background/70 p-6 shadow-sm">
        <header className="flex flex-col gap-3 border-b border-foreground/10 pb-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-wide text-accent">{company}</p>
            <p className="text-2xl font-semibold">{position}</p>
          </div>
          <p className={`self-start rounded-full px-3 py-0.5 text-sm font-medium capitalize ${statusStyles[status]}`}>{status}</p>
        </header>

        <dl className="grid grid-cols-2 gap-4 py-4 text-sm">
          <div>
            <dt className="text-foreground/60">Source</dt>
            <dd className="font-medium">{source}</dd>
          </div>
          <div>
            <dt className="text-foreground/60">Applied on</dt>
            <dd className="font-medium">{appliedAt}</dd>
          </div>
        </dl>

        { application.notes &&
        <div className="rounded-md bg-surface/50 p-4 text-sm leading-6">
          <p className="mb-1 text-foreground/60">Notes</p>
          <p>{application.notes}</p>
        </div>}
      </article>
    </main>
  );
}
