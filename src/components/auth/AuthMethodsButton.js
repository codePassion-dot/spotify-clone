import { Component } from "react";
import PropTypes from "prop-types";

class AuthMethodsButton extends Component {
  render() {
    const { icon, text, textColor, bgColor } = this.props;
    return (
      <div
        className={`rounded-full ${bgColor} my-1 w-full border border-button-default p-3 hover:border-black`}
      >
        <div className="mx-auto flex h-fit w-fit flex-row">
          <img className="mr-2 h-6 w-6" src={icon} alt={`icon logo`} />
          <h2 className={textColor}>{text.toUpperCase()}</h2>
        </div>
      </div>
    );
  }
}

AuthMethodsButton.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
};

export default AuthMethodsButton;
