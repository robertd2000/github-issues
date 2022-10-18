import { useMutation } from "@apollo/client";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CREATE_ISSUE } from "../query/mutations";
import { RouteNames } from "../routes";
import { useTypedSelector } from "./useTypedSelector";
import { useRefetch } from "./useRefetch";

export const useIssue = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [editMode, setEditMode] = useState<"edit" | "preview">("edit");

  const { repositoryId } = useTypedSelector((state) => state.reducer);
  const navigator = useNavigate();
  const { refetchGetRepositoryIssues } = useRefetch();

  useEffect(() => {
    if (repositoryId === "") navigator(RouteNames.HOME);
  }, []);

  const [createIssue] = useMutation(CREATE_ISSUE, {
    refetchQueries: refetchGetRepositoryIssues()
  });

  const onSubmit = () => {
    createIssue({
      variables: {
        repositoryId,
        title,
        body
      }
    });
    setBody("");
    setEditMode("edit");
    navigator(RouteNames.HOME);
  };

  return {
    title,
    body,
    editMode,
    onSubmit,
    setBody,
    setTitle,
    setEditMode
  };
};
