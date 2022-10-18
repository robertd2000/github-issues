import { useMutation } from "@apollo/client";
import { ADD_REACTION, REMOVE_REACTION } from "../query/mutations";
import { useRefetch } from "./useRefetch";

export const useReactions = (id: number) => {
  const { refetchGetRepositoryIssue } = useRefetch();
  const [addReaction, { loading, error }] = useMutation(ADD_REACTION, {
    refetchQueries: refetchGetRepositoryIssue(id)
  });

  const [removeReaction] = useMutation(REMOVE_REACTION, {
    refetchQueries: refetchGetRepositoryIssue(id)
  });

  return {
    addReaction,
    removeReaction,
    loading,
    error
  };
};
