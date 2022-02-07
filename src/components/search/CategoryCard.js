import { Component } from "react";
import PropTypes from "prop-types";

class CategoryCard extends Component {
  colors = {
    blue300: "bg-blue-300",
    blue100: "bg-blue-100",
    gray600: "bg-gray-600",
    blue400: "bg-blue-400",
    pink700: "bg-pink-700",
    indigo600: "bg-indigo-600",
    pink600: "bg-pink-600",
    pink300: "bg-pink-300",
    purple400: "bg-purple-400",
    red400: "bg-red-400 ",
    gray400: "bg-gray-400",
    gray900: "bg-gray-900",
    indigo100: "bg-indigo-100",
    indigo900: "bg-indigo-900",
    gray300: "bg-gray-300",
    red100: "bg-red-100 ",
    pink800: "bg-pink-800",
    gray100: "bg-gray-100",
    gray700: "bg-gray-700",
  };

  render() {
    const { text } = this.props;
    const keys = Object.keys(this.colors);
    const color = keys[Math.floor(Math.random() * keys.length)];
    console.log(color);
    return (
      <div className={`h-64 w-64 rounded-lg px-3 pt-3 ${this.colors[color]}`}>
        <h2 className="text-xl font-bold text-white">{text}</h2>
      </div>
    );
  }
}

CategoryCard.propTypes = {
  text: PropTypes.string.isRequired,
};

export default CategoryCard;
