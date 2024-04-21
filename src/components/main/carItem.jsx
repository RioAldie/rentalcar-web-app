import { Box, Button, styled, Typography } from '@mui/material';
import Image from 'next/image';
import AirlineSeatReclineNormalIcon from '@mui/icons-material/AirlineSeatReclineNormal';
import CarCrashIcon from '@mui/icons-material/CarCrash';
import DiamondIcon from '@mui/icons-material/Diamond';
import SpeedIcon from '@mui/icons-material/Speed';
import Link from 'next/link';

export default function CarItem(props) {
  const { car } = props;
  const ItemDetail = {
    display: 'flex',
    flexDirection: 'row',
    fontSize: '20px',
    fontWeight: '500',
    color: '#9e9e9e',
    alignItems: 'center',
    width: '100px',
    height: '50px',
  };
  const PriceText = {
    fontSize: '32px',
    fontWeight: '500',
    color: '#EB1D36',
    lineHeight: '37px',
  };
  const DayText = {
    fontSize: '20px',
    color: '#9e9e9e',
    fontWeight: '500',
    lineHeight: '23px',
  };
  return (
    <>
      <Box
        sx={{
          width: '90%',
          minHeight: '254px',
          display: 'flex',
          flexDirection: {
            xs: 'column',
            sm: 'row',
            md: 'row',
          },
          flexWrap: 'wrap',
          justifyContent: 'space-evenly',
          boxShadow: '0px 4px 4px 0px #00000040',
          borderRadius: '10px',
          mt: '40px',
          alignItems: 'center',
          p: '20px',
        }}>
        <div>
          <Image
            src={car.urlImage}
            width={car.width}
            height={car.height}
            alt=""
          />
        </div>

        <Box
          sx={{
            width: '220px',
            height: '215px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
          }}>
          <Typography
            sx={{
              fontSize: '24px',
              fontWeight: '600',
              lineHeight: '28px',
              color: '#000',
              mb: '20px',
              mt: '20px',
            }}>
            {car.name}
          </Typography>
          <Box sx={ItemDetail}>
            <CarCrashIcon
              sx={{
                fontSize: '28px',
                color: '#9e9e9e',
                height: '25px',
              }}
            />
            {car.transmision}
          </Box>
          <Box
            sx={{
              color: '#EB1D36',
            }}>
            <AirlineSeatReclineNormalIcon
              sx={{
                fontSize: '28px',
                color: '#EB1D36',
                height: '25px',
              }}
            />
            {car.seat} Seats
          </Box>
          <Box sx={ItemDetail}>
            <DiamondIcon
              sx={{
                fontSize: '28px',
                color: '#9e9e9e',
                height: '25px',
              }}
            />
            {car.category}
          </Box>
          <Box sx={ItemDetail}>
            <SpeedIcon
              sx={{
                fontSize: '28px',
                color: '#9e9e9e',
                height: '25px',
              }}
            />
            {car.speed}
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
          }}>
          <Typography sx={PriceText}>
            {car.currency} {car.cost}
            <span style={DayText}>/Day</span>
          </Typography>
          <Link href={`/detail/${car.carId}`}>
            <Button
              sx={{
                width: '259px',
                height: '48px',
                bgcolor: '#EB1D36',
                borderRadius: '32px',
              }}
              variant="contained">
              Rent Now
            </Button>
          </Link>
        </Box>
      </Box>
    </>
  );
}
