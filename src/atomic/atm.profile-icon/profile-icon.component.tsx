import { BoxShadow } from '@atomic/atm.constants';
import styled from 'styled-components';

export const ProfileIcon = styled.img<{ listing?: boolean }>`
  height: 35px;
  width: 35px;
  border-radius: 100%;
  ${(props) => props.listing && `margin-left: -15px;`}
  box-shadow: ${BoxShadow.Depht2};
`;
