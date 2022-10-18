import { useMutation } from "@apollo/client";
import { useState } from "react";
import { useRefetch } from "./useRefetch";
import { ADD_COMMENT } from "../query/mutations";

export const useComments = (id: number) => {
  const [body, setBody] = useState("");
  const [editMode, setEditMode] = useState<"edit" | "preview">("edit");
  const { refetchGetRepositoryIssue } = useRefetch();

  const [createIssue] = useMutation(ADD_COMMENT, {
    refetchQueries: refetchGetRepositoryIssue(id)
  });

  const onSubmit = (id: string) => {
    createIssue({
      variables: {
        id,
        body
      }
    });
    setBody("");
    setEditMode("edit");
  };

  return { onSubmit, body, editMode, setBody, setEditMode };
};
