import { Autocomplete, TextField } from "@mui/material";
import React from "react";

const CustomAutocomplete = ({
    multiple = false,
    options, optionLabel = 'name', 
    defaultValue, label
}) => {

    return (
        <Autocomplete
            options={options}
            getOptionLabel={(option) => option[optionLabel]}
            multiple={multiple}
            onChange={(_, value) => field.onChange(value)}
            defaultValue={defaultValue}
            renderInput={(params) => 
                <TextField  {...params} label={label} />
            }
        />
    )

}

export default CustomAutocomplete