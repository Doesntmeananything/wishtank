/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * item_stddev_samp_fieldsBase
 * auto generated base class for the model item_stddev_samp_fieldsModel.
 *
 * aggregate stddev_samp on columns
 */
export const item_stddev_samp_fieldsModelBase = ModelBase
  .named('item_stddev_samp_fields')
  .props({
    __typename: types.optional(types.literal("item_stddev_samp_fields"), "item_stddev_samp_fields"),
    id: types.union(types.undefined, types.null, types.number),
    price: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class item_stddev_samp_fieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get price() { return this.__attr(`price`) }
}
export function selectFromitem_stddev_samp_fields() {
  return new item_stddev_samp_fieldsModelSelector()
}

export const item_stddev_samp_fieldsModelPrimitives = selectFromitem_stddev_samp_fields().price
