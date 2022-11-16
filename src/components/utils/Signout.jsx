import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase.config";
import useUserContext from "../../hooks/useUserContext";

function Signout() {
  const navigate = useNavigate();
  const { dispatch } = useUserContext();

  function signout() {
    signOut(auth)
      .then((res) => {
        dispatch({ type: "SIGN_OUT" });
        navigate("/login");
      })
      .catch((e) => alert("error while sign out"));
  }
  return (
    <Button variant="contained" onClick={signout}>
      Sign out
    </Button>
  );
}
export default Signout;
