import type { InputProps } from "../inputs/types";

export interface FormInputsRenderProps {
  inputs: any;
}
export type FormValues = {
  [key: string]: string | null;
};

export interface FormProps {
  inputs: InputProps[];
  onSubmit: (data: FormValues) => void;
}
