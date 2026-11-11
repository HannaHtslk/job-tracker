"use server";

import { revalidatePath } from "next/cache";
import { addApplication } from "@/lib/mock-data";
import type { Status } from "@/types/application";

const STATUSES: Status[] = ["applied", "interview", "offer", "rejected"];

export type CreateApplicationState = {
    success: boolean;
    error?: string;
};

export async function createApplication(
    _prevState: CreateApplicationState,
    formData: FormData,
): Promise<CreateApplicationState> {
    const company = String(formData.get("company") ?? "").trim();
    const position = String(formData.get("position") ?? "").trim();
    const status = String(formData.get("status") ?? "") as Status;
    const appliedAt = String(formData.get("appliedAt") ?? "");
    const source = String(formData.get("source") ?? "").trim();
    const notes = String(formData.get("notes") ?? "").trim();

    if (!company || !position || !appliedAt || !source || !STATUSES.includes(status)) {
        return { success: false, error: "Please fill in all required fields." };
    }

    addApplication({
        company,
        position,
        status,
        appliedAt,
        source,
        ...(notes && { notes }),
    });

    revalidatePath("/applications");
    return { success: true };
}
