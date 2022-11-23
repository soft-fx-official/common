export interface IStep {
    id: string;
    name: string;
    nextSteps: string[];
    prevStep: string | null;
}
export declare class Step implements IStep {
    id: string;
    name: string;
    nextSteps: string[];
    prevStep: string | null;
    constructor(id: string, name: string, nextSteps: string[], prevStep?: string | null);
}
