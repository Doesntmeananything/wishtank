/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * item_sum_fieldsBase
 * auto generated base class for the model item_sum_fieldsModel.
 *
 * aggregate sum on columns
 */
export const item_sum_fieldsModelBase = ModelBase
  .named('item_sum_fields')
  .props({
    __typename: types.optional(types.literal("item_sum_fields"), "item_sum_fields"),
    id: types.union(types.undefined, types.null, types.integer),
    price: types.union(types.undefined, types.null, types.frozen()),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class item_sum_fieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get price() { return this.__attr(`price`) }
}
export function selectFromitem_sum_fields() {
  return new item_sum_fieldsModelSelector()
}

export const item_sum_fieldsModelPrimitives = selectFromitem_sum_fields().price
