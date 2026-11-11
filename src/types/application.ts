export type Status = "applied" | "interview" | "offer" | "rejected";

export type Application = {
    id: string;
    company: string;
    position: string;
    status: Status;
    appliedAt: string;
    source: string;
    notes?: string;
};