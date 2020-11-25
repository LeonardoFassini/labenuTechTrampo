import { Hbox } from '@atomic/atm.box/hbox.component';
import { ProfileIcon } from '@atomic/atm.profile-icon/profile-icon.component';
import * as React from 'react';

import { FaIcons } from '../icons/fa-icons';

interface ProfilesListProps {
  images: string[];
}

export const ProfilesList: React.FC<ProfilesListProps> = (props) => {
  return (
    <>
      <Hbox>
        {props.images.map((image, index) => (
          <Hbox.Item key={index} vAlign='center' noGrow>
            <ProfileIcon src={image} listing={index > 0} />
          </Hbox.Item>
        ))}
        <Hbox.Separator />
        <Hbox.Item vAlign='center' noGrow>
          <FaIcons.Plus size='2x' />
        </Hbox.Item>
      </Hbox>
    </>
  );
};
