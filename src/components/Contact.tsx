import { useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';

function Contact() {
  const [formData, setFormData] = useState({
    lastName: '',
    firstName: '',
    phone: '',
    email: '',
  });
  
  const [errors, setErrors] = useState({
    lastName: false,
    firstName: false,
    phone: false,
    email: false,
  });
  
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    
    if (name in errors) {
      setErrors((prev) => ({
        ...prev,
        [name]: false,
      }));
    }
    
    if (submitted) {
      setSubmitted(false);
    }
  };

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };
  
  const validatePhone = (phone: string) => {
    return /^[0-9+ ]{10,15}$/.test(phone);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const newErrors = {
      lastName: !formData.lastName.trim(),
      firstName: !formData.firstName.trim(),
      phone: !formData.phone.trim() || !validatePhone(formData.phone),
      email: !formData.email.trim() || !validateEmail(formData.email),
    };
    
    setErrors(newErrors);
    
    if (!Object.values(newErrors).includes(true)) {
      setSubmitted(true);
      
      setFormData({ lastName: '', firstName: '', phone: '', email: '' });
    }
  };

  return (
    <Box
      id="booking-section"
      sx={{
        width: '100%',
        backgroundColor: '#f8f3e6',
        py: 10,
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: '1080px',
          mx: 'auto',
          px: { xs: 3, md: 4 },
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: { xs: 'flex-start', md: 'center' },
          justifyContent: 'space-between',
          gap: { xs: 5, md: 8 },
        }}
      >
        <Box sx={{ width: { xs: '100%', md: '45%' } }}>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              mb: 3,
            }}
          >
            Réservez Votre Table !
          </Typography>
          
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '1rem', md: '1.1rem' },
              lineHeight: 1.6,
              color: '#333',
            }}
          >
            Réservez dès maintenant votre table pour une expérience caféinée inoubliable en compagnie de nos adorables chats. Plongez dans l'ambiance apaisante de Café Chatouille et laissez-vous séduire par nos délices caféinés et nos compagnons félins. Réservez dès aujourd'hui et préparez-vous à vivre un moment magique de détente et de plaisir.
          </Typography>
        </Box>
        
        <Box 
          component="form"
          onSubmit={handleSubmit}
          sx={{ 
            width: { xs: '100%', md: '45%' },
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
            gap: { xs: 3, sm: '0 24px' },
            rowGap: { sm: 4 },
            position: 'relative'
          }}
        >
          <Box sx={{ gridColumn: { xs: '1', sm: '1/2' }, display: 'flex', flexDirection: 'column' }}>
            <Typography variant="caption" sx={{fontWeight: 500, color: errors.lastName ? 'error.main' : '#333' }}>
              Nom*
            </Typography>
            <TextField 
              name="lastName"
              variant="standard"
              value={formData.lastName}
              onChange={handleChange}
              error={errors.lastName}
              InputProps={{
                disableUnderline: true,
                sx: { 
                  borderBottom: errors.lastName ? '1px solid #d32f2f' : '1px solid #333',
                }
              }}
              sx={{ mb: 1 }}
            />
            {errors.lastName && (
              <Typography variant="caption" color="error" sx={{ mt: 0.5, fontSize: '0.7rem' }}>
                Le nom est requis
              </Typography>
            )}
          </Box>
          
          <Box sx={{ gridColumn: { xs: '1', sm: '2/3' }, display: 'flex', flexDirection: 'column' }}>
            <Typography variant="caption" sx={{fontWeight: 500, color: errors.firstName ? 'error.main' : '#333' }}>
              Prénom*
            </Typography>
            <TextField 
              name="firstName"
              variant="standard"
              value={formData.firstName}
              onChange={handleChange}
              error={errors.firstName}
              InputProps={{
                disableUnderline: true,
                sx: { 
                  borderBottom: errors.firstName ? '1px solid #d32f2f' : '1px solid #333',
                }
              }}
              sx={{ mb: 1 }}
            />
            {errors.firstName && (
              <Typography variant="caption" color="error" sx={{ mt: 0.5, fontSize: '0.7rem' }}>
                Le prénom est requis
              </Typography>
            )}
          </Box>
          
          <Box sx={{ gridColumn: { xs: '1', sm: '1/2' }, display: 'flex', flexDirection: 'column' }}>
            <Typography variant="caption" sx={{fontWeight: 500, color: errors.phone ? 'error.main' : '#333' }}>
              N° de téléphone*
            </Typography>
            <TextField 
              name="phone"
              variant="standard"
              value={formData.phone}
              onChange={handleChange}
              error={errors.phone}
              InputProps={{
                disableUnderline: true,
                sx: { 
                  borderBottom: errors.phone ? '1px solid #d32f2f' : '1px solid #333',
                }
              }}
              sx={{ mb: 1 }}
            />
            {errors.phone && (
              <Typography variant="caption" color="error" sx={{ mt: 0.5, fontSize: '0.7rem' }}>
                Numéro de téléphone invalide
              </Typography>
            )}
          </Box>
          
          <Box sx={{ gridColumn: { xs: '1', sm: '2/3' }, display: 'flex', flexDirection: 'column' }}>
            <Typography variant="caption" sx={{fontWeight: 500, color: errors.email ? 'error.main' : '#333' }}>
              Adresse email*
            </Typography>
            <TextField 
              name="email"
              type="email"
              variant="standard"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
              InputProps={{
                disableUnderline: true,
                sx: { 
                  borderBottom: errors.email ? '1px solid #d32f2f' : '1px solid #333',
                }
              }}
              sx={{ mb: 1 }}
            />
            {errors.email && (
              <Typography variant="caption" color="error" sx={{ mt: 0.5, fontSize: '0.7rem' }}>
                Email invalide
              </Typography>
            )}
          </Box>
          
          <Box 
            sx={{ 
              gridColumn: '1 / -1',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
              mt: { xs: 2, sm: 0 }
            }}
          >
            <Button
              type="submit"
              variant="contained"
              sx={{
                minWidth: '140px',
              }}
            >
              Réserver
            </Button>
            
            {submitted && (
              <Typography 
                variant="body2" 
                sx={{ 
                  color: '#4caf50', 
                  mt: 2,
                  fontWeight: 500,
                }}
              >
                Votre réservation a bien été prise en compte. Nous vous contacterons sous peu.
              </Typography>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Contact;
