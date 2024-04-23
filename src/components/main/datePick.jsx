'use client';
import {
  Box,
  Button,
  FormControl,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import Link from 'next/link';

const DatePick = (props) => {
  const { location, rentalData } = props;
  const [pickup, setPickup] = useState();
  const [returnDate, setReturnDate] = useState();

  const getPickUp = (date) => {
    setPickup(date);
  };
  const getReturnDate = (date) => {
    setReturnDate(date);
  };
  const setRentalOrderCheckout = () => {
    const date = { pickup: pickup, return: returnDate };
    const newrent = { ...rentalData, date };

    setRentDetail(newrent);
  };
  const BoxMain = {
    minHeight: '130px',
    display: 'flex',
    flexDirection: 'row',
    border: '3px solid #9E9E9E24',
    borderRadius: '10px',
    alignSelf: 'center',
    marginBottom: '100px',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    boxShadow: '0px 4px 4px 0px #00000040',
    flexWrap: 'wrap',
    marginTop: '40px',
    backgroundColor: '#fff',
    width: '100%',
    display: { xs: 'none', sm: 'none', md: 'flex' },
  };
  return (
    <Box sx={BoxMain}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        <Typography variant="h6" fontWeight={'bold'} fontSize={16}>
          Location
        </Typography>
        <Box sx={{ minWidth: 120 }}>
          <FormControl
            variant="standard"
            sx={{ m: 1, minWidth: 120 }}
            disabled>
            <Select
              labelId="demo-simple-select-disabled-label"
              id="demo-simple-select-disabled"
              value={location}>
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={location}>{location}</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        <Typography variant="h6" fontWeight={'bold'} fontSize={16}>
          Pick-up Date
        </Typography>
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <DatePicker
            value={pickup}
            onChange={(newValue) => {
              setPickup(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        <Typography variant="h6" fontWeight={'bold'} fontSize={16}>
          Return Date
        </Typography>
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <DatePicker
            value={returnDate}
            onChange={(newValue) => {
              setReturnDate(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </Box>
      <Box>
        <Link href={'/checkout'}>
          <Button
            variant="contained"
            sx={{
              height: '50px',
              fontWeight: '500',
              borderRadius: '11px',
              mt: '10px',
              width: '250px',
              bgcolor: '#EB1D36',
            }}>
            {' '}
            Checkout
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default DatePick;
