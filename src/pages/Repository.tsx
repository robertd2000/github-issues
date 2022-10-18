import { memo, useEffect } from "react";
import { useRepository } from "../hooks/useRepository";
import {
  Header,
  Comment,
  CommentList,
  AddComment
} from "../components/IssuePage";
import Spinner from "../components/UI/Spinner";
import Alert from "../components/UI/Alert";

import { useNavigate } from "react-router-dom";
import { RouteNames } from "../routes";

const Repository = () => {
  const { id, data, loading, error, repoName } = useRepository();
  const navigator = useNavigate();

  useEffect(() => {
    if (repoName === "" || !repoName) navigator(RouteNames.HOME);
    if (!loading && !data) navigator(RouteNames.HOME);
  }, []);

  if (loading) return <Spinner />;

  if (error) return <Alert message={error.message} />;

  return (
    <>
      {data && (
        <div className="container">
          <Header
            title={data.title}
            author={data.author}
            number={data.number}
            comments={data.comments}
            closed={data.closed}
            createdAt={data.createdAt}
            closedAt={data.closedAt}
          />

          <Comment
            id={id!}
            commentid={data.id}
            body={data.bodyHTML}
            createdAt={data.createdAt}
            author={data.author}
            reactions={data.reactions}
          />

          <CommentList comments={data.comments} id={id!} />
          <AddComment
            id={+id!}
            repoId={data.id}
            closed={data.closed}
            author={data.author}
          />
        </div>
      )}
    </>
  );
};

export default memo(Repository);
