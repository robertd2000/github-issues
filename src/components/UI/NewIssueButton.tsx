import { memo } from "react";
import { Link } from "react-router-dom";
import { RouteNames } from "../../routes";

const NewIssueButton = () => {
  return (
    <Link to={RouteNames.NEW_ISSUE} className="col-3">
      <button type="button" className="btn btn-success fs-5">
        New issue
      </button>
    </Link>
  );
};

export default memo(NewIssueButton);
