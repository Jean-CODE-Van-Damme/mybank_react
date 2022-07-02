const Account = ({
  operationDate = "",
  operationDescritpion = "",
  operationAmount = 0,
  accountName = "",
  color = "white",
}) => {
  console.log(operationAmount);
  return (
    <div className="operation" style={{ backgroundColor: color }}>
      {accountName === "Courant" ? (
        <span className="operation_cchq">
          <div className="left">
            {operationDate} {operationDescritpion}
          </div>
          <div className="rigth">{operationAmount}</div>
        </span>
      ) : (
        <span className="operation_livretA">
          <div className="left">
            {operationDate} {operationDescritpion}
          </div>
          <div className="right">{operationAmount}</div>
        </span>
      )}
    </div>
  );
};

export default Account;
