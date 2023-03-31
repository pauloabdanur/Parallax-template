import styled from 'styled-components';

export const ContentWrapper = styled.div`
  position: relative;
  padding: 100px;
  background: linear-gradient(#1c0522, transparent);
  overflow: hidden;
`;

export const Title = styled.h2`
  font-size: 3.5em;
  margin-bottom: 10px;
  color: #fff;
  text-align: center;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 5px;
`;

export const Text = styled.p`
  position: relative;
  border-radius: 20px;
  padding: 20px;
  font-size: 1.8em;
  color: #fff;
  text-align: justify;
`;
