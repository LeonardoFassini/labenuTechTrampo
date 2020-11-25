import { Colors } from '@atomic/atm.constants';
import styled from 'styled-components';
import * as ColorFn from 'color';

export const ProgressBarBackground = styled.div`
  background-color: ${Colors.XLightGray};
  width: 100%;
  height: 10px;
  border-radius: 50px;
`;

export const ProgressBarCompleted = styled.div<{ progress: number }>`
  background-color: ${ColorFn(Colors.Success).lighten(0.9).string()};
  width: ${(props) => `${props.progress}%`};
  height: 10px;
  border-radius: 50px;
`;
