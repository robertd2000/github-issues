import { IIsue } from "../types";
import { sortValues } from "./constants";
export const count = (arr: any[]) => {
  return arr?.reduce((acc, el) => {
    acc[el.node.content] = (acc[el.node.content] || 0) + 1;
    return acc;
  }, {});
};

export const sortData = (data: IIsue[], sortBy: string) => {
  if (sortBy === sortValues.oldest)
    return [...data]?.sort(
      (a, b) => Date.parse(a.node.createdAt) - Date.parse(b.node.createdAt)
    );
  if (sortBy === sortValues.newest)
    return [...data].sort(
      (a, b) => Date.parse(b.node.createdAt) - Date.parse(a.node.createdAt)
    );

  if (sortBy === sortValues.recently_updated)
    return [...data].sort(
      (a, b) => Date.parse(b.node.updatedAt) - Date.parse(a.node.updatedAt)
    );

  if (sortBy === sortValues.most_commented)
    return [...data].sort(
      (a, b) => b.node.comments.length - a.node.comments.length
    );
  return data;
};

export const filterData = (data: IIsue[], filter: string, sortBy: string) => {
  if (data) data = sortData(data, sortBy);
  if (filter === "closed") return data.filter((issue) => issue.node.closed);
  if (filter === "open") return data.filter((issue) => !issue.node.closed);
  return data;
};

export const getNameFromSortString = (str: string) => {
  return str.split("/")[0];
};
