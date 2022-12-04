import React from 'react';
import { Typography } from 'antd';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const { Title: AntTitle } = Typography;

const AntTitleStyled = styled(AntTitle)`
  &&& {
    color: ${() => {
      return '#ooo';
    }};
  }
`;

export function Title({ color = 'primary', shade, tint, ...rest }) {
  return <AntTitleStyled color={color} shade={shade} tint={tint} {...rest} />;
}

Title.propTypes = {
  color: PropTypes.string,
  shade: PropTypes.number,
  tint: PropTypes.number,
};
