import { Instance } from "mobx-state-tree"
import { wishlist_item_aggregateModelBase } from "./wishlist_item_aggregateModel.base"

/* The TypeScript type of an instance of wishlist_item_aggregateModel */
export interface wishlist_item_aggregateModelType extends Instance<typeof wishlist_item_aggregateModel.Type> {}

/* A graphql query fragment builders for wishlist_item_aggregateModel */
export { selectFromwishlist_item_aggregate, wishlist_item_aggregateModelPrimitives, wishlist_item_aggregateModelSelector } from "./wishlist_item_aggregateModel.base"

/**
 * wishlist_item_aggregateModel
 *
 * aggregated selection of "wishlist_item"
 */
export const wishlist_item_aggregateModel = wishlist_item_aggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
