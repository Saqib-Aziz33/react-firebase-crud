import { useContext } from "react";
import { DataContext } from "../context/DataContext";

export default function useDataContext() {
  const {
    getData,
    createData,
    deleteData,
    updateData,
    state,
    dispatch,
    loading,
  } = useContext(DataContext);

  return {
    getData,
    createData,
    deleteData,
    updateData,
    state,
    dispatch,
    loading,
  };
}
