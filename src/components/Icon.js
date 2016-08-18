import React, { PropTypes } from 'react';
import classNames from 'classnames';

const Icon = ({ icon, className }) => {
  const classes = classNames('fa', {
    [`fa-${icon}`]: icon,
    [`${className}`]: className
  });
  
  return <i className={classes} aria-hidden="true" />
};

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default Icon;
