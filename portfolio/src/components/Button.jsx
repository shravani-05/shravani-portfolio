/**
 * @copyright 2024 Shravani Sawant
 * @license Apache-2.0
 */

/*
node modules
*/
import PropTypes from 'prop-types';
// import React from 'react'

/**
 * 
 * primary button
 */

const ButtonPrimary = ({
    href,
    target = '_self',
    label,
    icon,
    classes = ''
}) => {
  if (href) {
    return (
      <a
        href={href}
        target={target}
        className={`btn btn-primary ${classes}`}
      >
        {label} {/* Ensure label is here */}
        {icon && (
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
        )}
      </a>
    );
  } else {
    return (
      <button className={`btn btn-primary ${classes}`}>
        {label} {/* Ensure label is here */}
        {icon && (
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
        )}
      </button>
    );
  }
};


ButtonPrimary.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
  icon: PropTypes.string,
  classes: PropTypes.string,
};



export { ButtonPrimary };
