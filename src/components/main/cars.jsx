import { Box, Typography } from '@mui/material';
import CarItem from './carItem';
import { recentCars } from '@/lib/data';

export default function CarList() {
  const data = recentCars;
  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100%',
        bgcolor: '#fff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        mt: '100px',
      }}>
      {data.length ? (
        data.map((car) => {
          return <CarItem key={car.carId} car={car} />;
        })
      ) : (
        <Typography>No Result</Typography>
      )}
    </Box>
  );
}
