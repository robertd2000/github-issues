import { FC, memo } from "react";
import { Link } from "react-router-dom";
import { Open, Closed } from "../UI/Icons/";
import { Issue } from "../../types";

interface IProps {
  issue: Issue;
}

const IssueCard: FC<IProps> = ({ issue }) => {
  return (
    <li className="list-group-item d-flex justify-content-between text-start align-items-start">
      {issue.closed ? <Closed /> : <Open />}
      <div className="ms-2 me-auto m-2">
        <div className="fw-bold mb-3">
          <Link
            className="text-decoration-none text-black h3"
            to={`/repository/${issue?.number}`}
          >
            {issue?.title}
          </Link>
        </div>
        <span className="fs-5 text-muted">
          #{issue?.number} opened on {issue?.createdAt} by{" "}
          <a href={issue?.author?.url || "https://github.com/"}>
            {issue?.author?.login}
          </a>
        </span>
      </div>
      <i className="fa-regular fa-message"></i>
      <span className="fs-5 fw-bold text-muted">
        <i className="bi bi-chat-left m-2"></i>
        {issue?.comments?.totalCount}
      </span>
    </li>
  );
};

export default memo(IssueCard);
