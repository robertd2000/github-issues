import { FC, memo } from "react";
import MDEditor from "@uiw/react-md-editor";
import { Closed, Reopen } from "../UI/Icons";

interface IProps {
  body: string;
  editMode: "edit" | "preview";
  actionName: string;
  closed?: boolean;
  currentUser: string;
  author: string;
  onSubmit: () => void;
  setBody: React.Dispatch<React.SetStateAction<string>>;
  setEditMode: React.Dispatch<React.SetStateAction<"edit" | "preview">>;
  issueStatusHandler?: () => void;
}

const FormWithEdit: FC<IProps> = ({
  body,
  editMode,
  actionName,
  closed,
  onSubmit,
  setBody,
  setEditMode,
  issueStatusHandler,
  currentUser,
  author
}) => {
  return (
    <>
      <ul className="nav nav-tabs" id="nav-tab" role="tablist">
        <li className={`nav-item`} onClick={() => setEditMode("edit")}>
          <span
            className={`nav-link ${editMode === "edit" ? "active" : ""}`}
            aria-current="page"
          >
            Write
          </span>
        </li>
        <li className={`nav-item`} onClick={() => setEditMode("preview")}>
          <span
            className={`nav-link ${editMode === "preview" ? "active" : ""}`}
          >
            Preview
          </span>
        </li>
      </ul>
      <MDEditor
        height={200}
        value={body}
        onChange={setBody}
        preview={editMode}
      />

      <div>
        {issueStatusHandler && author === currentUser && (
          <button
            type="button"
            className="btn m-3 float-right"
            onClick={issueStatusHandler}
          >
            {closed ? (
              <span>
                <Reopen /> Reopen issue
              </span>
            ) : (
              <span>
                <Closed /> Close issue
              </span>
            )}
          </button>
        )}
        <button
          type="button"
          className="btn btn-success m-3 float-right"
          onClick={onSubmit}
          disabled={!body.length}
        >
          {actionName}
        </button>
      </div>
    </>
  );
};

export default memo(FormWithEdit);
