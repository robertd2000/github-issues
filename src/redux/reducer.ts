import { createSlice } from "@reduxjs/toolkit";
import { IRepositoryInitialState } from "../types";
import { filterValues } from "../utils/constants";

const initialState = {
  createdAt: "",
  issues: [],
  loading: false,
  error: false,
  repoOwner: "",
  repoName: "",
  repositoryId: "",
  filter: filterValues.All?.split("/"),
  sortField: "CREATED_AT",
  sortDirection: "DESC",
  currentUser: ""
};

const repositorySlice = createSlice({
  name: "repository",
  initialState: initialState as IRepositoryInitialState,
  reducers: {
    setRepo(state, action) {
      state.repoName = action.payload.name;
      state.repoOwner = action.payload.owner;
      state.repositoryId = action.payload.id;
    },
    setFilter(state, action) {
      state.filter = action.payload?.split("/");
    },
    setSortBy(state, action) {
      const [, field, direction] = action.payload?.split("/");
      state.sortDirection = direction;
      state.sortField = field;
    },
    setCurrentUser(state, action) {
      state.currentUser = action.payload;
    }
  }
});

export const {
  setRepo,
  setFilter,
  setSortBy,
  setCurrentUser
} = repositorySlice.actions;
export default repositorySlice.reducer;
