import { FC, memo } from "react";
import { Open, Closed } from "../UI/Icons";
import NewIssueButton from "../UI/NewIssueButton";
import { dateFormater } from "../../utils/date";

interface IProps {
  title: string;
  number: number;
  createdAt: string;
  closed: boolean;
  closedAt: string;
  comments: {
    totalCount: number;
  };
  author: {
    login: string;
    avatarUrl: string;
    url: string;
    resourcePath: string;
  };
}

const Header: FC<IProps> = ({
  title,
  number,
  createdAt,
  closed,
  comments,
  author
}) => {
  return (
    <div className="mt-5 text-start">
      <h2 className="m-3">
        {title} <span className="text-muted">#{number}</span>
      </h2>
      <span className="fs-5 text-muted">
        {closed ? <Closed /> : <Open />} opened on {dateFormater(createdAt)} by{" "}
        <a href={author?.url || "https://github.com/"}>{author?.login}.</a>
      </span>

      <span className="fs-5 text-muted">
        {` `}
        {comments?.totalCount} comments
      </span>
      <span className="text-end float-end m-2">
        <NewIssueButton />
      </span>
    </div>
  );
};

export default memo(Header);
