import React from "react";
import CustomAutocomplete from "../customAutocomplete/CustomAutocomplete";
import { Controller } from "react-hook-form";

const ControllerAutocomplete = ({
    label, control, name, optionLabel = "name", value, loading, options = []
}) => {

    return (
        <Controller
            control={control}
            name={name}
            defaultValue={value}
            render={({ field }) => (
                <CustomAutocomplete
                    {...field}
                    label={label}
                    options={options}
                    optionLabel={optionLabel}
                    defaultValue={value}
                    value={value}
                    loading={loading}
                />
            )}  
        />
    )

}

export default ControllerAutocomplete