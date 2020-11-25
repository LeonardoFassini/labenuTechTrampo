import { Spacing } from '@atomic/atm.constants';
import styled from 'styled-components';

interface VSeparatorProps {
  small?: boolean;
}

export const VSeparator = styled.div`
  padding-top: ${(props: VSeparatorProps) => (props.small ? Spacing.Small : Spacing.Medium)};
`;
