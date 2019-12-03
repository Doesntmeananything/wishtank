import { Instance } from "mobx-state-tree"
import { wishlist_item_stddev_samp_fieldsModelBase } from "./wishlist_item_stddev_samp_fieldsModel.base"

/* The TypeScript type of an instance of wishlist_item_stddev_samp_fieldsModel */
export interface wishlist_item_stddev_samp_fieldsModelType extends Instance<typeof wishlist_item_stddev_samp_fieldsModel.Type> {}

/* A graphql query fragment builders for wishlist_item_stddev_samp_fieldsModel */
export { selectFromwishlist_item_stddev_samp_fields, wishlist_item_stddev_samp_fieldsModelPrimitives, wishlist_item_stddev_samp_fieldsModelSelector } from "./wishlist_item_stddev_samp_fieldsModel.base"

/**
 * wishlist_item_stddev_samp_fieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const wishlist_item_stddev_samp_fieldsModel = wishlist_item_stddev_samp_fieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
