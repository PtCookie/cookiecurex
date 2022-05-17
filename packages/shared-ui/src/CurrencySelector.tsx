import React from 'react';

import { Autocomplete, TextField } from '@mui/material';

export interface Currency {
  code: string;
  name: string;
}

interface Props {
  options: Currency[];
  value?: Currency | null;
  onChange?: (event: React.SyntheticEvent, value: Currency | null) => void;
  open: boolean;
  onOpen?: (event: React.SyntheticEvent) => void;
  onClose?: (event: React.SyntheticEvent) => void;
}

export function CurrencySelector({ options = [], value, onChange, open, onOpen, onClose }: Props) {
  return (
    <Autocomplete
      sx={{ width: 300 }}
      value={value}
      onChange={onChange}
      open={open}
      onOpen={onOpen}
      onClose={onClose}
      isOptionEqualToValue={(option, value) => option.code === value.code}
      getOptionLabel={(option) => option.name}
      options={options}
      renderInput={(params) => (
        <TextField
          {...params}
          label={'Currency'}
          InputProps={{
            ...params.InputProps,
            endAdornment: <React.Fragment>{params.InputProps.endAdornment}</React.Fragment>,
          }}
        />
      )}
    />
  );
}
