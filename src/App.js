import "./App.css";
import Header from "./components/Header";
import Accounts from "./components/Accounts";
import data from "./assets/transactions.json";

const App = () => {
  return (
    <div>
      <Header title="My Bank" userName="Olivier" />

      {data.map((element, index) => {
        // console.log(element.operations);
        console.log(index);

        return (
          <Accounts
            key={index}
            operationArray={element.operations}
            accountName={element.name}
            accountBalance={element.balance}
            accountColor={element.color}
          />
        );
      })}
    </div>
  );
};

export default App;
