import Typography from 'typography';
import githubTheme from 'typography-theme-github';

const typography = new Typography(githubTheme);

if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles();
}

export default typography;
