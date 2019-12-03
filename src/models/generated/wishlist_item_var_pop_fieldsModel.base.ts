/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * wishlist_item_var_pop_fieldsBase
 * auto generated base class for the model wishlist_item_var_pop_fieldsModel.
 *
 * aggregate var_pop on columns
 */
export const wishlist_item_var_pop_fieldsModelBase = ModelBase
  .named('wishlist_item_var_pop_fields')
  .props({
    __typename: types.optional(types.literal("wishlist_item_var_pop_fields"), "wishlist_item_var_pop_fields"),
    item_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class wishlist_item_var_pop_fieldsModelSelector extends QueryBuilder {
  get item_id() { return this.__attr(`item_id`) }
}
export function selectFromwishlist_item_var_pop_fields() {
  return new wishlist_item_var_pop_fieldsModelSelector()
}

export const wishlist_item_var_pop_fieldsModelPrimitives = selectFromwishlist_item_var_pop_fields().item_id
