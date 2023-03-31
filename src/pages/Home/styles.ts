import styled from 'styled-components';

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  padding: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100px;
    background: linear-gradient(to top, #1c0522, transparent);
    z-index: 1000;
  }
`;

export const Banner = styled.h2<{ marginRight?: number; marginTop?: number }>`
  position: absolute;
  right: -300px;
  color: #fff;
  white-space: nowrap;
  font-size: 7.5vw;
  z-index: 9;
  margin-right: ${(props) => props.marginRight + 'px' ?? 0};
  margin-top: ${(props) => props.marginTop + 'px' ?? 0};
`;

export const Button = styled.a<{ marginTop?: number }>`
  text-decoration: none;
  display: inline-block;
  padding: 8px 30px;
  margin-top: ${(props) => props.marginTop + 'px' ?? 0};
  border-radius: 40px;
  background-color: #fff;
  color: #2b1055;
  font-size: 1.5em;
  z-index: 9;
  transform: translateY(100px);
`;

export const Image = styled.img<{ left?: number; top?: number }>`
  position: absolute;
  top: ${(props) => props.top + 'px' ?? 0};
  left: ${(props) => props.left + 'px' ?? 0};
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
`;

export const Moon = styled(Image)`
  mix-blend-mode: screen;
`;

export const MountainF = styled(Image)`
  z-index: 10;
`;

export const MountainB = styled(Image)``;
