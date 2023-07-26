import { useContext } from "react";
import { TransactionsContext } from "../contexts/TransactionsContext";


export function useTransaction(){
  return useContext(TransactionsContext)
}