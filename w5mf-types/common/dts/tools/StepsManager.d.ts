import { IStep } from '../models';
export default class StepsManager {
    rootAppName: string;
    rootSteps: IStep[];
    moduleSteps: {
        [moduleName: string]: IStep[];
    };
    currentRootStep: IStep;
    currentModuleStep: IStep | null;
    historyModuleStep: {
        [moduleName: string]: IStep[];
    };
    constructor(rootAppName: string, rootSteps: IStep[]);
    addModuleSteps(moduleName: string, steps: IStep[]): void;
    nextStep(id?: string): void;
    prevStep(): void;
    protected get routeData(): import("./route").TRouteData;
    protected updateRoute(appName: string, id: string, reset?: boolean): void;
    protected stepCheck(): void;
    protected getStepIdFromRoute(appName: string): string | null;
    protected getStartStep(steps: IStep[]): IStep;
    protected hasSubSteps(step: IStep): boolean;
    protected getStepById(id: string, isModuleSteps?: boolean): IStep;
    protected initRootStep(): IStep;
    protected initModuleStep(moduleName: string): void;
    protected popLastStepHistory(moduleName: string): IStep | null;
    protected pushStepToHistory(moduleName: string, step: IStep): void;
}
