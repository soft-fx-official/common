declare type OnSubmit = (data: any) => Promise<any>;
interface SubmitCallback {
    onSuccess: (result: any) => void;
    onError: (error: any, fn: (error: any) => void) => void;
}
declare const useCreateForm: (yupObject: any, mode?: any) => {
    isLoad: any;
    control: import("react-hook-form").Control<import("react-hook-form").FieldValues, object>;
    errors: import("react-hook-form").FieldErrorsImpl<import("react-hook-form").DeepRequired<import("react-hook-form").FieldValues>>;
    submit: (onSubmit: OnSubmit, callbacks?: SubmitCallback) => Promise<void>;
    isValid: boolean;
    getValues: import("react-hook-form").UseFormGetValues<import("react-hook-form").FieldValues>;
};
export { useCreateForm };
