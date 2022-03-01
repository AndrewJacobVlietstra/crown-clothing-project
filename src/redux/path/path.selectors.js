import { createSelector } from "reselect";

const pathSelector = state => state.path;

export const currentPathSelector = createSelector(
  [pathSelector],
  path => path.currentPath
)

export const productIDSelector = createSelector(
  [currentPathSelector],
  currentPath => Number(currentPath.split('/products/')[1])
);