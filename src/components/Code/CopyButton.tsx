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
  &:hover:enabled {
    background-color: #3c3c3c;
    box-shadow: rgba(46, 41, 51, 0.08) 0px 1px 2px,
      rgba(71, 63, 79, 0.08) 0px 2px 4px;
    color: #ffffff;
  }

  &:disabled {
    cursor: not-allowed;
  }
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
    <StyledButton onClick={onClick} disabled={values.disabled}>
      {values.label}
    </StyledButton>
  );
};

export default CopyButton;
