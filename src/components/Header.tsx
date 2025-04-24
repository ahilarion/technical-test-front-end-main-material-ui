import { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Button, 
  Box,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  useTheme
} from '@mui/material';  
import { Link } from 'react-scroll';

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMobileItemClick = () => {
    setMobileOpen(false);
  };

  const scrollLinkProps = {
    spy: true,
    smooth: true,
    offset: 0,
    duration: 700
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
          <img 
            src="/images/logo.svg" 
            alt="Café Neko Logo" 
            style={{ 
              height: isMobile ? '50px' : 'auto',
              maxWidth: isMobile ? '120px' : 'auto'
            }} 
          />
    
          {!isMobile && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
              <Button 
                variant='text' 
                color="secondary"
                component={Link}
                to="about-section"
                {...scrollLinkProps}
              >
                Qui sommes-nous ?
              </Button>
              <Button 
                variant='text' 
                color="secondary"
                component={Link}
                to="values-section"
                {...scrollLinkProps}
              >
                Nos valeurs
              </Button>
              <Button 
                variant='text' 
                color="primary"
                component={Link}
                to="booking-section"
                {...scrollLinkProps}
              >
                Réservez !
              </Button>
            </Box>
          )}

          {isMobile && (
            <IconButton
              edge="end"
              aria-label="menu"
              onClick={handleDrawerToggle}
              sx={{ p: 1 }}
            >
              <Box sx={{ width: 24, display: 'flex', flexDirection: 'column', gap: '5px', alignItems: 'center' }}>
                <Box sx={{ width: '100%', height: 3, bgcolor: 'black', borderRadius: 1 }}/>
                <Box sx={{ width: '100%', height: 3, bgcolor: 'black', borderRadius: 1 }}/>
                <Box sx={{ width: '100%', height: 3, bgcolor: 'black', borderRadius: 1 }}/>
              </Box>
            </IconButton>
          )}
        </Toolbar>
      </Container>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          '& .MuiDrawer-paper': { width: 240 },
        }}
      >
        <List>
          <ListItem disablePadding>
            <ListItemButton 
              component={Link}
              to="about-section"
              {...scrollLinkProps}
              onClick={handleMobileItemClick}
            >
              <ListItemText primary="Qui sommes-nous ?" sx={{ color: theme.palette.secondary.main }} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton 
              component={Link}
              to="values-section"
              {...scrollLinkProps}
              onClick={handleMobileItemClick}
            >
              <ListItemText primary="Nos valeurs" sx={{ color: theme.palette.secondary.main }} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton 
              component={Link}
              to="booking-section"
              {...scrollLinkProps}
              onClick={handleMobileItemClick}
            >
              <ListItemText primary="Réservez !" sx={{ color: theme.palette.primary.main }} />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </AppBar>
  );
}

export default Header;
