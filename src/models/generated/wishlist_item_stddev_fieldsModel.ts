import { Instance } from "mobx-state-tree"
import { wishlist_item_stddev_fieldsModelBase } from "./wishlist_item_stddev_fieldsModel.base"

/* The TypeScript type of an instance of wishlist_item_stddev_fieldsModel */
export interface wishlist_item_stddev_fieldsModelType extends Instance<typeof wishlist_item_stddev_fieldsModel.Type> {}

/* A graphql query fragment builders for wishlist_item_stddev_fieldsModel */
export { selectFromwishlist_item_stddev_fields, wishlist_item_stddev_fieldsModelPrimitives, wishlist_item_stddev_fieldsModelSelector } from "./wishlist_item_stddev_fieldsModel.base"

/**
 * wishlist_item_stddev_fieldsModel
 *
 * aggregate stddev on columns
 */
export const wishlist_item_stddev_fieldsModel = wishlist_item_stddev_fieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
