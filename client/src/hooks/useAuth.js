import { login } from "../services/auth";
//import { setToken } from "../services/apiClient";
//import { setUser, clearUser } from "../reducers/userReducer";
//import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export const useAuth = () => {
  const navigate = useNavigate();

  const handleLogin = async ({ username, password }) => {
    try {
      const user = await login({ username, password });

      navigate("/dashboard");
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  /*
  const handleLogout = async () => {
    try {
      setToken(null);
      dispatch(clearUser());
      window.localStorage.removeItem("user");
      navigate("/");
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  const cacheUser = (user) => {
    try {
      dispatch(setUser(user));
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  };
*/

  return { handleLogin };
};
