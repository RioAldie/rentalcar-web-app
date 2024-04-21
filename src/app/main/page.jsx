import Banner from '@/components/main/banner';
import CarList from '@/components/main/cars';
import { Box } from '@mui/material';

const MainPage = () => {
  return (
    <Box>
      <Banner />
      <CarList />
    </Box>
  );
};

export default MainPage;
