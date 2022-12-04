import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Breadcrumb = ({ title, to, action }) => {
  return (
    <div>
      <h3>
        {title} - <Link to={to}>{action}</Link>
      </h3>
    </div>
  );
};

Breadcrumb.propTypes = {
  to: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  action: PropTypes.string.isRequired,
};

export default Breadcrumb;
