import { Hbox } from '@atomic/atm.box/hbox.component';
import { ProfileIcon } from '@atomic/atm.profile-icon/profile-icon.component';
import { H3, Text, TextSecondary } from '@atomic/atm.typography';
import * as React from 'react';

import { FaIcons } from '../icons/fa-icons';

export interface ChatMessageProps {
  author: string;
  message: string;
  imageUrl: string;
  date: string;
  id: string;
}

export const ChatMessage: React.FC<ChatMessageProps> = (props) => {
  return (
    <Hbox>
      <Hbox.Item>
        <Hbox>
          <Hbox.Item vAlign='center' noGrow>
            <ProfileIcon src={props.imageUrl} />
          </Hbox.Item>
          <Hbox.Separator />
          <Hbox.Item>
            <Hbox>
              <Hbox.Item>
                <H3>{props.author}</H3>
              </Hbox.Item>
              <Hbox.Separator />
              <Hbox.Item noGrow>
                <FaIcons.Star />
              </Hbox.Item>
            </Hbox>
            <Text>{props.message}</Text>
          </Hbox.Item>
        </Hbox>
        <Hbox>
          <Hbox.Item hAlign='flex-end'>
            <TextSecondary>{props.date}</TextSecondary>
          </Hbox.Item>
        </Hbox>
      </Hbox.Item>
    </Hbox>
  );
};
