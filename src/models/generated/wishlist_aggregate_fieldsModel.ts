import { Instance } from "mobx-state-tree"
import { wishlist_aggregate_fieldsModelBase } from "./wishlist_aggregate_fieldsModel.base"

/* The TypeScript type of an instance of wishlist_aggregate_fieldsModel */
export interface wishlist_aggregate_fieldsModelType extends Instance<typeof wishlist_aggregate_fieldsModel.Type> {}

/* A graphql query fragment builders for wishlist_aggregate_fieldsModel */
export { selectFromwishlist_aggregate_fields, wishlist_aggregate_fieldsModelPrimitives, wishlist_aggregate_fieldsModelSelector } from "./wishlist_aggregate_fieldsModel.base"

/**
 * wishlist_aggregate_fieldsModel
 *
 * aggregate fields of "wishlist"
 */
export const wishlist_aggregate_fieldsModel = wishlist_aggregate_fieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
