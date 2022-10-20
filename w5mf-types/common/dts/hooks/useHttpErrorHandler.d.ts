declare type UseHttpErrorHandlerProps = {
    errorKey?: 'target' | 'code';
    modelFieldDictionary?: Record<string, string>;
};
declare const useHttpErrorHandler: ({ errorKey, modelFieldDictionary, }: UseHttpErrorHandlerProps) => (error: any, setError: (errors: Record<string, string>) => void) => void;
export { useHttpErrorHandler };
