import React from "react";
import Home from "../pages/Home";
import Repository from "../pages/Repository";
import NewIssue from "../pages/NewIssue";

export interface IRoute {
  path: string;
  element: React.ComponentType;
}

export enum RouteNames {
  HOME = "/",
  REPOSITORY = "/repository/:id",
  NEW_ISSUE = "/create"
}

export const routes = [
  { path: RouteNames.HOME, element: Home },
  { path: RouteNames.REPOSITORY, element: Repository },
  { path: RouteNames.NEW_ISSUE, element: NewIssue }
];
