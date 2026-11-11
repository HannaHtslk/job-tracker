import {getApplications} from "@/lib/mock-data";
import Link from "next/link";

function ApplicationsList() {

    const applications = getApplications();
    return (
        <>
        <Link href="/applications/new" className="mb-6 self-start rounded-md bg-accent px-4 py-2 font-medium text-white shadow-sm transition-opacity hover:opacity-90">
            Add new application
        </Link>
        <ul className="flex w-full flex-col gap-3">
            {applications.map((app) => (
                <li key={app.id} className="rounded-lg bg-background/70 shadow-sm transition-shadow hover:shadow-md">
                    <Link href={`/applications/${app.id}`} className="group flex items-center justify-between p-4 transition-colors hover:text-accent">
                     <h3 className="text-lg font-semibold">{app.position} at {app.company}</h3>
                     <span aria-hidden className="text-foreground/40 transition-transform group-hover:translate-x-1 group-hover:text-accent">›</span>
                     </Link>
                </li>
            ))}
        </ul>
        </>
    )
}
export default ApplicationsList;
