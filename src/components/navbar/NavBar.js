import { Component } from "react";
import spotify from "@icons/spotify-logo-white.png";
import NavBarItem from "./NavBarItem";

function CreateNavbarItems(props) {
  const { actions } = props;
  return actions.map((props) => {
    return <NavBarItem key={props.type} {...props} color="text-white" />;
  });
}

class NavBar extends Component {
  render() {
    // in production this should be an api end point
    const generalActions = [
      { type: "home", text: "Home" },
      { type: "search", text: "Search" },
      { type: "library", text: "Your Library" },
    ];
    const personalActions = [
      { type: "createPlaylist", text: "Create Playlist" },
      { type: "likedSongs", text: "Liked Songs" },
    ];
    return (
      <div className=" sticky flex h-screen w-64 flex-col bg-black py-4 px-6">
        <img className="mb-8 h-auto w-32" src={spotify} alt="spotify logo" />
        {<CreateNavbarItems actions={generalActions} />}
        <div className="mt-14"></div>
        {<CreateNavbarItems actions={personalActions} />}
        <div className="flex-grow border-t border-navbar-divider-grey" />
      </div>
    );
  }
}

export default NavBar;
