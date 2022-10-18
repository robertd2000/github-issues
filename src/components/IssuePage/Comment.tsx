import { FC, memo } from "react";
import { IReaction } from "../../types";
import { ReactionsPannel } from "../UI/Reactions/ReactionsPannel";
import { Reactions } from "../UI/Reactions/Reactions";
import { useReactions } from "../../hooks/useReactions";
import { dateFormater } from "../../utils/date";

interface IProps {
  id: string;
  commentid: string;
  body: string;
  createdAt: string;
  author: {
    login: string;
    avatarUrl: string;
    url: string;
    resourcePath: string;
  };
  reactions: {
    edges: IReaction[];
  };
}

const Comment: FC<IProps> = ({
  body,
  createdAt,
  author,
  reactions,
  id,
  commentid
}) => {
  const { addReaction, removeReaction } = useReactions(+id);

  const addReactionHandler = (content: string) => {
    addReaction({
      variables: {
        id: commentid,
        content
      }
    });
  };

  const removeReactionHandler = (content: string) => {
    removeReaction({
      variables: {
        id: commentid,
        content
      }
    });
  };

  return (
    <div className="d-flex flex-row justify-content-start m-3">
      <div className="mt-3">
        <img
          className="rounded-circle"
          width={50}
          src={author.avatarUrl}
          alt={author.login}
        />
      </div>
      <div className="card text-start m-3 w-100">
        <h5 className="card-header">
          <div className="m-3 d-flex">
            <a href={author.url}>{author.login}</a> commented on{" "}
            {dateFormater(createdAt)}{" "}
            <ReactionsPannel onHandler={addReactionHandler} />
          </div>
        </h5>
        <div className="card-body m-3">
          {body ? (
            <p
              className="card-text fs-5"
              dangerouslySetInnerHTML={{ __html: body }}
            />
          ) : (
            "No description provided."
          )}
        </div>
        <Reactions
          reactions={reactions.edges}
          onHandler={removeReactionHandler}
        />
      </div>
    </div>
  );
};

export default memo(Comment);
