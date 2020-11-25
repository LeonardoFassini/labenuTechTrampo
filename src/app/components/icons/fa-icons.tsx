import { Colors } from '@atomic/atm.constants';
import {
  faAngleDown,
  faCheckSquare,
  faPlus,
  faSearch,
  faSquare,
  faStar,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import * as React from 'react';

export const FaIcons = {
  Checkbox: (props: Partial<FontAwesomeIconProps>) => (
    <FontAwesomeIcon {...props} color={Colors.Primary} icon={faSquare} />
  ),
  CheckboxChecked: (props: Partial<FontAwesomeIconProps>) => (
    <FontAwesomeIcon {...props} color={Colors.Primary} icon={faCheckSquare} />
  ),
  Close: (props: Partial<FontAwesomeIconProps>) => <FontAwesomeIcon {...props} color={Colors.Primary} icon={faTimes} />,
  Plus: (props: Partial<FontAwesomeIconProps>) => <FontAwesomeIcon icon={faPlus} {...props} />,
  Down: (props: Partial<FontAwesomeIconProps>) => <FontAwesomeIcon icon={faAngleDown} {...props} />,
  Star: (props: Partial<FontAwesomeIconProps>) => <FontAwesomeIcon icon={faStar} {...props} />,
  Search: (props: Partial<FontAwesomeIconProps>) => <FontAwesomeIcon icon={faSearch} {...props} />,
};
