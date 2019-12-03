/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * item_stddev_fieldsBase
 * auto generated base class for the model item_stddev_fieldsModel.
 *
 * aggregate stddev on columns
 */
export const item_stddev_fieldsModelBase = ModelBase
  .named('item_stddev_fields')
  .props({
    __typename: types.optional(types.literal("item_stddev_fields"), "item_stddev_fields"),
    id: types.union(types.undefined, types.null, types.number),
    price: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class item_stddev_fieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get price() { return this.__attr(`price`) }
}
export function selectFromitem_stddev_fields() {
  return new item_stddev_fieldsModelSelector()
}

export const item_stddev_fieldsModelPrimitives = selectFromitem_stddev_fields().price
