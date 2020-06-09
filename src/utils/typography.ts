import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.666,
  headerFontFamily: ['Montserrat', 'sans-serif'],
  bodyFontFamily: ['Merriweather', 'serif'],
});

if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles();
}

export default typography;
