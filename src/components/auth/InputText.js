import { Component } from "react";
import PropTypes from "prop-types";

class InputText extends Component {
  render() {
    const { text, name, id, type } = this.props;
    return (
      <div className="mt-6 flex flex-col">
        <label htmlFor="name" className="mb-2 text-xs font-bold">
          {text}
        </label>
        <input
          placeholder={text}
          className="rounded-md border border-button-default p-3 hover:border-black focus:outline focus:outline-black"
          type={type}
          name={name}
          id={id}
          required
        />
      </div>
    );
  }
}

InputText.propTypes = {
  text: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default InputText;
