import { Colors, Spacing } from '@atomic/atm.constants';
import styled from 'styled-components';

export const Divisor = styled.div<{ noGutter?: boolean }>`
  height: 1px;
  ${(props) => props.noGutter && `margin-left: -${Spacing.Medium};`}
  ${(props) => props.noGutter && `margin-right: -${Spacing.Medium};`}
  background-color: ${Colors.LightGray};
`;
