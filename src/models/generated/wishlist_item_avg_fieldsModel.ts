import { Instance } from "mobx-state-tree"
import { wishlist_item_avg_fieldsModelBase } from "./wishlist_item_avg_fieldsModel.base"

/* The TypeScript type of an instance of wishlist_item_avg_fieldsModel */
export interface wishlist_item_avg_fieldsModelType extends Instance<typeof wishlist_item_avg_fieldsModel.Type> {}

/* A graphql query fragment builders for wishlist_item_avg_fieldsModel */
export { selectFromwishlist_item_avg_fields, wishlist_item_avg_fieldsModelPrimitives, wishlist_item_avg_fieldsModelSelector } from "./wishlist_item_avg_fieldsModel.base"

/**
 * wishlist_item_avg_fieldsModel
 *
 * aggregate avg on columns
 */
export const wishlist_item_avg_fieldsModel = wishlist_item_avg_fieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
