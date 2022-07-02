import Logo from "./Logo";
import User from "./User";

const Header = ({ title = "", userName = "" }) => {
  return (
    <>
      <header>
        <div className="container">
          <div className="header_div">
            <Logo title={title} />
            <User userName={userName} />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
