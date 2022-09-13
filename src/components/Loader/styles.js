import styled, { keyframes } from 'styled-components';

const flickerAnimation = keyframes`
  0% {
    opacity: 1
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: ${({ theme }) => theme.colors.backgroundWithOpacity};
  display: flex;
  align-items: center;
  justify-content: center;

  .loader {
  /* color: #006FE6; // ${({ theme }) => theme.colors.primary.main}; */
  font-size: 90px;
  text-indent: -9999em;
  overflow: hidden;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  margin: 72px auto;
  position: relative;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
}

  img {
    position: fixed;
    left: 50%;
    width: 80px;
    transform: translateX(-50%);
    -webkit-animation: ${flickerAnimation} 1.7s infinite;
    -moz-animation: ${flickerAnimation} 1.7s infinite;
    -o-animation: ${flickerAnimation} 1.7s infinite;
    animation: ${flickerAnimation} 1.7s infinite;
  }
`;
