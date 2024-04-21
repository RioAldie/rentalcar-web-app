import { Box, Button, Typography } from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';
import DateSelect from './dateSelect';
import LocationSelect from './locationSelect';

export default function Search() {
  return (
    <Box
      sx={{
        width: { md: '80%', sm: '80%' },
        display: { xs: 'none', sm: 'none', md: 'flex' },
        minHeight: '130px',
        display: 'flex',
        flexDirection: 'row',
        border: '3px solid #9E9E9E24',
        borderRadius: '10px',
        alignSelf: 'center',
        marginBottom: '20px',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        boxShadow: '0px 4px 4px 0px #00000040',
        flexWrap: 'wrap',
        marginTop: '40px',
        backgroundColor: '#fff',
      }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        <Typography variant="h6" fontWeight={'bold'} fontSize={16}>
          Location
        </Typography>
        <LocationSelect />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        <Typography variant="h6" fontWeight={'bold'} fontSize={16}>
          Pick-up Date
        </Typography>
        <DateSelect />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        <Typography variant="h6" fontWeight={'bold'} fontSize={16}>
          Return Date
        </Typography>
        <DateSelect />
      </Box>
      <Box>
        <Button
          variant="contained"
          sx={{
            height: '50px',
            fontWeight: '500',
            borderRadius: '11px',
            mt: '10px',
            bgcolor: '#EB1D36',
          }}>
          {' '}
          <SearchIcon /> Search
        </Button>
      </Box>
    </Box>
  );
}
