import React from "react";
import { GoogleLogin } from "react-google-login";

const GoogleLoginButton = () => {
  const clientId =
    "96650021301-dsir3655p86a6gmkg40cdcihfjckg9v9.apps.googleusercontent.com";

  const onSuccess = (response) => {
    console.log("Login Success! Response:", response);
  };

  const onFailure = (response) => {
    console.log("Login Failed! Response:", response);
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
    </div>
  );
};

export default GoogleLoginButton;
