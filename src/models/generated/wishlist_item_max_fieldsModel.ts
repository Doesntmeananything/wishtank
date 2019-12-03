import { Instance } from "mobx-state-tree"
import { wishlist_item_max_fieldsModelBase } from "./wishlist_item_max_fieldsModel.base"

/* The TypeScript type of an instance of wishlist_item_max_fieldsModel */
export interface wishlist_item_max_fieldsModelType extends Instance<typeof wishlist_item_max_fieldsModel.Type> {}

/* A graphql query fragment builders for wishlist_item_max_fieldsModel */
export { selectFromwishlist_item_max_fields, wishlist_item_max_fieldsModelPrimitives, wishlist_item_max_fieldsModelSelector } from "./wishlist_item_max_fieldsModel.base"

/**
 * wishlist_item_max_fieldsModel
 *
 * aggregate max on columns
 */
export const wishlist_item_max_fieldsModel = wishlist_item_max_fieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
