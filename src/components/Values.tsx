import { Box, Typography, Card, CardContent } from '@mui/material';

function Values() {
  const values = [
    {
      iconSrc: "/icons/coffee-icon.svg",
      title: "Passionné de Café",
      description: "Notre équipe est passionnée par l'art de préparer le café. Chaque grain est soigneusement sélectionné pour offrir une expérience gustative exceptionnelle. Nous nous engageons à vous offrir des saveurs riches et uniques dans chaque tasse."
    },
    {
      iconSrc: "/icons/cat-icon.svg",
      title: "Bien-être des Chats",
      description: "Le bonheur et le bien-être de nos amis félins sont au cœur de notre philosophie. Nous offrons un environnement sûr et confortable à nos chats résidents, où ils peuvent interagir avec nos clients et recevoir toute l'attention et l'affection qu'ils méritent."
    },
    {
      iconSrc: "/icons/plant-icon.svg",
      title: "Engagement Environnemental",
      description: "Nous sommes soucieux de l'impact environnemental de notre entreprise. C'est pourquoi nous nous engageons à utiliser des produits respectueux de l'environnement et à promouvoir des pratiques durables dans tous les aspects de notre activité, de la sélection des fournisseurs à la gestion des déchets."
    }
  ];

  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: '#f8f8f8',
        py: { xs: 6, sm: 7, md: 8 },
        px: { xs: 2, sm: 3 },
      }}
    >
      <Box
        sx={{
          maxWidth: '1200px',
          mx: 'auto',
        }}
      >
        <Typography
          variant="h2"
          component="h2"
          sx={{
            fontWeight: 600,
            textAlign: 'center',
            mb: { xs: 4, sm: 5, md: 6 },
            color: 'primary.main',
            fontSize: { xs: '1.75rem', sm: '2rem', md: '2.5rem' },
          }}
        >
          Nos valeurs
        </Typography>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: { xs: 3, sm: 4 } }}>
          {values.map((value, index) => (
            <Box 
              key={index}
              sx={{ 
                flex: { xs: '1 1 100%', md: '1 1 calc(33.33% - 32px)' },
                minWidth: { xs: '100%', md: 'calc(33.33% - 32px)' }
              }}
            >
              <Card
                sx={{
                  height: '100%',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.05)',
                  borderRadius: '8px',
                  display: 'flex',
                  flexDirection: 'column',
                  textAlign: 'center',
                }}
              >
                <CardContent
                  sx={{
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: { xs: 3, sm: 4 },
                  }}
                >
                  <Box
                    component="img"
                    src={value.iconSrc}
                    alt={value.title}
                    sx={{
                      width: { xs: '60px', sm: '70px' },
                      height: { xs: '60px', sm: '70px' },
                      mb: { xs: 2, sm: 3 },
                    }}
                  />
                  
                  <Typography
                    variant="h5"
                    component="h3"
                    sx={{
                      fontWeight: 700,
                      mb: { xs: 1.5, sm: 2 },
                      color: '#333',
                    }}
                  >
                    {value.title}
                  </Typography>
                  
                  <Typography
                    variant="body1"
                    sx={{
                      lineHeight: 1.7,
                      fontSize: { xs: '0.9rem', sm: '0.95rem' },
                    }}
                  >
                    {value.description}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default Values;
