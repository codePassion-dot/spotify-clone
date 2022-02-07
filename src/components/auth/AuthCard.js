import { Component } from "react";
import AuthMethodsButton from "./AuthMethodsButton";
import { AuthIcons } from "./AuthIcons";
import InputText from "./InputText";
import CheckBox from "./CheckBox";
import pkceChallenge from "pkce-challenge";

class AuthCard extends Component {
  // in production this objects should be retrieved with and api end point
  buttonsProps = [
    {
      text: "continue with facebook",
      icon: AuthIcons.facebook,
      bgColor: "bg-facebook-blue",
      textColor: "text-white",
    },
    {
      text: "continue with apple",
      icon: AuthIcons.apple,
      bgColor: "bg-apple-black",
      textColor: "text-white",
    },
    {
      text: "continue with google",
      icon: AuthIcons.google,
      bgColor: "bg-white",
      textColor: "text-default-grey",
    },
    {
      text: "continue with phone number",
      icon: AuthIcons.phone,
      bgColor: "bg-white",
      textColor: "text-default-grey",
    },
  ];

  inputsProps = [
    {
      text: "Email address or username",
      name: "username",
      id: "username",
      type: "text",
    },
    {
      text: "Password",
      name: "password",
      id: "password",
      type: "password",
    },
  ];

  async handleLoginRequest() {
    const scopes = [
      "user-read-private",
      "user-read-email",
      "playlist-modify-private",
      "playlist-read-collaborative",
      "playlist-read-private",
      "playlist-modify-public",
    ];
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

  render() {
    return (
      <div>
        <img
          className="mx-auto my-6 h-auto w-48"
          src={AuthIcons.spotify}
          alt="main logo"
        />
        <div className="mb-5 w-screen border-t border-gray-400" />
        <div className="mx-auto flex h-fit w-128 flex-col p-3">
          {this.buttonsProps.map((buttonProps, index) => {
            return <AuthMethodsButton key={index} {...buttonProps} />;
          })}
          <div className="mt-4 flex flex-row">
            <div className="my-auto flex-grow border-t border-gray-400" />
            <span className="mx-4 flex-shrink text-xs font-bold">OR</span>
            <div className="my-auto flex-grow border-t border-gray-400" />
          </div>
          {this.inputsProps.map((inputProps) => (
            <InputText {...inputProps} key={inputProps.id} />
          ))}
          <h3 className="mt-4 text-sm font-medium">Forgot your password?</h3>
          <div className="mt-2 flex flex-row">
            <CheckBox doneArrow={AuthIcons.doneArrow} />
            <button
              onClick={this.handleLoginRequest}
              className="ml-auto w-32 rounded-full bg-button-green p-3"
            >
              <h3 className="mx-auto w-fit font-semibold ">LOG IN</h3>
            </button>
          </div>
          <div className="my-6 flex-grow border-t border-gray-400" />
          <h2 className="mx-auto mt-3 font-bold">Don&apos;t have an account</h2>
          <div className="mx-auto mt-6 w-full rounded-full border border-button-default p-3">
            <h3 className="mx-auto w-fit font-semibold tracking-widest text-default-grey">
              SIGN UP FOR SPOTIFY
            </h3>
          </div>
        </div>
      </div>
    );
  }
}

export default AuthCard;
