import { createContext, useReducer, useState } from "react";
import dataReducer from "./dataReducer";
import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../firebase.config";
import useUserContext from "../hooks/useUserContext";

export const DataContext = createContext();

export default function DataProvider({ children }) {
  const [state, dispatch] = useReducer(dataReducer, []);
  const [loading, setLoading] = useState(false);
  const { user } = useUserContext();

  function createData(obj) {
    setLoading(true);
    addDoc(collection(db, "challenges"), obj)
      .then((ref) => {
        dispatch({ type: "CREATE_DATA", payload: { id: ref.id, ...obj } });
        setLoading(false);
      })
      .catch((e) => console.log(e.code));
  }

  async function getData() {
    setLoading(true);
    const q = query(
      collection(db, "challenges"),
      where("user", "==", user.uid)
    );
    const querySnapshot = await getDocs(q);
    const responceData = [];
    querySnapshot.forEach((doc) => {
      responceData.push({ ...doc.data(), id: doc.id });
    });
    dispatch({ type: "SET_DATA", payload: responceData });
    setLoading(false);
  }

  async function deleteData(id) {
    try {
      setLoading(true);
      const res = await deleteDoc(doc(db, "challenges", id));
      dispatch({ type: "DELETE_DATA", payload: id });
    } catch (e) {
      alert("something went wrong");
      console.log("error while deleting doc", e);
    } finally {
      setLoading(false);
    }
  }

  function updateData() {}

  return (
    <DataContext.Provider
      value={{
        getData,
        createData,
        deleteData,
        updateData,
        state,
        dispatch,
        loading,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
