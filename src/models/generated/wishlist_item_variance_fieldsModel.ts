import { Instance } from "mobx-state-tree"
import { wishlist_item_variance_fieldsModelBase } from "./wishlist_item_variance_fieldsModel.base"

/* The TypeScript type of an instance of wishlist_item_variance_fieldsModel */
export interface wishlist_item_variance_fieldsModelType extends Instance<typeof wishlist_item_variance_fieldsModel.Type> {}

/* A graphql query fragment builders for wishlist_item_variance_fieldsModel */
export { selectFromwishlist_item_variance_fields, wishlist_item_variance_fieldsModelPrimitives, wishlist_item_variance_fieldsModelSelector } from "./wishlist_item_variance_fieldsModel.base"

/**
 * wishlist_item_variance_fieldsModel
 *
 * aggregate variance on columns
 */
export const wishlist_item_variance_fieldsModel = wishlist_item_variance_fieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
