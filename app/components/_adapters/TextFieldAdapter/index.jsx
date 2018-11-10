import React from 'react';
import TextField from '@material-ui/core/TextField';

export function TextFieldAdapter({
  input: { name, onChange, value, ...restInput },
  meta,
  ...rest
}) {
  return (
    <TextField
      {...rest}
      name={name}
      helperText={meta.touched ? meta.error : undefined}
      error={meta.error && meta.touched}
      InputProps={restInput}
      inputProps={rest}
      onChange={onChange}
      value={value}
      fullWidth
    />
  );
}
