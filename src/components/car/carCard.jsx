import { Box, styled, Typography } from '@mui/material';
import DiamondIcon from '@mui/icons-material/Diamond';
import AirlineSeatReclineNormalIcon from '@mui/icons-material/AirlineSeatReclineNormal';
import MinorCrashIcon from '@mui/icons-material/MinorCrash';
import Image from 'next/image';
import SpeedIcon from '@mui/icons-material/Speed';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

export default function CarCard(props) {
  const {
    image,
    name,
    price,
    category,
    seats,
    transmisi,
    speed,
    height,
    widht,
  } = props;

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '303px',
          height: '403px',
          boxShadow: '0px 4px 4px 0px #00000040',
          border: '1px solid #9E9E9E24',
          alignItems: 'center',
          borderRadius: '18px',
          justifyContent: 'space-evenly',
          mb: '20px',
          zIndex: 100,
        }}>
        <Box
          sx={{
            width: '282px',
            height: '313px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            border: '1px solid #d9d9d9',
            borderRadius: '25px',
            justifyContent: 'space-evenly',
          }}>
          <Image
            src={`/image/${image}`}
            width={widht}
            height={height}
          />
          <Typography
            sx={{
              fontSize: '20px',
              fontWeight: '600',
              color: '#000',
              textAlign: 'left',
            }}>
            {name}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              width: '280px',
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-evenly',
              alignItems: 'center',
            }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                fontSize: '16px',
                fontWeight: '500',
                color: '#9e9e9e',
                alignItems: 'center',
                width: '100px',
              }}>
              <DiamondIcon
                sx={{
                  fontSize: '20px',
                  color: '#9e9e9e',
                }}
              />
              {category}
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                fontSize: '16px',
                fontWeight: '500',
                color: '#9e9e9e',
                alignItems: 'center',
                width: '100px',
              }}>
              <AirlineSeatReclineNormalIcon
                sx={{
                  fontSize: '20px',
                  color: '#9e9e9e',
                }}
              />
              {seats} Seats
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                fontSize: '16px',
                fontWeight: '500',
                color: '#9e9e9e',
                alignItems: 'center',
                width: '100px',
              }}>
              <MinorCrashIcon
                sx={{
                  fontSize: '20px',
                  color: '#9e9e9e',
                  height: '16px',
                }}
              />
              {transmisi}
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                fontSize: '16px',
                fontWeight: '500',
                color: '#9e9e9e',
                alignItems: 'center',
                width: '100px',
              }}>
              <SpeedIcon
                sx={{
                  fontSize: '20px',
                  color: '#9e9e9e',
                }}
              />
              {speed}
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            width: '350px',
          }}>
          <Typography
            sx={{
              fontSize: '20px',
              fontWeight: '600',
              color: '#000',
            }}>
            {price}
            <span
              style={{
                fontSize: '12px',
                color: '#9e9e9e',
              }}>
              /Day
            </span>
          </Typography>
          <Typography
            sx={{
              fontSize: '16px',
              fontWeight: '600',
              color: '#ff3951',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            Rent Now <ArrowRightAltIcon />
          </Typography>
        </Box>
      </Box>
    </>
  );
}
