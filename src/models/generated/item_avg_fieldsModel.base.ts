/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * item_avg_fieldsBase
 * auto generated base class for the model item_avg_fieldsModel.
 *
 * aggregate avg on columns
 */
export const item_avg_fieldsModelBase = ModelBase
  .named('item_avg_fields')
  .props({
    __typename: types.optional(types.literal("item_avg_fields"), "item_avg_fields"),
    id: types.union(types.undefined, types.null, types.number),
    price: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class item_avg_fieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get price() { return this.__attr(`price`) }
}
export function selectFromitem_avg_fields() {
  return new item_avg_fieldsModelSelector()
}

export const item_avg_fieldsModelPrimitives = selectFromitem_avg_fields().price
