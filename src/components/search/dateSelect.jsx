'use client';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { useState } from 'react';

export default function DateSelect() {
  const [value, setValue] = useState('');
  const [date, setDate] = useState('');

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <DatePicker />
    </LocalizationProvider>
  );
}
