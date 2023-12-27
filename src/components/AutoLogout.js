import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { isTokenExpired, removeToken } from "../services/auth";

const AutoLogout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkTokenExpiration = () => {
      if (isTokenExpired()) {
        removeToken();
        localStorage.setItem("isLoggedIn", "false");
        navigate("/");
      }
    };

    const intervalId = setInterval(checkTokenExpiration, 1000 * 60); // 10 second

    return () => clearInterval(intervalId);
  }, [history]);

  return null;
};

export default AutoLogout;
