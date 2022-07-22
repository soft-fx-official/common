declare const useCreateForm: (yupObject: any, mode?: any) => {
    isLoad: any;
    control: import("react-hook-form").Control<import("react-hook-form").FieldValues, object>;
    errors: import("react-hook-form").FieldErrorsImpl<import("react-hook-form").DeepRequired<import("react-hook-form").FieldValues>>;
    submit: (onSubmit: any, callbacks: any) => Promise<void>;
    isValid: boolean;
};
export { useCreateForm };
