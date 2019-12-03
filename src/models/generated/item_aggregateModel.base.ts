/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"
import { itemModel, itemModelType } from "./itemModel"
import { itemModelSelector } from "./itemModel.base"
import { item_aggregate_fieldsModel, item_aggregate_fieldsModelType } from "./item_aggregate_fieldsModel"
import { item_aggregate_fieldsModelSelector } from "./item_aggregate_fieldsModel.base"


/**
 * item_aggregateBase
 * auto generated base class for the model item_aggregateModel.
 *
 * aggregated selection of "item"
 */
export const item_aggregateModelBase = ModelBase
  .named('item_aggregate')
  .props({
    __typename: types.optional(types.literal("item_aggregate"), "item_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => item_aggregate_fieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => itemModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class item_aggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | item_aggregate_fieldsModelSelector | ((selector: item_aggregate_fieldsModelSelector) => item_aggregate_fieldsModelSelector)) { return this.__child(`aggregate`, item_aggregate_fieldsModelSelector, builder) }
  nodes(builder?: string | itemModelSelector | ((selector: itemModelSelector) => itemModelSelector)) { return this.__child(`nodes`, itemModelSelector, builder) }
}
export function selectFromitem_aggregate() {
  return new item_aggregateModelSelector()
}

export const item_aggregateModelPrimitives = selectFromitem_aggregate()
