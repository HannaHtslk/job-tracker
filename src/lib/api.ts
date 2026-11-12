import { applications } from "@/lib/mock-data";
import type { Application, Status } from "@/types/application";

export function fetchApplications(
  status?: Status,
  signal?: AbortSignal,
): Promise<Application[]> {
  return new Promise((resolve, reject) => {
    if (signal?.aborted) {
      reject(new DOMException("Aborted", "AbortError"));
      return;
    }

    // NEW: the abort handler gets a name, so we can remove it later
    const onAbort = () => {
      clearTimeout(timer);
      console.log("aborted request for", status ?? "all");
      reject(new DOMException("Aborted", "AbortError"));
    };

    const delay = 300 + Math.random() * 900;
    const timer = setTimeout(() => {
      signal?.removeEventListener("abort", onAbort); // NEW: request finished, so stop listening

      if (Math.random() < 0.2) {
        reject(new Error("Failed to load applications"));
        return;
      }
      resolve(
        status
          ? applications.filter(a => a.status === status)
          : [...applications],
      );
    }, delay);

    signal?.addEventListener("abort", onAbort, { once: true }); // CHANGED: uses the named function
  });
}