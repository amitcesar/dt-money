import { SummaryCard, SummaryContainer } from "./styles";
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { useTransaction } from "../../hooks/useTransaction";

export function Summary() {
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

  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color={"#00b37e"} />
        </header>
        <strong>{summaryReduce.income}</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color={"#f75a68"} />
        </header>
        <strong>{summaryReduce.outcome}</strong>
      </SummaryCard>

      <SummaryCard variant="green">
        <header>
          <span>Entradas</span>
          <CurrencyDollar size={32} color={"#fff"} />
        </header>
        <strong>{summaryReduce.total}</strong>
      </SummaryCard>
    </SummaryContainer>
  );
}
