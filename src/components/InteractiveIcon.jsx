import React from 'react';
import PropTypes from 'prop-types';
import ReactGA from 'react-ga';

const InteractiveIcon = ({
  title,
  icon,
  altText,
  text = null,
  onClick = () => {},
}) => {
  const handleOnClick = () => {
    ReactGA.event({
      category: 'Home',
      action: 'click',
      label: title,
    });

    onClick();
  };

  return (
    <div className="interactive-icon-wrapper">
      <div className="icon-wrapper">
        <button
          className="icon"
          type="button"
          alt={altText}
          onClick={handleOnClick}
          onKeyDown={({ keyCode }) => {
            if (keyCode === 13) {
              handleOnClick();
            }
          }}
          tabIndex={0}
        >
          {icon}
        </button>
      </div>
      <span className="icon-text">
        {text}
      </span>
    </div>
  );
};

InteractiveIcon.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  text: PropTypes.string,
  onClick: PropTypes.func,
};

export default InteractiveIcon;
