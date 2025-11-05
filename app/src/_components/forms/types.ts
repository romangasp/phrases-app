import type { InputProps } from "../inputs/types";

export interface FormInputsRenderProps {
    filters: any;
}
export type FormValues = {
    [key: string]: string | null;
}

export interface FormProps {
    filters: InputProps[],
    onSubmit: (data: FormValues) => void
}