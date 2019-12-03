import { Instance } from "mobx-state-tree"
import { wishlist_aggregateModelBase } from "./wishlist_aggregateModel.base"

/* The TypeScript type of an instance of wishlist_aggregateModel */
export interface wishlist_aggregateModelType extends Instance<typeof wishlist_aggregateModel.Type> {}

/* A graphql query fragment builders for wishlist_aggregateModel */
export { selectFromwishlist_aggregate, wishlist_aggregateModelPrimitives, wishlist_aggregateModelSelector } from "./wishlist_aggregateModel.base"

/**
 * wishlist_aggregateModel
 *
 * aggregated selection of "wishlist"
 */
export const wishlist_aggregateModel = wishlist_aggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
