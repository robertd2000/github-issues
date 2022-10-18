import { memo } from "react";
import { FormWithEdit } from "../components/Form";
import { useIssue } from "../hooks/useIssue";

const NewIssue = () => {
  const {
    title,
    body,
    editMode,
    onSubmit,
    setBody,
    setTitle,
    setEditMode
  } = useIssue();

  return (
    <div className="container">
      <div>
        <div className="input-group mt-3 mb-3">
          <input
            type="text"
            name="name"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
            aria-label="Text input with checkbox"
            placeholder="Title"
          />
        </div>
      </div>

      <FormWithEdit
        body={body}
        editMode={editMode}
        setBody={setBody}
        setEditMode={setEditMode}
        onSubmit={onSubmit}
        actionName="Submit new isuue"
      />
    </div>
  );
};

export default memo(NewIssue);
