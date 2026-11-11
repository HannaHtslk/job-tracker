"use client";

import type { FormEvent } from "react";
import type { Application, Status } from "@/types/application";

const statuses: Status[] = ["applied", "interview", "offer", "rejected"];

function NewApplication() {
    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const values: Omit<Application, "id"> = {
            company: formData.get("company") as string,
            position: formData.get("position") as string,
            status: formData.get("status") as Status,
            appliedAt: formData.get("appliedAt") as string,
            source: formData.get("source") as string,
            notes: (formData.get("notes") as string) || undefined,
        };

        console.log(values);
    }

    return (
        <form onSubmit={handleSubmit} className="flex w-full max-w-md flex-col gap-4">
            <label className="flex flex-col gap-1">
                Company
                <input name="company" required className="rounded border p-2" />
            </label>

            <label className="flex flex-col gap-1">
                Position
                <input name="position" required className="rounded border p-2" />
            </label>

            <label className="flex flex-col gap-1">
                Status
                <select name="status" defaultValue="applied" className="rounded border p-2">
                    {statuses.map((status) => (
                        <option key={status} value={status}>
                            {status}
                        </option>
                    ))}
                </select>
            </label>

            <label className="flex flex-col gap-1">
                Applied at
                <input name="appliedAt" type="date" required className="rounded border p-2" />
            </label>

            <label className="flex flex-col gap-1">
                Source
                <input name="source" required className="rounded border p-2" />
            </label>

            <label className="flex flex-col gap-1">
                Notes
                <textarea name="notes" rows={3} className="rounded border p-2" />
            </label>

            <button type="submit" className="rounded bg-foreground p-2 text-background">
                Add application
            </button>
        </form>
    );
}

export default NewApplication;
