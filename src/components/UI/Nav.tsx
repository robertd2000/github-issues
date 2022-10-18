import { memo } from "react";
import { Link } from "react-router-dom";
import { RouteNames } from "../../routes";
import { LOGO_URL } from "../../utils/constants";

const Nav = () => {
  return (
    <div className="container m-4 mb-5">
      <Link to={RouteNames.HOME}>
        <div className="container text-start m-3">
          <img src={LOGO_URL} alt="" width={50} />
          <span className="m-3 fs-3">Home</span>
        </div>
      </Link>
    </div>
  );
};

export default memo(Nav);
