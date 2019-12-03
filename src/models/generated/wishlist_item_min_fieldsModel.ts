import { Instance } from "mobx-state-tree"
import { wishlist_item_min_fieldsModelBase } from "./wishlist_item_min_fieldsModel.base"

/* The TypeScript type of an instance of wishlist_item_min_fieldsModel */
export interface wishlist_item_min_fieldsModelType extends Instance<typeof wishlist_item_min_fieldsModel.Type> {}

/* A graphql query fragment builders for wishlist_item_min_fieldsModel */
export { selectFromwishlist_item_min_fields, wishlist_item_min_fieldsModelPrimitives, wishlist_item_min_fieldsModelSelector } from "./wishlist_item_min_fieldsModel.base"

/**
 * wishlist_item_min_fieldsModel
 *
 * aggregate min on columns
 */
export const wishlist_item_min_fieldsModel = wishlist_item_min_fieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
