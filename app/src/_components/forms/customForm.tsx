import { useState } from "react";
import { Button, Input } from "..";

import type { FormProps } from "./types";

export const CustomForm = ({ filters, onSubmit }: FormProps) => {
  const [formData, setFormData] = useState<Record<string, any>>({});
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const formInputsRender = (filter: any) => {
    if (filter.type === "text") {
      return (
        <div>
          <Input
            label={filter.label}
            placeholder={filter.placeholder}
            name={filter.name}
            value=""
            onChange={handleChange}
          />
        </div>
      );
    }
  };
  return (
    <form id="form" onSubmit={handleSubmit}>
      {filters.map((filter) => formInputsRender(filter))}
      <div>
        <Button label={"Agregar nueva frase"} parentMethod={onSubmit} />
      </div>
    </form>
  );
};
