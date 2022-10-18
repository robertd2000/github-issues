import { FC, memo } from "react";
import { IComment } from "../../types";
import { Comment } from "./";

interface IProps {
  id: string;
  comments: {
    edges: IComment[];
  };
}
const CommentList: FC<IProps> = ({ id, comments }) => {
  return (
    <>
      {comments &&
        comments.edges.map((comment: IComment) => {
          const {
            bodyHTML,
            createdAt,
            author,
            reactions,
            id: commentid
          } = comment.node;

          return (
            <Comment
              key={commentid}
              id={id!}
              commentid={commentid}
              body={bodyHTML}
              createdAt={createdAt}
              author={author}
              reactions={reactions}
            />
          );
        })}
    </>
  );
};

export default memo(CommentList);
