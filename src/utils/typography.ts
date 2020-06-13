import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: 1.75,
  headerFontFamily: ['Futura PT', 'sans-serif'],
  bodyFontFamily: ['Merriweather', 'serif'],
});

if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles();
}

export default typography;
