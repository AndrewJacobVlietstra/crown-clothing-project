import { createSelector } from "reselect";

const shopSelector = state => state.shop;

export const collectionsSelector = createSelector(
  [shopSelector],
  shop => shop.collections
);

export const allShopItemsSelector = createSelector(
  [collectionsSelector],
  collections => {
    const collectionItems = collections.map((collection) => collection.items)
    const spreadCollectionItems = [...collectionItems];
    const allItemsArr = [];
    spreadCollectionItems.forEach(arr => allItemsArr.push(...arr))
    return allItemsArr;
  }
);

export const lengthOfShopItemsSelector = createSelector(
  [allShopItemsSelector],
  allItems => allItems.length
)