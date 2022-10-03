import { CriteriaMode } from 'react-hook-form';
declare type OnSubmit = (data: any) => Promise<any>;
interface SubmitCallback {
    onSuccess: (result: any, data: any) => void;
    onError: (error: any, fn: (error: any) => void) => void;
}
declare const useCreateForm: (yupObject: any, mode?: any, criteriaMode?: CriteriaMode) => {
    isLoad: any;
    control: import("react-hook-form").Control<import("react-hook-form").FieldValues, object>;
    errors: import("react-hook-form").FieldErrors<import("react-hook-form").FieldValues>;
    submit: (onSubmit: OnSubmit, callbacks?: SubmitCallback) => Promise<void>;
    isValid: boolean;
    getValues: import("react-hook-form").UseFormGetValues<import("react-hook-form").FieldValues>;
    setValue: import("react-hook-form").UseFormSetValue<import("react-hook-form").FieldValues>;
    resetField: import("react-hook-form").UseFormResetField<import("react-hook-form").FieldValues>;
    clearErrors: import("react-hook-form").UseFormClearErrors<import("react-hook-form").FieldValues>;
    watch: import("react-hook-form").UseFormWatch<import("react-hook-form").FieldValues>;
    getFieldState: import("react-hook-form").UseFormGetFieldState<import("react-hook-form").FieldValues>;
    trigger: import("react-hook-form").UseFormTrigger<import("react-hook-form").FieldValues>;
    reset: import("react-hook-form").UseFormReset<import("react-hook-form").FieldValues>;
    unregister: import("react-hook-form").UseFormUnregister<import("react-hook-form").FieldValues>;
    register: import("react-hook-form").UseFormRegister<import("react-hook-form").FieldValues>;
    setFocus: import("react-hook-form").UseFormSetFocus<import("react-hook-form").FieldValues>;
};
export { useCreateForm };
