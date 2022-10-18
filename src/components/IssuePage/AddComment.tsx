import { FC, memo } from "react";
import { FormWithEdit } from "../Form";
import { useComments } from "../../hooks/useComments";
import { useRepository } from "../../hooks/useRepository";
import { IAuthor } from "../../types";

const AddComment: FC<{
  id: number;
  repoId: string;
  closed: boolean;
  author: IAuthor;
}> = ({ id, repoId, closed, author }) => {
  const { body, editMode, setBody, setEditMode, onSubmit } = useComments(id);
  const { closeIssue, reopenIssue, currentUser } = useRepository();

  const issueStatusHandler = () => {
    const options = {
      variables: {
        id: repoId
      }
    };

    if (closed) {
      reopenIssue(options);
    } else {
      closeIssue(options);
    }
  };

  return (
    <div className="container">
      <FormWithEdit
        body={body}
        editMode={editMode}
        setBody={setBody}
        setEditMode={setEditMode}
        onSubmit={() => onSubmit(repoId)}
        actionName="Comment"
        issueStatusHandler={issueStatusHandler}
        closed={closed}
        currentUser={currentUser}
        author={author?.login}
      />
    </div>
  );
};

export default memo(AddComment);
