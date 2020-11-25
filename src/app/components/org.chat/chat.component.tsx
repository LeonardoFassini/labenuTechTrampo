import { Hbox } from '@atomic/atm.box/hbox.component';
import { Divisor } from '@atomic/atm.divisor';
import { VSeparator } from '@atomic/atm.separator/separator.style';
import { H2 } from '@atomic/atm.typography';
import * as React from 'react';

import { FaIcons } from '../icons/fa-icons';
import { ChatMessage, ChatMessageProps } from '../mol.chat-message/chat-message.component';

export interface ChatProps {
  messages: ChatMessageProps[];
}

export const Chat: React.FC<ChatProps> = (props) => {
  return (
    <>
      <Hbox>
        <Hbox.Separator />
        <Hbox.Item>
          <Hbox>
            <Hbox.Item>
              <H2>Client Messages</H2>
            </Hbox.Item>
            <Hbox.Separator />
            <Hbox.Item noGrow>
              <FaIcons.Search />
            </Hbox.Item>
            <Hbox.Separator />
            <Hbox.Item noGrow>
              <FaIcons.Down />
            </Hbox.Item>
          </Hbox>
        </Hbox.Item>
        <Hbox.Separator />
      </Hbox>

      {props.messages.map((message) => {
        return (
          <React.Fragment key={message.id}>
            <VSeparator small />
            <Divisor noGutter />
            <VSeparator small />
            <ChatMessage
              author={message.author}
              date={message.date}
              imageUrl={message.imageUrl}
              message={message.message}
              id={message.id}
            />
          </React.Fragment>
        );
      })}
      <VSeparator small />
      <Divisor noGutter />
      <VSeparator small />
    </>
  );
};
