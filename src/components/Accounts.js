import Account from "./Account";
import Button from "./Button";

const Accounts = ({
  operationArray = [],
  accountName = "",
  accountBalance = 0,
  accountColor = "",
}) => {
  console.log(accountColor);
  return (
    <>
      <div className="container">
        <div className="account_type" style={{ backgroundColor: accountColor }}>
          <span>{accountName} </span>{" "}
          <span className="opacity">{accountBalance}</span>
        </div>

        <div className="operation_type">
          {operationArray.map((element, index) => {
            console.log(accountName);
            return (
              <Account
                key={accountName}
                operationDate={element.date}
                operationDescritpion={element.description}
                operationAmount={element.amount}
                accountName={accountName}
                accountBalance={accountBalance}
                color={index % 2 ? "lightgrey" : "white"}
              />
            );
          })}
        </div>
      </div>

      <Button />
    </>
  );
};

export default Accounts;
