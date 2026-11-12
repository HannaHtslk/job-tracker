import type { Status } from "@/types/application";
import { useEffect } from "react";

export const statusStyles: Record<Status, string> = {
    applied: "bg-background text-foreground",
    interview: "border border-accent text-accent bg-background/60",
    offer: "bg-accent text-white",
    rejected: "bg-foreground/10 text-foreground/60 line-through",
};
