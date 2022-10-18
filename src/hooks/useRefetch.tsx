import { useTypedSelector } from "./useTypedSelector";
import { GET_REPOSITORY_ISSUES, GET_REPOSITORY_ISSUE } from "../query/queries";

export const useRefetch = () => {
  const {
    repoName,
    repoOwner,
    sortDirection,
    sortField,
    filter
  } = useTypedSelector((state) => state.reducer);

  const refetchGetRepositoryIssues = () => {
    return [
      {
        query: GET_REPOSITORY_ISSUES,
        variables: {
          name: repoName,
          owner: repoOwner,
          field: sortField,
          direction: sortDirection,
          states: filter
        }
      },
      "GetRepo"
    ];
  };

  const refetchGetRepositoryIssue = (id: number) => {
    return [
      {
        query: GET_REPOSITORY_ISSUE,
        variables: {
          name: repoName,
          owner: repoOwner,
          id
        }
      },
      "GetRepo"
    ];
  };

  return {
    refetchGetRepositoryIssues,
    refetchGetRepositoryIssue
  };
};
