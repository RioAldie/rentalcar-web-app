import { Box, CardMedia, Typography } from '@mui/material';
import Search from '../search/search';

export default function Banner() {
  return (
    <>
      <Box
        sx={{
          position: 'absolute',
          top: {
            md: '330px',
            xs: '280px',
          },
          zIndex: '10000',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
        }}>
        <Search />
      </Box>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
        }}>
        <Typography
          sx={{
            position: 'absolute',
            top: '180px',
            color: '#fff',
            width: '100%',
            textAlign: 'center',
            fontSize: {
              md: '44px',
              sm: '38px',
              xs: '36px',
            },
            fontWeight: '700',
            lineHeight: '83px',
            zIndex: '100',
          }}>
          Enjoy Your Ride With
          <span
            style={{
              textAlign: 'center',
              fontSize: {
                md: '44px',
                sm: '38px',
                xs: '36px',
              },
              fontWeight: '700',
              lineHeight: '43px',
              color: '#EB1D36',
            }}>
            Carsewa
          </span>
        </Typography>
        <CardMedia
          image="/image/bg-rent.png"
          sx={{
            width: '100%',
            height: '464px',
            zIndex: '10',
          }}></CardMedia>
      </Box>
    </>
  );
}
