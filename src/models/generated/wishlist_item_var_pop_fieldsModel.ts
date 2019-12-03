import { Instance } from "mobx-state-tree"
import { wishlist_item_var_pop_fieldsModelBase } from "./wishlist_item_var_pop_fieldsModel.base"

/* The TypeScript type of an instance of wishlist_item_var_pop_fieldsModel */
export interface wishlist_item_var_pop_fieldsModelType extends Instance<typeof wishlist_item_var_pop_fieldsModel.Type> {}

/* A graphql query fragment builders for wishlist_item_var_pop_fieldsModel */
export { selectFromwishlist_item_var_pop_fields, wishlist_item_var_pop_fieldsModelPrimitives, wishlist_item_var_pop_fieldsModelSelector } from "./wishlist_item_var_pop_fieldsModel.base"

/**
 * wishlist_item_var_pop_fieldsModel
 *
 * aggregate var_pop on columns
 */
export const wishlist_item_var_pop_fieldsModel = wishlist_item_var_pop_fieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
