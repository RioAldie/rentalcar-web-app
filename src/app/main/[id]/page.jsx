import { Box } from '@mui/material';
import CarDetail from '@/components/main/carDetail';
import DatePick from '@/components/main/datePick';
import CounterCheckout from '@/components/main/counterCheckout';
import { car } from '@/lib/data';

export default function Detail() {
  return (
    <Box
      sx={{
        width: '100%',
        height: '170vh',
        bgcolor: '#F3F3F4',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Box
        sx={{
          width: '90%',
          minHeight: '100vh',
          background: '#fff',
          display: 'flex',
          justifySelf: 'center',
          alignSelf: 'center',
          mt: '100px',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}>
        <CarDetail />
        <Box
          sx={{
            width: '95%',
            minHeight: '400px',
            display: 'flex',
            flexDirection: 'column',
          }}>
          <CounterCheckout />
          <DatePick
            location={car.location}
            rentalData={{ ...car, quantity: 1, totalCost: 5000 }}
          />
        </Box>
      </Box>
    </Box>
  );
}
