import { FC, memo } from "react";
import { IssueCard } from "./";
import { Issue } from "../../types";

interface IProps {
  loading: boolean;
  error: any;
  data: any;
}

const IssuesList: FC<IProps> = ({ data, error, loading }) => {
  return (
    <>
      {" "}
      {!loading && !error ? (
        <ul className="list-group mb-4">
          {data?.map((issue: { node: Issue }) => (
            <IssueCard key={issue?.node?.id} issue={issue?.node} />
          ))}
        </ul>
      ) : (
        "No issues yet"
      )}{" "}
    </>
  );
};

export default memo(IssuesList);
