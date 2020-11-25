import { ChatMessageProps } from '@app/components/mol.chat-message/chat-message.component';
import { ProjectCard, ProjectCardProps } from '@app/components/mol.project-card/project-card.component';
import { Chat } from '@app/components/org.chat/chat.component';
import { Hbox } from '@atomic/atm.box/hbox.component';
import { Card } from '@atomic/atm.card/card.component';
import { Colors } from '@atomic/atm.constants';
import { Divisor } from '@atomic/atm.divisor';
import { VSeparator } from '@atomic/atm.separator/separator.style';
import { H2, Text } from '@atomic/atm.typography';
import * as React from 'react';
import { Col, Grid, Row } from 'react-styled-flexboxgrid';
import styled from 'styled-components';
import { sliceList } from 'utils/slice-list';

export const BasePage: React.FC = () => {
  const slicedProjects = sliceList<ProjectCardProps>(data.projects, 2);
  const ProjectCards = slicedProjects.map((cardList, index) => {
    return (
      <Row key={index}>
        {cardList.map((projectCard, index) => (
          <Col key={index} xs={12} md={6}>
            <ProjectCard
              date={projectCard.date}
              daysRemaining={projectCard.daysRemaining}
              progress={projectCard.progress}
              subtitle={projectCard.subtitle}
              title={projectCard.title}
              users={projectCard.users}
            />
            <VSeparator />
          </Col>
        ))}
      </Row>
    );
  });

  return (
    <>
      <VSeparator />
      <VSeparator />
      <Divisor />
      <PageContainer>
        <Grid>
          <VSeparator />
          <Row>
            <Col xs={12} md={8}>
              <Card color={Colors.XLightGray}>
                <Hbox>
                  <Hbox.Item>
                    <H2>Projects</H2>
                  </Hbox.Item>
                  <Hbox.Separator />
                  <Hbox.Item noGrow>
                    <Text>{data.projectMonth}</Text>
                  </Hbox.Item>
                </Hbox>
                <VSeparator small />
                {ProjectCards}
              </Card>
            </Col>
            <Col xs={12} md={4}>
              <VSeparator />
              <Chat messages={messages} />
            </Col>
          </Row>
        </Grid>
      </PageContainer>
    </>
  );
};

const PageContainer = styled.div`
  height: 100%;
  overflow-x: auto;
`;

const users = [
  'https://ca.slack-edge.com/T0342JUTV-UN2JB1WLT-6c6f5ad39c1e-512',
  'https://ca.slack-edge.com/T0342JUTV-UN2JB1WLT-6c6f5ad39c1e-512',
  'https://ca.slack-edge.com/T0342JUTV-UN2JB1WLT-6c6f5ad39c1e-512',
];

const data = {
  projectMonth: 'July, 2020',
  projects: [
    {
      date: 'Jul 2, 2020',
      progress: Math.floor(Math.random() * 100),
      title: 'Random title',
      subtitle: 'Random subtitle',
      daysRemaining: Math.floor(Math.random() * 10),
      users,
    },
    {
      date: 'Jul 5, 2020',
      progress: Math.floor(Math.random() * 100),
      title: 'Another random title',
      subtitle: 'Random subtitle',
      daysRemaining: Math.floor(Math.random() * 10),
      users,
    },
    {
      date: 'Jul 7, 2020',
      progress: Math.floor(Math.random() * 100),
      title: 'Look! A random title',
      subtitle: 'Random subtitle',
      daysRemaining: Math.floor(Math.random() * 10),
      users,
    },
    {
      date: 'Jul 9, 2020',
      progress: Math.floor(Math.random() * 100),
      title: 'Random title',
      subtitle: 'Random subtitle',
      daysRemaining: Math.floor(Math.random() * 10),
      users,
    },
  ],
};

const messages: ChatMessageProps[] = [
  {
    id: '1',
    author: 'Little John',
    date: 'Yesterday',
    imageUrl: users[0],
    message: 'Hi, nice to meet you!',
  },
  {
    id: '2',
    author: 'Mariah',
    date: '13:37',
    imageUrl: users[0],
    message: 'Whats up, man',
  },
  {
    id: '3',
    author: 'Nina',
    date: '13:03',
    imageUrl: users[0],
    message: 'Hello!',
  },
  {
    id: '4',
    author: 'Larissa',
    date: '19:33',
    imageUrl: users[0],
    message: 'Lorem ipsum dolor, man',
  },
];
