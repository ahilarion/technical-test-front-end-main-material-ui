import { Box, Typography } from '@mui/material';

function About() {
  return (
    <Box
      id="about-section"
      sx={{
        width: '100%',
        backgroundColor: '#f8f3e6',
        py: 10,
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: 'xl',
          mx: 'auto',
          px: { xs: 3, md: 10 },
          display: 'flex',
          flexDirection: { xs: 'column-reverse', md: 'row' }, 
          alignItems: { xs: 'center', md: 'center' },
          justifyContent: 'space-between',
          gap: { xs: 6, md: 12 }, 
        }}
      >
        <Box
          sx={{
            position: 'relative',
            width: { xs: '100%', md: '45%' },
            display: 'flex',
            justifyContent: 'center',
            mt: { xs: 4, md: 0 }, 
          }}
        >
          <Box
            component="img"
            src="images/image-about-us.png"
            alt="Tasse en forme de chat"
            sx={{
              maxWidth: '100%',
              height: 'auto',
              width: '100%'
            }}
          />
        </Box>

        <Box sx={{ width: { xs: '100%', md: '45%' } }}>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              mb: 3,
            }}
          >
            Qui sommes-nous ?
          </Typography>
          
          <Typography 
            variant="body1" 
            sx={{ 
              mb: { xs: 2, md: 2.5 },
              fontSize: { xs: '1rem', md: '1.1rem' },
              lineHeight: 1.6,
              color: '#333',
            }}
          >
            Bienvenue chez Café Neko, l'endroit où le café et les chats se rencontrent
            pour créer une expérience unique en son genre.
          </Typography>
          
          <Typography 
            variant="body1" 
            sx={{ 
              fontSize: { xs: '1rem', md: '1.1rem' },
              lineHeight: 1.6,
              color: '#333',
            }}
          >
            Chez Café Neko, nous sommes passionnés par deux choses : le café de
            qualité et le bien-être des chats. Fondé par des amoureux des félins et des
            aficionados du café, Café Neko est bien plus qu'un simple café. C'est un
            refuge pour les amoureux des chats, un havre de paix où l'on peut
            savourer une bonne tasse de café tout en câlinant nos adorables résidents
            à quatre pattes.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default About;
