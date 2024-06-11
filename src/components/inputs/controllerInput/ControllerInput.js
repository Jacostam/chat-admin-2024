import { TextField } from "@mui/material";
import React from "react";
import { Controller } from "react-hook-form";

const ControllerInput = ({
    control,
    name,
    label = '',
    required = true,
}) => {

    return (
        <Controller
            rules={{required}}
            control={control}
            name={name}
            render={({field, fieldState : {error}}) => (
                <TextField
                    {...field}
                    fullWidth
                    error={error}
                    placeholder={label}
                    label={label}
                />
            )}
        />
    )

}

export default ControllerInput