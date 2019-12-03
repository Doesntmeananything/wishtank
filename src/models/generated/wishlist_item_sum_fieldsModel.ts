import { Instance } from "mobx-state-tree"
import { wishlist_item_sum_fieldsModelBase } from "./wishlist_item_sum_fieldsModel.base"

/* The TypeScript type of an instance of wishlist_item_sum_fieldsModel */
export interface wishlist_item_sum_fieldsModelType extends Instance<typeof wishlist_item_sum_fieldsModel.Type> {}

/* A graphql query fragment builders for wishlist_item_sum_fieldsModel */
export { selectFromwishlist_item_sum_fields, wishlist_item_sum_fieldsModelPrimitives, wishlist_item_sum_fieldsModelSelector } from "./wishlist_item_sum_fieldsModel.base"

/**
 * wishlist_item_sum_fieldsModel
 *
 * aggregate sum on columns
 */
export const wishlist_item_sum_fieldsModel = wishlist_item_sum_fieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
