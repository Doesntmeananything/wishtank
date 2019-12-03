/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * item_variance_fieldsBase
 * auto generated base class for the model item_variance_fieldsModel.
 *
 * aggregate variance on columns
 */
export const item_variance_fieldsModelBase = ModelBase
  .named('item_variance_fields')
  .props({
    __typename: types.optional(types.literal("item_variance_fields"), "item_variance_fields"),
    id: types.union(types.undefined, types.null, types.number),
    price: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class item_variance_fieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get price() { return this.__attr(`price`) }
}
export function selectFromitem_variance_fields() {
  return new item_variance_fieldsModelSelector()
}

export const item_variance_fieldsModelPrimitives = selectFromitem_variance_fields().price
