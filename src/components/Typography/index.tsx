import styled from 'styled-components';

export const PageTitle = styled.h1`
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  margin: 0;
`;

export const Title = styled.div`
  font-size: 18px;
  margin-bottom: 8px;
`;

export const Subtitle = styled.div`
  font-size: 12px;
  margin-bottom: 8px;
`;

export const Subject = styled.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: #FFFFFF;
`;

export const NavigationTitle = styled.h3`
  font-weight: bold;
  font-size: 11px;
  line-height: 12px;
  text-transform: uppercase;
  color: #FFFFFF;
  
  .collapse & {
    display: none;
  }
`;
