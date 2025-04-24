import { Box, Typography, Button, Container } from '@mui/material';
import { Link } from 'react-scroll'; 

function Hero() {
  const scrollLinkProps = {
    spy: true,
    smooth: true,
    offset: -70,
    duration: 700
  };

  return (
    <Container 
      maxWidth="xl"
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          alignItems: { xs: 'center', md: 'center' },
          px: { xs: 2, sm: 4, md: 10 },
          py: { xs: 6, sm: 8, md: 14 },
          gap: { xs: 6, md: 4 },
          mb: { xs: 6, sm: 0 },
        }}
      >
        <Box 
          sx={{
            display: 'flex',
            flexDirection: 'column',
            maxWidth: { xs: '100%', md: '50%' },
            gap: { xs: 3, md: 4 },
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          <Typography
            variant="h1"
          >
            Bienvenue <br /> chez Café Neko
          </Typography>
          <Typography
            variant="h4"
          >
            L'endroit où le café rencontre les ronronnements.
          </Typography>
          <Typography
            variant="body1"
          >
            Bienvenue dans notre univers où chaque tasse de café est
            accompagnée d'une dose d'amour félin.
          </Typography>
          <Button
            variant="contained"
            component={Link}
            to="booking-section" 
            {...scrollLinkProps}
            sx={{
              width: 'fit-content',
              mx: { xs: 'auto', md: 0 },
            }}
          >
            Nous contacter
          </Button>
        </Box>

        <Box
          sx={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: { xs: '100%', sm: '80%', md: '50%' },
          }}
        >
          <Box
            component="img"
            src="/images/blob.svg"
            alt=""
            sx={{
              position: 'absolute',
              width: { xs: '110%', md: '125%' },
              height: { xs: '110%', md: '120%' },
              zIndex: 0,
            }}
          />
          <Box
            component="img"
            src="/images/cat-hero-section.png"
            alt="Chat avec tasse de café"
            sx={{
              position: 'relative',
              zIndex: 1,
              maxWidth: '100%',
              height: 'auto',
            }}
          />
        </Box>
      </Box>
    </Container>
  );
}

export default Hero;
