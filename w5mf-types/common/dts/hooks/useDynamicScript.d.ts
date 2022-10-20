interface IUseDynamicScriptR {
    ready: boolean;
    failed: boolean;
}
declare const useDynamicScript: (url: string) => IUseDynamicScriptR;
export { useDynamicScript };
