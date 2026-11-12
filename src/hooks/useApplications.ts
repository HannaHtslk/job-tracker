import { fetchApplications } from "@/lib/api";
import { Application, Status } from "@/types/application";
import { useEffect, useState } from "react";

type UseApplicationsResult = {
    data: Application[];
    isLoading: boolean;
    error: string | null;
}

export function useApplications(status?: Status): UseApplicationsResult {

    const [data, setData] = useState<Application[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(()=>{
        const controller = new AbortController();
        
        async function load() {
            try {

            setIsLoading(true);
            setError(null);

            const response = await fetchApplications(status, controller.signal)
            setData(response)

            } catch (error) {
            if (error instanceof Error && error.name === "AbortError") return; 
            setError(error instanceof Error ? error.message : "Unknown error");
            } finally {
                if (!controller.signal.aborted) setIsLoading(false);
            }
        }

        load()
       
        return () => controller.abort();

    }, [status])


    return {data, isLoading, error};
}