import {
  AppBar,
  Box,
  List,
  ListItemButton,
  Toolbar,
  Typography,
  Avatar,
  Button,
} from '@mui/material';
import Image from 'next/image';
import MenuOpenRoundedIcon from '@mui/icons-material/MenuOpenRounded';
import Link from 'next/link';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

export default function Navbar() {
  const isLogin = false;
  const userProfile = {
    name: 'sherlina tzu',
    image: 'avatar.png',
  };
  //   const Navtext = styled(Typography)({
  //     color: '#000',
  //     fontFamily: 'roboto',
  //     fontStyle: 'normal',
  //     fontWeight: 'bold',
  //     fontSize: '14px',
  //   });
  const UserAvatar = (props) => {
    const { userName, image } = props;
    return (
      <Button
        variant="contained"
        sx={{
          textTransform: 'none',
          mr: '10px',
        }}>
        <Avatar
          src={image}
          sx={{ width: 24, height: 24, mr: '5px' }}
        />
        <Typography>{userName}</Typography>
      </Button>
    );
  };
  return (
    <>
      <Box>
        <AppBar sx={{ bgcolor: '#fff' }}>
          <Toolbar
            sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Link href={'/'}>
              <Box
                sx={{
                  cursor: 'pointer',
                }}>
                <Image
                  src={'/icons/carsewa-logo.svg'}
                  height={30}
                  width={103}
                />
              </Box>
            </Link>
            <Box
              sx={{
                display: { xs: 'none', sm: 'none', md: 'block' },
              }}>
              <List sx={{ display: 'flex', flexDirection: 'row' }}>
                <ListItemButton>
                  <Typography
                    sx={{
                      color: '#000',
                      fontFamily: 'roboto',
                      fontStyle: 'normal',
                      fontWeight: 'bold',
                      fontSize: '14px',
                    }}>
                    Become a Renter
                  </Typography>
                </ListItemButton>
                <ListItemButton>
                  <Typography
                    sx={{
                      color: '#000',
                      fontFamily: 'roboto',
                      fontStyle: 'normal',
                      fontWeight: 'bold',
                      fontSize: '14px',
                    }}>
                    Renter Deals
                  </Typography>
                </ListItemButton>
                <ListItemButton>
                  <Typography
                    sx={{
                      color: '#000',
                      fontFamily: 'roboto',
                      fontStyle: 'normal',
                      fontWeight: 'bold',
                      fontSize: '14px',
                    }}>
                    How it Works
                  </Typography>
                </ListItemButton>
                <ListItemButton>
                  <Typography
                    sx={{
                      color: '#000',
                      fontFamily: 'roboto',
                      fontStyle: 'normal',
                      fontWeight: 'bold',
                      fontSize: '14px',
                    }}>
                    Why Chosen us
                  </Typography>
                </ListItemButton>

                {isLogin ? (
                  <div>
                    <Link href={'/profile'}>
                      <a>
                        <UserAvatar
                          userName={userProfile.userName}
                          image={userProfile.image}
                        />
                      </a>
                    </Link>
                    <Link href={'/signin'}>
                      <Button
                        variant="outlined"
                        onClick={() => {
                          googleLogout();
                          removeUser();
                        }}>
                        <ExitToAppIcon />
                      </Button>
                    </Link>
                  </div>
                ) : (
                  <Link href={'/signin'}>
                    <ListItemButton>
                      <Typography
                        sx={{
                          color: '#EB1D36',
                          fontSize: '20px',
                          fontFamily: 'roboto',
                          fontStyle: 'normal',
                          fontWeight: 'bold',
                          fontSize: '14px',
                        }}>
                        Login
                      </Typography>
                    </ListItemButton>
                  </Link>
                )}
              </List>
            </Box>
            <Box
              sx={{
                display: { xs: 'block', sm: 'block', md: 'none' },
              }}>
              <MenuOpenRoundedIcon
                fontSize="large"
                sx={{ color: '#EB1D36' }}
              />
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
