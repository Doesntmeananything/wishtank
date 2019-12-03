/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * item_var_samp_fieldsBase
 * auto generated base class for the model item_var_samp_fieldsModel.
 *
 * aggregate var_samp on columns
 */
export const item_var_samp_fieldsModelBase = ModelBase
  .named('item_var_samp_fields')
  .props({
    __typename: types.optional(types.literal("item_var_samp_fields"), "item_var_samp_fields"),
    id: types.union(types.undefined, types.null, types.number),
    price: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class item_var_samp_fieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get price() { return this.__attr(`price`) }
}
export function selectFromitem_var_samp_fields() {
  return new item_var_samp_fieldsModelSelector()
}

export const item_var_samp_fieldsModelPrimitives = selectFromitem_var_samp_fields().price
