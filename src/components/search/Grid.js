import { Component } from "react";
import CategoryCard from "./CategoryCard";

class Grid extends Component {
  state = { categories: [] };
  async componentDidMount() {
    const { accessToken, tokenType } = JSON.parse(
      localStorage.getItem("tokenProps")
    );
    const res = await fetch("https://api.spotify.com/v1/browse/categories", {
      method: "GET",
      headers: {
        Authorization: `${tokenType} ${accessToken}`,
        "Content-Type": "application/json",
      },
    });
    const { categories } = await res.json();
    const items = categories.items;
    this.setState({ categories: items });
  }
  render() {
    return (
      <div className="grid w-full grid-cols-2 gap-2 space-y-3 overflow-y-auto bg-black p-4 tablet:grid-cols-3 laptop:grid-cols-4 desktop:grid-cols-6">
        {this.state.categories.map(({ name }) => {
          return <CategoryCard text={name} key={name} />;
        })}
      </div>
    );
  }
}

export default Grid;
