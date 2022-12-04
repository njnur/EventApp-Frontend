import styled from '@emotion/styled';
import { Form } from 'antd';

export const AlignCenterWrapper = styled.div(() => ({
  height: '100vh',
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

export const StyledForm = styled(Form)({
  width: '100%',
});

export const MainContainer = styled.div({
  '.styledLayout': {
    minHeight: '100vh',
  },
  '.styledContent': {
    padding: '1rem 15rem 15rem',
  },
});

export const StyledPaper = styled.div(() => ({
  background: 'white',
  padding: '24px',
  '.styledPaperHead': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  '& > *': {
    margin: '.8rem 0',
  },
}));

export const StyledTableWrapper = styled.div(() => ({
  borderRadius: '4px',
  '.styledTableFilterSection': {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '.2rem',
    paddingBottom: '.8rem',
    '& > *': {
      flex: '1 1 0',
    },
  },

  '.ant-pagination': {
    marginRight: '1rem',
  },

  '.ant-select': {
    padding: 0,
  },
}));

export const Flex = styled.div(
  ({ align = 'center', justify = 'center', column, fullWidth, gap, wrap }) => ({
    display: 'flex',
    justifyContent: justify,
    alignItems: align,
    flexWrap: wrap ? 'wrap' : 'nowrap',
    flexDirection: column ? 'column' : 'row',
    width: fullWidth && '100%',
    gap: gap,
  }),
);
