import React from 'react';
import { MainContainer, StyledPaper } from '../../components/styled';
import { Layout } from 'antd';
import { Title } from '../../components/styled/typography';
import { EventUpdateForm } from '../../features/forms/events/eventUpdate';
import Breadcrumb from '../../components/breadcrumb';

const { Content } = Layout;

const UpdateTask = () => {
  return (
    <MainContainer>
      <Layout>
        <Content className={'styledContent'}>
          <StyledPaper>
            <Title level={1}>Events</Title>
            <Breadcrumb title="Edit an event" to="/events" action="Back" />
            <EventUpdateForm />
          </StyledPaper>
        </Content>
      </Layout>
    </MainContainer>
  );
};

export default UpdateTask;
