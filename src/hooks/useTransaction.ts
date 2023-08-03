
import { useContextSelector } from "use-context-selector";
import { TransactionsContext } from "../contexts/TransactionsContext";


export function useTransaction(){
  const contextSelector = useContextSelector(TransactionsContext, (context) => {
    return context
  })
  return contextSelector;
}