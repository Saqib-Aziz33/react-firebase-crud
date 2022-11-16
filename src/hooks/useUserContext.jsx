import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function useUserContext() {
  const { state, dispatch } = useContext(UserContext);

  //   provide user data
  return { ...state, dispatch };
}
