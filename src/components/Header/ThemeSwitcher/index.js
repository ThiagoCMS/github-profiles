import React, { useContext } from 'react';
import styled from 'styled-components';

// import Moom from '../../../assets/night.svg';
import ThemeContext from '../../../context/ThemeContext';

const Svg = styled.svg`
  fill: ${(props) => (props.theme === 'light' ? 'undefined' : 'white')};
  height: 24px;
  margin-left: auto;
  stroke: white;
  stroke-width: 20px;
`;

function ThemeSwitcher() {
  const { state: { theme }, dispatch } = useContext(ThemeContext);

  function handleClick() {
    dispatch({ type: 'SWITCH_THEME' });
  }

  return (
    <Svg
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 312.999 312.999"
      theme={theme}
      onClick={handleClick}
    >
      <g>
        <g>
          <path d="M305.2,178.159c-3.2-0.8-6.4,0-9.2,2c-10.4,8.8-22.4,16-35.6,20.8c-12.4,4.8-26,7.2-40.4,7.2c-32.4,0-62-13.2-83.2-34.4
c-21.2-21.2-34.4-50.8-34.4-83.2c0-13.6,2.4-26.8,6.4-38.8c4.4-12.8,10.8-24.4,19.2-34.4c3.6-4.4,2.8-10.8-1.6-14.4
c-2.8-2-6-2.8-9.2-2c-34,9.2-63.6,29.6-84.8,56.8c-20.4,26.8-32.4,60-32.4,96c0,43.6,17.6,83.2,46.4,112s68,46.4,112,46.4
c36.8,0,70.8-12.8,98-34c27.6-21.6,47.6-52.4,56-87.6C314,184.959,310.8,179.359,305.2,178.159z"
          />
        </g>
      </g>
    </Svg>
  );
}

export default ThemeSwitcher;
