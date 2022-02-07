import { Component } from "react";
import AuthMethodsButton from "./AuthMethodsButton";
import { AuthIcons } from "./AuthIcons";
import InputText from "./InputText";
import CheckBox from "./CheckBox";
import { MusicNoteIcon } from "@heroicons/react/solid";

class AuthCard extends Component {
  // in production this objects should be retrieved with and api end point
  buttonsProps = [
    {
      text: "continue with facebook",
      icon: AuthIcons.facebook,
      bgColor: "bg-facebook-blue",
      textColor: "text-white",
      type: "facebook",
    },
    {
      text: "continue with apple",
      icon: AuthIcons.apple,
      bgColor: "bg-apple-black",
      textColor: "text-white",
      type: "apple",
    },
    {
      text: "continue with google",
      icon: AuthIcons.google,
      bgColor: "bg-white",
      textColor: "text-default-grey",
      type: "google",
    },
    {
      text: "continue with phone number",
      icon: AuthIcons.phone,
      bgColor: "bg-white",
      textColor: "text-default-grey",
      type: "phone",
    },
    {
      text: "continue with me",
      icon: <MusicNoteIcon className="mr-2 h-6 w-6 text-black" />,
      bgColor: "bg-white",
      textColor: "text-default-grey",
      type: "spotify",
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
            <button className="ml-auto w-32 rounded-full bg-button-green p-3">
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
