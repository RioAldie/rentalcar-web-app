import { Box, Typography } from '@mui/material';
import Image from 'next/image';
const Title = {
  width: 'max-content',
  height: 'max-content',
  fontSize: '44px',
  lineHeight: '52px',
  color: '#000',
  fontWeight: '600',
  margin: '0',
};
const BodyText = {
  width: '400px',
  height: '92px',
  fontSize: '20px',
  fontWeight: '400',
  lineHeight: '23px',
  color: '#9E9E9E',
  marginTop: '20px',
};
const PriceText = {
  fontSize: '32px',
  fontWeight: '500',
  color: '#EB1D36',
  height: '50px',
  lineHeight: '37px',
  margin: '0',
};
const DayText = {
  fontSize: '20px',
  color: '#9e9e9e',
  fontWeight: '500',
  lineHeight: '23px',
};

const CarDetail = () => {
  const car = {
    width: 300,
    carId: 'hnd78ysdiuaha8927ssw',
    name: 'Honda Accord Sedan',
    transmision: 'Automatic',
    location: 'Jakarta',
    category: 'Premium',
    currency: 'USD',
    speed: '280/Kmh',
    brand: 'Honda',
    seat: 4,
    cost: 199,
    urlImage: '/image/honda_PNG10330.png',
    height: 225,
  };
  const { currency, cost, urlImage, name } = car;
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: {
          md: 'row',
          sm: 'column',
          xs: 'column',
        },
        width: '90%',
        minHeight: '400px',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        gap: '50px',
      }}>
      <Box
        sx={{
          width: '400px',
          height: '300px',
          position: 'relative',
        }}>
        <Image
          src={`${urlImage}`}
          layout={'fill'}
          objectFit="contain"
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '610px',
          justifyContent: 'flex-start',
          height: '300px',
        }}>
        <Typography sx={PriceText}>
          {currency} {cost}
          <span style={DayText}>/Day</span>
        </Typography>
        <Typography sx={Title}>{name}</Typography>
        <Typography sx={BodyText}>
          The Honda CR-V is a compact crossover SUV manufactured by
          the Japanese automaker Honda since 1995 and introduced in
          the North American market in 1997.
        </Typography>
      </Box>
    </Box>
  );
};

export default CarDetail;
