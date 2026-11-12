import type {Application} from "@/types/application"


export const applications: Application[] = [
    {
        id: "1",
        company: "EPAM Systems",
        position: "React Developer",
        status: "applied",
        appliedAt: "2026-11-01",
        source: "LinkedIn",
        notes: "Applied through LinkedIn Easy Apply."
    },
    {
        id: "2",
        company: "SoftServe",
        position: "Frontend Developer",
        status: "interview",
        appliedAt: "2026-10-25",
        source: "DOU",
        notes: "HR screening completed. Technical interview scheduled."
    },
    {
        id: "3",
        company: "GlobalLogic",
        position: "Junior React Developer",
        status: "rejected",
        appliedAt: "2026-10-15",
        source: "Djinni",
        notes: "Rejected after technical interview."
    },
    {
        id: "4",
        company: "N-iX",
        position: "React TypeScript Developer",
        status: "offer",
        appliedAt: "2026-10-10",
        source: "LinkedIn",
        notes: "Received an offer. Reviewing salary and benefits."
    },
    {
        id: "5",
        company: "Sigma Software",
        position: "Frontend Engineer",
        status: "interview",
        appliedAt: "2026-11-05",
        source: "Company Website",
        notes: "Passed initial screening. Waiting for technical interview."
    },
    {
        id: "6",
        company: "ELEKS",
        position: "React Developer",
        status: "applied",
        appliedAt: "2026-11-09",
        source: "Djinni"
    }
];

export function getApplications(): Application[]{
    return [...applications];
}


export function getApplicationById(id: string): Application | undefined {
    return applications.find(application => application.id === id)
}

export function addApplication(input: Omit<Application, "id">): Application {
    const application: Application = { ...input, id: crypto.randomUUID() };
    applications.unshift(application);
    return application;
}
