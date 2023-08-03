import { useTransaction } from "./useTransaction";



export function useSummary(){
  const { transactions } = useTransaction();

  const summaryReduce = transactions.reduce(
    (summary, transactions) => {
      if (transactions.type === "income") {
        summary.income += transactions.price;
        summary.total += transactions.price;
      } else {
        summary.outcome -= transactions.price;
        summary.total -= transactions.price;
      }

      return summary;
    },
    {
      income: 0,
      outcome: 0,
      total: 0,
    }
  );
  return summaryReduce;
}