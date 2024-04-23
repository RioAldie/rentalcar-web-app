'use client';
import { Box, Button, styled, Typography } from '@mui/material';
import AirlineSeatReclineNormalIcon from '@mui/icons-material/AirlineSeatReclineNormal';
import CarCrashIcon from '@mui/icons-material/CarCrash';
import DiamondIcon from '@mui/icons-material/Diamond';
import SpeedIcon from '@mui/icons-material/Speed';
import { useEffect, useState } from 'react';
import { car } from '@/lib/data';

const CounterCheckout = () => {
  const [quantity, setQuantity] = useState(1);
  const { speed, category, transmision, seat, cost, currency } = car;
  const [totalCost, setTotalCost] = useState(cost);
  const handleMin = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const handlePlus = () => {
    setQuantity(quantity + 1);
  };
  const handleTotalCost = (q) => {
    setTotalCost(cost * q);
  };
  useEffect(() => {
    handleTotalCost(quantity);
  }, [quantity]);
  const PriceText = {
    fontSize: '32px',
    fontWeight: '500',
    color: '#EB1D36',
    lineHeight: '37px',
  };
  const ItemDetail = {
    display: 'flex',
    flexDirection: 'row',
    fontSize: '24px',
    fontWeight: '500',
    color: '#fff',
    alignItems: 'center',
    width: '170px',
    height: '50px',
    justifyContent: 'space-evenly',
  };

  const ButtonCounter = {
    width: '60px',
    height: '60px',
    borderRadius: '5px',
    fontSize: '24px',
    color: '#EB1D36',
  };
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: {
          xs: 'column',
          sm: 'column',
          md: 'row',
        },
        width: '100%',
        p: '20px',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        border: 'solid #EB1D36 2px',
        borderRadius: '11px',
      }}>
      <Box
        sx={{
          width: '450px',
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          minHeight: '200px',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          bgcolor: '#EB1D36',
          borderRadius: '10px',
        }}>
        <Box sx={ItemDetail}>
          <CarCrashIcon />
          {transmision}
        </Box>
        <Box sx={ItemDetail}>
          <AirlineSeatReclineNormalIcon />
          {seat} Seats
        </Box>
        <Box sx={ItemDetail}>
          <DiamondIcon />
          {category}
        </Box>
        <Box sx={ItemDetail}>
          <SpeedIcon />
          {speed}
        </Box>
      </Box>
      <Box
        sx={{
          width: '500px',
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'wrap',
          minHeight: '200px',
          justifyContent: 'space-around',
          ml: '20px',
        }}>
        {/* counter */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            minWidth: '400px',
          }}>
          <Typography
            sx={{
              fontWeight: '500',
              fontSize: '20px',
              lineHeight: '23px',
            }}>
            Rent Days:{' '}
          </Typography>

          <Button
            sx={ButtonCounter}
            variant="outlined"
            onClick={() => handleMin()}>
            -
          </Button>
          <span
            style={{
              width: '200px',
              fontSize: '24px',
              textAlign: 'center',
            }}>
            {quantity}
          </span>
          <Button
            sx={ButtonCounter}
            variant="outlined"
            onClick={() => handlePlus()}>
            +
          </Button>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            minWidth: '400px',
          }}>
          <Typography
            sx={{
              fontWeight: '500',
              fontSize: '20px',
              lineHeight: '23px',
              textAlign: 'start',
            }}>
            Total Cost:{' '}
          </Typography>
          <Typography sx={PriceText}>
            {currency} {totalCost === 0 ? cost : totalCost}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default CounterCheckout;
