import Image from 'next/image';
import Hero from '@/components/home/hero';
import { Box } from '@mui/material';
import Search from '@/components/search/search';
import StepRent from '@/components/home/stepsRent';
import Services from '@/components/home/service';
import Discover from '@/components/home/discover';

export default function Home() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        bgcolor: '#fff',
      }}>
      <Box
        mt={10}
        sx={{
          display: 'flex',
          flexDirection: { sm: 'column', md: 'row' },
          justifyContent: 'space-between',
        }}>
        <Hero />
        <Box
          sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
          <Image
            src={'/image/thum-carsewa.png'}
            height={600}
            width={750}
          />
        </Box>
      </Box>
      <Search />
      <StepRent />
      <Services />
      <Discover />
    </Box>
  );
}
