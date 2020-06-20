import React from 'react';
import { FaMoon as Moon, FaSun as Sun } from 'react-icons/fa';
import styled from 'styled-components';

const Wrapper = styled.label`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 30px;
  background-color: #0f1114;
  border-radius: 30px;
  transition: border-box 1s linear;
`;

const Checkbox = styled.input.attrs({
  type: 'checkbox',
})`
  display: none;
`;

const Slider = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;

  transition: 0.2s;

  cursor: pointer;
  border-radius: 50px;

  &:before {
    position: absolute;
    content: '';
    top: 4px;
    left: 4px;

    transition: 0.4s;

    height: 22px;
    width: 22px;
    background-color: #fafafa;
    border-radius: 50%;

    ${Checkbox}:checked + & {
      transform: translateX(20px);
    }

    ${Wrapper}:hover & {
      box-shadow: 0 0 4px 4px #79cd75;
    }
  }
`;

const DarkThemeToggle: React.FC<{
  darkMode: boolean;
  onToggle: () => void;
}> = ({ darkMode, onToggle }) => (
  <Wrapper>
    <Checkbox checked={darkMode} onClick={onToggle} />
    <Slider>
      <Sun color="#f1c40f" />
      <Moon color="#f1c40f" />
    </Slider>
  </Wrapper>
);

export default DarkThemeToggle;
