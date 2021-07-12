import { FormControl, FormHelperText, InputLabel, NativeSelect } from '@material-ui/core'
import React from 'react'
import './index.css'
export default function Country({value, handleOnChange , countries}) {
    return (
        <FormControl>
            <InputLabel htmlFor="country-selector" shrink>Quốc Gia:</InputLabel>
            <NativeSelect 
                value={value} 
                onChange={handleOnChange}
                inputProps={{
                    name:'country',
                    id:'country-selector'
                }}>
                    {
                        countries.map((countries)=>{
                            return <option value={countries.ISO2.toLowerCase()}>{countries.Country}</option>
                        })
                    }
            </NativeSelect>
            <FormHelperText>Lựa chọn quốc gia bạn muốn xem.</FormHelperText>
        </FormControl>
    )
}
