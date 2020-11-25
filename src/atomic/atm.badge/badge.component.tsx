import { Border, Colors, FontFamily, Spacing } from '@atomic/atm.constants';
import * as ColorFn from 'color';
import styled from 'styled-components';

export const Badge = styled.div`
  padding-top: calc(${Spacing.Small} / 2);
  padding-bottom: calc(${Spacing.Small} / 2);
  font-family: ${FontFamily.Primary};
  color: ${Colors.Success};
  background-color: ${ColorFn(Colors.Success).lighten(0.9).string()};
  text-align: center;
  border-radius: ${Border.Radius};
`;
