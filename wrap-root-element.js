import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import Code from './src/components/Code';
import { preToCodeBlock } from 'mdx-utils';

export const wrapRootElement = (() => {
  const components = {
    pre: (preProps) => {
      const props = preToCodeBlock(preProps);

      if (props) {
        return <Code {...props} />;
      }
      return <pre {...preProps} />;
    },
  };

  return ({ element }) => (
    <MDXProvider components={components}>{element}</MDXProvider>
  );
})();
