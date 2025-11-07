import { Paper, Typography } from "@mui/material";
import { CustomButton, Input } from "..";
import "./customForm.css";

import type { FormProps } from "./types";
import { Controller, useForm } from "react-hook-form";

export const CustomForm = ({ inputs, onSubmit }: FormProps) => {
  const { handleSubmit, control, reset } = useForm();

  const formInputsRender = (input: any) => {
    if (input.type === "text") {
      return (
        <Controller
          key={input.name}
          name={input.name}
          control={control}
          rules={{ required: `${input.label} es obligatorio` }}
          render={({ field, fieldState }) => (
            <Input
              label={input.label}
              placeholder={input.placeholder}
              {...field}
              error={fieldState.invalid}
              helperText={fieldState.error?.message}
            />
          )}
        />
      );
    }
  };

  return (
    <Paper
      elevation={3}
      sx={{
        p: 4,
        borderRadius: 3,
        maxWidth: 500,
        minWidth: 300,
        mx: "auto",
        mt: 4,
        backgroundColor: "#f1f1f1",
        height: "10%",
        marginTop: 0,
      }}
    >
      <Typography
        textAlign="left"
        fontSize={"0.8rem"}
        marginBottom={"12rem"}
        mb={3}
        fontWeight={600}
        color="secondary"
      >
        AGREGAR FRASE
      </Typography>
      <form
        id="form"
        className="form"
        onSubmit={handleSubmit((data) => {
          onSubmit(data);
          reset({ phrase: "", author: "" });
        })}
      >
        {inputs.map((input) => formInputsRender(input))}
        <div className="form-actions">
          <CustomButton
            label={"NUEVA FRASE"}
            type="submit"
            sx={{ fontWeight: "600", backgroundColor: "#d0b2d0" }}
          />
        </div>
      </form>
    </Paper>
  );
};
