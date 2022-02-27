import { createSelector } from "reselect";

const pathSelector = state => state.path;

export const currentPathSelector = createSelector(
  [pathSelector],
  path => path.currentPath
)