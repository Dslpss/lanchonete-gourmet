const theme = {
  colors: {
    primary: '#FF4B2B',    // Laranja vibrante
    secondary: '#2B7A78',  // Verde água moderno
    background: '#FFFFFF', // Branco puro
    text: '#2D3436',      // Cinza escuro suave
    accent: '#FFC107',    // Amarelo âmbar
    gradient: 'linear-gradient(45deg, #FF4B2B, #FF416C)', // Gradiente moderno
    success: '#00B894',   // Verde menta
    error: '#FF7675',     // Vermelho suave
    warning: '#FDCB6E',   // Amarelo claro
    info: '#74B9FF'       // Azul claro
  },
  
  fonts: {
    primary: "'Poppins', sans-serif",
    secondary: "'Montserrat', sans-serif",
    heading: "'Playfair Display', serif"
  },

  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    xxl: '3rem'
  },

  breakpoints: {
    mobile: '320px',
    tablet: '768px',
    desktop: '1024px',
    wide: '1280px'
  },

  shadows: {
    small: '0 2px 4px rgba(0,0,0,0.1)',
    medium: '0 4px 6px rgba(0,0,0,0.1)',
    large: '0 10px 15px rgba(0,0,0,0.1)',
    hover: '0 8px 15px rgba(0,0,0,0.2)'
  },

  transitions: {
    fast: '0.2s ease',
    medium: '0.3s ease',
    slow: '0.5s ease'
  },

  borderRadius: {
    small: '4px',
    medium: '8px',
    large: '12px',
    round: '50%'
  }
};

export default theme;