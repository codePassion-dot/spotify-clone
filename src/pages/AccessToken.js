import { Buffer } from "buffer";
import { Component } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { SwitchHorizontalIcon } from "@heroicons/react/solid";

export function AccessTokenWrapper() {
  const navigate = useNavigate();

  return <AccessToken navigate={navigate} />;
}

class AccessToken extends Component {
  state = { redirect: false, second: 7 };
  timer;
  interval;

  async getAccessToken() {
    const params = new URLSearchParams(window.location.search);
    const codeVerifier = localStorage.getItem("codeVerifier");
    const data = {
      code: params.get("code"),
      grant_type: "authorization_code",
      redirect_uri: process.env.REACT_APP_REDIRECT_URI,
      client_id: process.env.REACT_APP_CLIENT_ID,
      code_verifier: codeVerifier,
    };
    const normalizedData = new URLSearchParams(Object.entries(data)).toString();
    const auth = Buffer.from(process.env.REACT_APP_CLIENTS);
    const res = await fetch(process.env.REACT_APP_TOKEN_END_POINT, {
      method: "POST",
      body: normalizedData,
      headers: {
        Authorization: `Basic ${auth.toString("base64")}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    const { access_token, token_type, refresh_token } = await res.json();
    const tokenProps = {
      accessToken: access_token,
      tokenType: token_type,
      refreshToken: refresh_token,
    };
    localStorage.setItem("tokenProps", JSON.stringify(tokenProps));
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  async componentDidMount() {
    await this.getAccessToken();
    this.interval = setInterval(() => {
      this.setState({ second: --this.state.second });
      if (this.state.second === 0) {
        this.props.navigate("/home");
      }
    }, 1000);
  }

  render() {
    return (
      <div className="flex h-screen items-center justify-center bg-slate-400">
        <div className="w-fit rounded-lg bg-navbar-item-text p-6 shadow-lg">
          <SwitchHorizontalIcon className="mx-auto mb-3 h-32 w-32 text-white"></SwitchHorizontalIcon>
          <h1 className="mx-auto mb-3 w-fit text-xl font-bold text-green-200">
            Hang Tight !
          </h1>
          <p className="mx-auto w-64 text-justify text-xl text-white">
            {" "}
            Your being redirected to the home page, it may takes up to{" "}
            <span className="font-bold">{this.state.second} </span>seconds
          </p>
        </div>
      </div>
    );
  }
}

AccessToken.propTypes = {
  navigate: PropTypes.func.isRequired,
};
export default AccessToken;
