import React from 'react';
import { MainContainer, StyledPaper } from '../../components/styled';
import { Layout } from 'antd';
import { Title } from '../../components/styled/typography';
import { EventCreateForm } from '../../features/forms/events/eventCreate';
import Breadcrumb from '../../components/breadcrumb';

const { Content } = Layout;

const CreateTask = () => {
  return (
    <MainContainer>
      <Layout>
        <Content className={'styledContent'}>
          <StyledPaper>
            <Title level={1}>Events</Title>
            <Breadcrumb title="Create an event" to="/events" action="Back" />
            <EventCreateForm />
          </StyledPaper>
        </Content>
      </Layout>
    </MainContainer>
  );
};

export default CreateTask;
