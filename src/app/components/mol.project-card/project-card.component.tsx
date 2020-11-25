import { Badge } from '@atomic/atm.badge/badge.component';
import { Hbox } from '@atomic/atm.box/hbox.component';
import { Card } from '@atomic/atm.card/card.component';
import { Divisor } from '@atomic/atm.divisor';
import { ProgressBar } from '@atomic/atm.progress-bar/progress-bar.component';
import { VSeparator } from '@atomic/atm.separator/separator.style';
import { Centered, H3, TextSecondary } from '@atomic/atm.typography';
import * as React from 'react';
import { FaIcons } from '../icons/fa-icons';

import { ProfilesList } from '../mol.profiles-list/profiles-list.component';

export interface ProjectCardProps {
  title: string;
  subtitle: string;
  date: string;
  progress: number;
  daysRemaining: number;
  users: string[];
}

export const ProjectCard: React.FC<ProjectCardProps> = (props) => {
  return (
    <Card>
      <Hbox>
        <Hbox.Item vAlign='center'>
          <TextSecondary>{props.date}</TextSecondary>
        </Hbox.Item>
        <Hbox.Item hAlign='flex-end' vAlign='center'>
          <FaIcons.Down size='2x' />
        </Hbox.Item>
      </Hbox>
      <VSeparator />
      <H3>
        <Centered>{props.title}</Centered>
      </H3>
      <TextSecondary>
        <Centered>{props.subtitle}</Centered>
      </TextSecondary>
      <ProgressBar progress={props.progress} />
      <VSeparator small />
      <Divisor noGutter />
      <VSeparator small />
      <Hbox>
        <Hbox.Item vAlign='center'>
          <ProfilesList images={props.users} />
        </Hbox.Item>
        <Hbox.Separator />
        <Hbox.Item nogrow vAlign='center'>
          <Badge>{`${props.daysRemaining} day${props.daysRemaining > 1 ? 's' : ''} remaining`}</Badge>
        </Hbox.Item>
      </Hbox>
    </Card>
  );
};
