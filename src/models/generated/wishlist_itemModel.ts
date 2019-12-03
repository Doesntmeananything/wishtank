import { Instance } from "mobx-state-tree"
import { wishlist_itemModelBase } from "./wishlist_itemModel.base"

/* The TypeScript type of an instance of wishlist_itemModel */
export interface wishlist_itemModelType extends Instance<typeof wishlist_itemModel.Type> {}

/* A graphql query fragment builders for wishlist_itemModel */
export { selectFromwishlist_item, wishlist_itemModelPrimitives, wishlist_itemModelSelector } from "./wishlist_itemModel.base"

/**
 * wishlist_itemModel
 *
 * columns and relationships of "wishlist_item"
 */
export const wishlist_itemModel = wishlist_itemModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
