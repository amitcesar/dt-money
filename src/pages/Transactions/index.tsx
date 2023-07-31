import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";

import { useTransaction } from "../../hooks/useTransaction";
import { dateFormatter, formatMoney } from "../../utils/formatter";
import { SearchForm } from "./components/SearchForm";
import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from "./styles";

export function TransactionsPage() {
  const { transactions } = useTransaction();

  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            {transactions.map((item) => {
              return (
                <tr key={item.id}>
                  <td width="50%">{item.description}</td>
                  <td>
                    <PriceHighlight variant={item.type}>
                      {item.type === "outcome" && "- "}
                      {formatMoney.format(item.price)}
                    </PriceHighlight>
                  </td>
                  <td>{item.category}</td>
                  <td>{dateFormatter.format(new Date(item.createdAt))}</td>
                </tr>
              );
            })}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
}
