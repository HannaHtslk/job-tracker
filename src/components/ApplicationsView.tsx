'use client'

import { useApplications } from "@/hooks/useApplications"
import { Status } from "@/types/application"
import { useState } from "react"
import ApplicationsList from "./ApplicationsList"

const STATUSES: Status[] = ["applied", "interview", "offer", "rejected"]


function ApplicationsView(){
    const [status, setStatus] = useState<Status | "all">("all")

    const {data, isLoading, error} = useApplications(status === "all" ? undefined : status)

console.log("data", data)
    return(
        <div>
            <select 
                value={status} 
                onChange={e=> setStatus(e.target.value as Status | "all")}
            >
            <option value="all">All</option>
            {STATUSES.map(s => {
                return <option key={s} value={s}>{s}</option>
            })}
            </select>
            {isLoading && <p>Loading...</p>}
            {!isLoading && error && <p>{error}</p>}
            {!isLoading && !error && <ApplicationsList applications={data}/>}

        </div>
    )
}

export default ApplicationsView