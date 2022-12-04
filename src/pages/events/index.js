import React from 'react';
import {
  MainContainer,
  StyledPaper,
  StyledTableWrapper,
} from '../../components/styled';
import { Title } from '../../components/styled/typography';
import usePagination from '../../hooks/usePagination';
import GenerateTaskColumn from '../../features/tables/GenereateTaskColumn';
import { Table, Layout } from 'antd';
// import { events } from '../../constant';
import { useGetEventsQuery } from '../../services/queries/events';
import Breadcrumb from '../../components/breadcrumb';

const { Content } = Layout;

const Events = () => {
  const columns = GenerateTaskColumn();
  const { page, limit, handlePageChange } = usePagination();

  const { data, isLoading } = useGetEventsQuery({
    queries: { page },
  });

  return (
    <MainContainer>
      <Layout>
        <Content className={'styledContent'}>
          <StyledPaper>
            <Title level={1}>Events</Title>
            <Breadcrumb title="List of events" to="create" action="Create" />
            <div className={'styledPaperBody'}>
              <StyledTableWrapper>
                <Table
                  bordered={true}
                  loading={isLoading}
                  columns={columns}
                  dataSource={data?.results}
                  rowKey={'id'}
                  pagination={{
                    defaultPageSize: limit,
                    total: data?.count,
                    onChange: page => {
                      handlePageChange(page);
                    },
                  }}
                />
              </StyledTableWrapper>
            </div>
          </StyledPaper>
        </Content>
      </Layout>
    </MainContainer>
  );
};

export default Events;
