import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import ServiceItem from './serviceItem';

export default function Services() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: {
          xs: 'column-reverse',
          sm: 'column-reverse',
          md: 'row',
        },
        alignItems: 'center',
        minHeight: '100vh',
        width: '100%',
        justifyContent: 'space-evenly',
        mt: '150px',
      }}>
      <Box mt={10}>
        <Image
          src={'/image/thum-service.png'}
          height={428}
          width={561}
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
        }}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: '600',
            fontSize: '24px',
            lineHeight: '28px',
            color: '#9E9E9E',
            textAlign: 'center',
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
            maxWidth: '90%',
          }}>
          We Offer The <span style={{ color: 'red' }}> Best</span>{' '}
          Experience With Our Rental Deals
        </Typography>
        <ServiceItem
          primary={'Best Price Guaranted'}
          secondary={
            'Find Lower Price? We’ll refund you 100% of the difference.'
          }
          icon={'piggy-icon.svg'}
        />
        <ServiceItem
          primary="Experienced Driver"
          secondary={
            'Dont have a driver? Dont worry, We have many experienced driver for vou.'
          }
          icon={'driver-icon.svg'}
        />
        <ServiceItem
          primary="24 Hours Car Delivery"
          secondary={
            'Back your car anytime and we’ll delivery it directly for you.'
          }
          icon={'clock-icon.svg'}
        />
        <ServiceItem
          primary="24/7 Technical Support"
          secondary={
            'Have a question? Contact carsewa support anytime when you have problem.'
          }
          icon={'support-icon.svg'}
        />
      </Box>
    </Box>
  );
}
