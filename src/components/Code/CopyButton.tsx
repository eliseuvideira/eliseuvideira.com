import React, { useState } from 'react';
import styled from 'styled-components';
import copy from 'copy-to-clipboard';

const StyledButton = styled.button`
  position: absolute;
  top: 0.25rem;
  right: 0.25rem;
  background-color: transparent;
  color: #d2d2d2;
  cursor: pointer;

  font-family: 'Futura PT', sans-serif;
  line-height: 1;
  border-style: none;
  padding: 0.5rem;
  transition: all 0.25s linear 0s;
  border-radius: 4px;
`;

const CopyButton: React.FC<{ code: string }> = ({ code }) => {
  const [values, setValues] = useState({ label: 'Copy', disabled: false });

  const toggleDisabled = () => {
    setValues({ label: 'Copied', disabled: true });
    setTimeout(() => setValues({ label: 'Copy', disabled: false }), 2000);
  };

  const onClick = () => {
    copy(code);
    toggleDisabled();
  };

  return (
    <StyledButton
      className="code-block-copy-button"
      onClick={onClick}
      disabled={values.disabled}
    >
      {values.label}
    </StyledButton>
  );
};

export default CopyButton;
