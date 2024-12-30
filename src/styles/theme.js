const baseTheme = {
  fonts: {
    primary: "'Poppins', sans-serif",
    secondary: "'Montserrat', sans-serif",
    heading: "'Playfair Display', serif",
    sizes: {
      xs: '0.75rem',    // 12px
      sm: '0.875rem',   // 14px
      md: '1rem',       // 16px
      lg: '1.125rem',   // 18px
      xl: '1.25rem',    // 20px
      xxl: '1.5rem',    // 24px
      xxxl: '2rem'      // 32px
    },
    weights: {
      light: 300,
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700
    }
  },
  
  spacing: {
    xs: '0.25rem',     // 4px
    sm: '0.5rem',      // 8px
    md: '1rem',        // 16px
    lg: '1.5rem',      // 24px
    xl: '2rem',        // 32px
    xxl: '3rem',       // 48px
    xxxl: '4rem'       // 64px
  },

  breakpoints: {
    xs: '320px',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
    xxl: '1400px'
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

const lightTheme = {
  ...baseTheme,
  colors: {
    primary: '#FF4B2B',
    secondary: '#2B7A78',
    tertiary: '#FFC107',
    background: '#FFFFFF',
    surface: '#F8F9FA',
    text: {
      primary: '#2D3436',
      secondary: '#000',
      disabled: '#B2BEC3'
    },
    success: '#00B894',
    error: '#FF7675',
    warning: '#FDCB6E',
    info: '#74B9FF',
    accent: '#FF416C',
    divider: 'rgba(0, 0, 0, 0.12)',
    overlay: 'rgba(0, 0, 0, 0.5)'
  }
};

const darkTheme = {
  ...baseTheme,
  colors: {
    primary: '#2B7A78',
    secondary: '#CCC',
    tertiary: '#FFD700',
    background: '#121212', // Fundo principal
    surface: '#1E1E1E',    // Superfícies como cartões
    text: {
      primary: '#E0E0E0',  // Texto principal
      secondary: '#FFF',// Texto secundário
      disabled: '#757575'  // Texto desabilitado
    },
    success: '#00B894',
    error: '#FF7675',
    warning: '#FDCB6E',
    info: '#74B9FF',
    accent: '#FF4B2B',
    divider: 'rgba(255, 255, 255, 0.12)',
    overlay: 'rgba(0, 0, 0, 0.75)'
  }
};

export { lightTheme, darkTheme };