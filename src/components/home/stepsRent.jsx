import { Box, Typography } from '@mui/material';

import StepItem from './stepItem';

export default function StepRent() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '100px',
        padding: '20px',
        gap: '30px',
      }}>
      <Typography
        variant="h5"
        sx={{
          width: '131px',
          fontWeight: '600',
          fontSize: '24px',
          lineHeight: '28px',
          color: '#9E9E9E',
        }}>
        How it Work
      </Typography>
      <Typography
        sx={{
          fontWeight: '600',
          fontSize: '32px',
          lineHeight: '38px',
          color: '#000',
          textAlign: 'center',
        }}>
        Rent With Following <span style={{ color: 'red' }}>3</span>{' '}
        Working Steps
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: {
            xs: 'column',
            md: 'row',
          },
          alignItems: 'center',
          width: '100%',
          justifyContent: 'space-evenly',
          minHeight: '200px',
        }}>
        <StepItem
          image={'/icons/step-1.svg'}
          name={'Chose Location'}
          body={'Chose Your Location and Find Your Best Car'}
        />
        <StepItem
          image={'/icons/step-2.svg'}
          name={'Pick-up Date.'}
          body={'Select your Pickup date and Time Your Book Car'}
        />
        <StepItem
          image={'/icons/step-3.svg'}
          name={'Book Your Car.'}
          body={'Book Your Car and We Will Driver Directly For You'}
        />
      </Box>
    </Box>
  );
}
