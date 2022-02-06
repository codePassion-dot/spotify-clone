import { Component } from "react";
import PropTypes from "prop-types";

class CheckBox extends Component {
  render() {
    const { doneArrow } = this.props;
    return (
      <label htmlFor="check-box-recover" className="relative cursor-pointer ">
        <input
          className="peer mr-2 h-2 w-2 appearance-none rounded-md border border-gray-400 p-2 checked:bg-checkbox-green "
          type="checkbox"
          id="check-box-recover"
          name="recover"
        />
        <img
          className="invisible absolute inset-0 h-4 w-4 peer-checked:visible"
          src={doneArrow}
          alt="done arrow"
        />
        Remeber me
      </label>
    );
  }
}

CheckBox.propTypes = {
  doneArrow: PropTypes.string.isRequired,
};

export default CheckBox;
