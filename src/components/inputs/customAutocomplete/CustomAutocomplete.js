import { Autocomplete, TextField } from "@mui/material";
import React from "react";

const CustomAutocomplete = ({
    multiple = false,
    options, optionLabel = 'name', 
    defaultValue, value, label,
    onChange = () => {}, loading
}) => {

    return (
        <Autocomplete
            options={options}
            getOptionLabel={(option) => option[optionLabel] ?? ''}
            multiple={multiple}
            onChange={(_, value) => onChange(value)}
            defaultValue={defaultValue}
            value={value}
            loading={loading}
            renderInput={(params) => 
                <TextField  {...params} label={label} />
            }
        />
    )

}

export default CustomAutocomplete