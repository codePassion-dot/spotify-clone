import { Component } from "react";
import NavBar from "@components/navbar/NavBar";
import Grid from "@components/search/Grid";

class Home extends Component {
  render() {
    return (
      <div className="flex flex-row">
        <NavBar />
        <Grid />
      </div>
    );
  }
}

export default Home;
