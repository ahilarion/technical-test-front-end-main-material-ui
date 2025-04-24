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

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
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
              <Button variant='text' color="secondary">Qui sommes-nous ?</Button>
              <Button variant='text' color="secondary">Nos valeurs</Button>
              <Button variant='text' color="primary">Réservez !</Button>
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
            <ListItemButton onClick={handleDrawerToggle}>
              <ListItemText primary="Qui sommes-nous ?" sx={{ color: theme.palette.secondary.main }} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={handleDrawerToggle}>
              <ListItemText primary="Nos valeurs" sx={{ color: theme.palette.secondary.main }} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={handleDrawerToggle}>
              <ListItemText primary="Réservez !" sx={{ color: theme.palette.primary.main }} />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </AppBar>
  );
}

export default Header;
