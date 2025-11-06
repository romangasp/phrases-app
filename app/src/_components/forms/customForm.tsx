import { Button, Input } from "..";

import type { FormProps } from "./types";
import { Controller, useForm } from "react-hook-form";

export const CustomForm = ({ filters, onSubmit }: FormProps) => {
  const { handleSubmit, control, reset } = useForm();



  const formInputsRender = (filter: any) => {
    if (filter.type === "text") {
      return (
        <Controller
          name={filter.name}
          key={filter.name}
          control={control}
          render={({ field }) => (
            <div>
              <Input
                label={filter.label}
                placeholder={filter.placeholder}
                {...field}
              />
            </div>
          )}
        />
      );
    }
  };

    //  --linear-aura-gradient: linear-gradient(to right in oklch, #f63b35 0%, #f63b35 3%, #1265f0 7%, #477dff 17%, #2caf4f 20%, #72bb44 25%, #ffe523 27%, #ffcc25 30%, #ea4335 33%, #ea4335 45%, #1265f0 49%, #477dff 68%, #34a853 72%, #2caf4f 79%, #ffe523 82%, #ffcc25 87%, #f63b35 90%, #f63b35 100%);
  return (
    <form id="form" className="form" onSubmit={handleSubmit((data) => {
      onSubmit(data);
      reset();
    })}>
      {filters.map((filter) => formInputsRender(filter))}
      <div>
        <Button
          label={"Agregar nueva frase"}
          type="submit"
        />
      </div>
    </form>
  );
};
