/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * wishlist_aggregate_fieldsBase
 * auto generated base class for the model wishlist_aggregate_fieldsModel.
 *
 * aggregate fields of "wishlist"
 */
export const wishlist_aggregate_fieldsModelBase = ModelBase
  .named('wishlist_aggregate_fields')
  .props({
    __typename: types.optional(types.literal("wishlist_aggregate_fields"), "wishlist_aggregate_fields"),
    count: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class wishlist_aggregate_fieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
}
export function selectFromwishlist_aggregate_fields() {
  return new wishlist_aggregate_fieldsModelSelector()
}

export const wishlist_aggregate_fieldsModelPrimitives = selectFromwishlist_aggregate_fields().count
