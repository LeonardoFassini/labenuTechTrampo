import { Hbox } from '@atomic/atm.box/hbox.component';
import { Text } from '@atomic/atm.typography';
import * as React from 'react';

import { ProgressBarBackground, ProgressBarCompleted } from './progress-bar.style';

interface ProgressBarProps {
  progress: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = (props) => {
  return (
    <>
      <Text bold>Progress</Text>
      <ProgressBarBackground>
        <ProgressBarCompleted progress={props.progress} />
      </ProgressBarBackground>
      <Hbox>
        <Hbox.Item hAlign='flex-end'>
          <Text bold>{props.progress.toString()}%</Text>
        </Hbox.Item>
      </Hbox>
    </>
  );
};
