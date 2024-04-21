import { Box, Button, Typography } from '@mui/material';

export default function Hero() {
  return (
    <Box
      sx={{
        maWidth: '525px',
        maxHeight: '506px',
        marginLeft: '10%',
        marginTop: '40px',
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
      }}>
      <Typography
        sx={{
          fontSize: '48px',
          color: '#000',
          fontFamily: 'Roboto',
          fontWeight: '700',
          maxWidth: '500px',
          maxHeight: '130px',
          lineHeight: '83px',
        }}>
        Rental Car with <span style={{ color: '#EB1D36' }}>Easy</span>{' '}
        And <span style={{ color: '#EB1D36' }}>Quick</span> Steps.
      </Typography>
      <Typography
        sx={{
          color: '#9E9E9E',
          fontFamily: 'Roboto',
          fontWeight: '500',
          lineHeight: '31px',
          maxWidth: '560px',
        }}>
        Rent a Car Whenever and Whereever with Carsewa, Easy and Quick
        Steps,Only find, book and you can Ride a Car .
      </Typography>

      <Button
        variant="contained"
        sx={{
          bgcolor: '#EB1D36',
          width: '150px',
          height: '50px',
          borderRadius: '5px',
        }}>
        Join Now
      </Button>
    </Box>
  );
}
