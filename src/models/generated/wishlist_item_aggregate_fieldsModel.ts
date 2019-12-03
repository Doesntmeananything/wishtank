import { Instance } from "mobx-state-tree"
import { wishlist_item_aggregate_fieldsModelBase } from "./wishlist_item_aggregate_fieldsModel.base"

/* The TypeScript type of an instance of wishlist_item_aggregate_fieldsModel */
export interface wishlist_item_aggregate_fieldsModelType extends Instance<typeof wishlist_item_aggregate_fieldsModel.Type> {}

/* A graphql query fragment builders for wishlist_item_aggregate_fieldsModel */
export { selectFromwishlist_item_aggregate_fields, wishlist_item_aggregate_fieldsModelPrimitives, wishlist_item_aggregate_fieldsModelSelector } from "./wishlist_item_aggregate_fieldsModel.base"

/**
 * wishlist_item_aggregate_fieldsModel
 *
 * aggregate fields of "wishlist_item"
 */
export const wishlist_item_aggregate_fieldsModel = wishlist_item_aggregate_fieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
