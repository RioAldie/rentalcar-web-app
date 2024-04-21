import { Box, styled, Typography } from '@mui/material';
import Image from 'next/image';
import PhoneIcon from '@mui/icons-material/Phone';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

export default function Footer() {
  const product = ['Career', 'Cars', 'Features', 'Price', 'Banks'];
  const resource = [
    'Guides',
    'Help Center',
    'Partner',
    'Developer',
    'API Service',
  ];
  const about = [
    'Why chose us',
    'Our story',
    'Investor',
    'Advertise',
  ];
  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '500px',
        maxHeight: '1200px',
        display: 'flex',
        flexDirection: {
          md: 'row',
        },
        justifyContent: 'space-evenly',
        bgcolor: '#1A0000',
        mt: '100px',
        mb: '0',
        alignItems: 'center',
        flexWrap: 'wrap',
      }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: {
            md: 'center',
            sm: 'center',
            xs: 'center',
          },
          justifyContent: 'space-evenly',
          width: {
            md: '250px',
            sm: '100%',
            xs: '100%',
          },
          height: '300px',
        }}>
        <Image
          src={'/icons/logo-footer.svg'}
          width={173}
          height={60}
        />
        <Typography
          variant="body2"
          color={'#d9d9d9'}
          sx={{
            textAlign: 'center',
          }}>
          Jln. Panglima Sudirman No.441 Jakarta Pusat
        </Typography>
        <Typography
          variant="h6"
          color={'#d9d9d9'}
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}>
          <PhoneIcon /> +62895702695858
        </Typography>
      </Box>
      <Box
        sx={{
          width: {
            md: '250px',
            sm: '100%',
            xs: '100%',
          },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          maxHeight: '250px',
          marginTop: '30px',
        }}>
        <Typography
          sx={{
            fontSize: '18px',
            fontWeight: '600',
            color: '#ffff',
          }}>
          Our Product
        </Typography>
        {product.map((item, i) => {
          return (
            <Typography
              sx={{
                fontSize: '18px',
                color: '#9e9e9e',
                fontWeight: '400',
              }}
              key={i}>
              {item}
            </Typography>
          );
        })}
      </Box>
      <Box
        sx={{
          width: {
            md: '250px',
            sm: '100%',
            xs: '100%',
          },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          maxHeight: '250px',
          marginTop: '30px',
        }}>
        <Typography
          sx={{
            fontSize: '18px',
            fontWeight: '600',
            color: '#ffff',
          }}>
          Resource
        </Typography>
        {resource.map((item, i) => {
          return (
            <Typography
              sx={{
                fontSize: '18px',
                color: '#9e9e9e',
                fontWeight: '400',
              }}
              key={i}>
              {item}
            </Typography>
          );
        })}
      </Box>
      <Box
        sx={{
          width: {
            md: '250px',
            sm: '100%',
            xs: '100%',
          },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          maxHeight: '250px',
          marginTop: '30px',
        }}>
        <Typography
          sx={{
            fontSize: '18px',
            fontWeight: '600',
            color: '#ffff',
          }}>
          About Carsewa
        </Typography>
        {about.map((item, i) => {
          return (
            <Typography
              sx={{
                fontSize: '18px',
                color: '#9e9e9e',
                fontWeight: '400',
              }}
              key={i}>
              {item}
            </Typography>
          );
        })}
      </Box>
      <Box
        sx={{
          width: '80%',
          display: 'flex',
          flexDirection: 'row',
          mt: '50px',
          mb: '40px',
        }}>
        <Typography
          sx={{
            fontSize: '18px',
            fontWeight: '600',
            color: '#ffff',
          }}>
          Follow Us:
        </Typography>
        <FacebookIcon
          sx={{
            color: '#fff',
            ml: '20px',
          }}
        />
        <InstagramIcon
          sx={{
            color: '#fff',
            ml: '20px',
          }}
        />
        <YouTubeIcon
          sx={{
            color: '#fff',
            ml: '20px',
          }}
        />
      </Box>
    </Box>
  );
}
