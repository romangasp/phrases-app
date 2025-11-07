import { Paper, Typography } from "@mui/material";
import { CustomButton, Input } from "..";
import "./customForm.css";

import type { FormProps } from "./types";
import { Controller, useForm } from "react-hook-form";

export const CustomForm = ({ filters, onSubmit }: FormProps) => {
  const { handleSubmit, control, reset } = useForm();

  const formInputsRender = (filter: any) => {
    if (filter.type === "text") {
      return (
        <Controller
          key={filter.name}
          name={filter.name}
          control={control}
          rules={{ required: `${filter.label} es obligatorio` }}
          render={({ field, fieldState }) => (
            <Input
              label={filter.label}
              placeholder={filter.placeholder}
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
        {filters.map((filter) => formInputsRender(filter))}
        <div className="form-actions">
          <CustomButton
            label={"NUEVA FRASE"}
            type="submit"
            sx={{ fontWeight: "600", backgroundColor: "#d0b2d0"}}
          />
        </div>
      </form>
    </Paper>
  );
};
