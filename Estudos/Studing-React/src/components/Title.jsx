import PropTypes from "prop-types";

export function Title({ number, title }) {
  return (
    <div>
      <small>{number}</small>
      <h1>{title}</h1>
    </div>
  );
}

Title.propTypes = {
  number: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};
