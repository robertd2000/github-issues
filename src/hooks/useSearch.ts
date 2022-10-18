import { ChangeEvent, useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import {
  GET_AUTHENTICATED_USER,
  GET_REPOSITORY_ISSUES
} from "../query/queries";
import { useActions } from "./useActions";
import { useDebounce } from "./useDebounce";
import { useTypedSelector } from "./useTypedSelector";

export const useSearch = () => {
  const [searchTerm, setSearchTerm] = useState<{
    name: string;
    owner: string;
    id: string;
  }>({
    name: "arduino-project",
    owner: "robertd2000",
    id: ""
  });
  const debouncedSearch = useDebounce(searchTerm, 500);
  const { setRepo } = useActions();
  const { filter, sortDirection, sortField } = useTypedSelector(
    (state) => state.reducer
  );

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm({
      ...searchTerm,
      [e.target.name]: e.target.value
    });
  };

  const { data, error, loading, refetch } = useQuery(GET_REPOSITORY_ISSUES, {
    variables: {
      name: debouncedSearch.name,
      owner: debouncedSearch.owner,
      field: sortField,
      direction: sortDirection,
      states: filter
    },
    skip: !searchTerm.name || !searchTerm.owner
  });

  useEffect(() => {
    setRepo({ ...searchTerm, id: data?.repository?.id });
    refetch({
      name: debouncedSearch.name,
      owner: debouncedSearch.owner,
      field: sortField,
      direction: sortDirection,
      states: filter
    });
  }, [searchTerm, data, sortDirection, sortField, filter]);

  return {
    data: data?.repository?.issues?.edges,
    // data: filterData(data?.repository?.issues?.edges, filter, sortBy),
    searchTerm,
    handleSearch,
    loading,
    error
  };
};
