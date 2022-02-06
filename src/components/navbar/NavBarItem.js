import {
  HeartIcon,
  HomeIcon,
  LibraryIcon,
  PlusIcon,
  SearchIcon,
} from "@heroicons/react/solid";
import { Component } from "react";
import PropTypes from "prop-types";

function Home() {
  return (
    <HomeIcon className="h-10 w-8 text-navbar-item-text group-hover:text-slate-50" />
  );
}

function Search() {
  return (
    <SearchIcon className="h-10 w-8 text-navbar-item-text group-hover:text-slate-50" />
  );
}

function Library() {
  return (
    <LibraryIcon className="h-8 w-8 text-navbar-item-text group-hover:text-slate-50" />
  );
}

function CreatePlaylist() {
  return (
    <PlusIcon className="h-8 w-8 rounded-sm bg-playlist-grey p-2 text-black group-hover:bg-slate-50" />
  );
}
function LikedSongs() {
  return (
    <HeartIcon className="h-8 w-8 rounded-sm bg-gradient-to-r from-liked-songs-rigth to-liked-songs-left p-2 text-navbar-item-text group-hover:bg-slate-50 group-hover:text-slate-50" />
  );
}

class NavBarItem extends Component {
  options = {
    home: <Home />,
    search: <Search />,
    library: <Library />,
    createPlaylist: <CreatePlaylist />,
    likedSongs: <LikedSongs />,
  };
  render() {
    const { type, text } = this.props;
    return (
      <div className="group mb-4 flex flex-row space-x-3" id="row">
        {this.options[type]}
        <h2 className="my-auto text-sm font-semibold text-navbar-item-text group-hover:text-slate-50 ">
          {text}
        </h2>
      </div>
    );
  }
}

NavBarItem.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default NavBarItem;
