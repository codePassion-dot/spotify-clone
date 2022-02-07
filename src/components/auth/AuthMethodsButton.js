import { Component } from "react";
import PropTypes from "prop-types";
import pkceChallenge from "pkce-challenge";

class AuthMethodsButton extends Component {
  handleLoginRequest(event) {
    if (event.target.dataset.type === "spotify") {
      const scopes = [
        "user-read-private",
        "user-read-email",
        "playlist-modify-private",
        "playlist-read-collaborative",
        "playlist-read-private",
        "playlist-modify-public",
      ];
      console.log("hellouda");
      const { code_challenge, code_verifier } = pkceChallenge(68);
      localStorage.setItem("codeVerifier", code_verifier);
      const params = {
        client_id: process.env.REACT_APP_CLIENT_ID,
        response_type: "code",
        scope: scopes.join(" "),
        redirect_uri: process.env.REACT_APP_REDIRECT_URI,
        code_challenge_method: "S256",
        code_challenge: code_challenge,
      };
      const endpoint = new URL(process.env.REACT_APP_AUTH_END_POINT);
      endpoint.search = new URLSearchParams(params);
      window.location = endpoint.toString();
    }
  }
  render() {
    const { icon, text, textColor, bgColor, type } = this.props;
    return (
      <button
        data-type={type}
        onClick={this.handleLoginRequest}
        className={`rounded-full ${bgColor} my-1 w-full border border-button-default p-3 hover:border-black`}
      >
        <div className="mx-auto flex h-fit w-fit flex-row">
          {text === "continue with me" ? (
            icon
          ) : (
            <img className="mr-2 h-6 w-6" src={icon} alt={`icon logo`} />
          )}
          <h2 className={textColor}>{text.toUpperCase()}</h2>
        </div>
      </button>
    );
  }
}

AuthMethodsButton.propTypes = {
  icon: PropTypes.any.isRequired,
  text: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default AuthMethodsButton;
