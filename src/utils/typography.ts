import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '20px',
  baseLineHeight: 1.666,
  headerFontFamily: ['Futura PT', 'sans-serif'],
  bodyFontFamily: ['Merriweather', 'serif'],
});

if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles();
}

export default typography;
