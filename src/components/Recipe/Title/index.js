import React from 'react';
// validation du type des props : si la valeur ne correspond pas au type attendu
// il y a un warning dans la console
import PropTypes from 'prop-types';

// import du style
import './title.scss';

const Title = ({
  title,
  author,
  difficulty,
  thumbnail,
}) => (
  <header className="header">
    <img
      className="header-image"
      src={thumbnail}
      alt=""
    />
    <div className="header-content">
      <h1 className="header-title">{title}</h1>
      <p className="header-info">{author} - {difficulty}</p>
    </div>
  </header>
);

Title.propTypes = {
  // https://reactjs.org/docs/typechecking-with-proptypes.html
  // nom de la prop : type attendu
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  difficulty: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
};

export default Title;
