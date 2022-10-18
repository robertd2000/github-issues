import { useEffect } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useParams, useNavigate } from "react-router-dom";
import { GET_AUTHENTICATED_USER, GET_REPOSITORY_ISSUE } from "../query/queries";
import { CLOSE_ISSUE, REOPEN_ISSUE } from "../query/mutations";

import { RouteNames } from "../routes";
import { useRefetch } from "./useRefetch";

export const useRepository = () => {
  const { repoName, repoOwner } = useTypedSelector((state) => state.reducer);
  const { id } = useParams();

  const navigator = useNavigate();
  const { refetchGetRepositoryIssue } = useRefetch();

  const { data, error, loading } = useQuery(GET_REPOSITORY_ISSUE, {
    variables: {
      name: repoName,
      owner: repoOwner,
      id: +id!
    },
    skip: !repoOwner || !repoOwner
  });

  const { data: currentUser } = useQuery(GET_AUTHENTICATED_USER);

  const [closeIssue] = useMutation(CLOSE_ISSUE, {
    refetchQueries: refetchGetRepositoryIssue(+id!)
  });

  const [reopenIssue] = useMutation(REOPEN_ISSUE, {
    refetchQueries: refetchGetRepositoryIssue(+id!)
  });

  useEffect(() => {
    if (!repoName || !repoOwner || repoName === "" || repoOwner === "")
      navigator(RouteNames.HOME);
  }, [navigator, repoName, repoOwner]);

  return {
    id,
    data: data?.repository?.issue,
    loading,
    repoName,
    currentUser: currentUser?.viewer?.login,
    error,
    closeIssue,
    reopenIssue
  };
};
