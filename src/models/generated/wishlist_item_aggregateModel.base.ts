/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"
import { wishlist_itemModel, wishlist_itemModelType } from "./wishlist_itemModel"
import { wishlist_itemModelSelector } from "./wishlist_itemModel.base"
import { wishlist_item_aggregate_fieldsModel, wishlist_item_aggregate_fieldsModelType } from "./wishlist_item_aggregate_fieldsModel"
import { wishlist_item_aggregate_fieldsModelSelector } from "./wishlist_item_aggregate_fieldsModel.base"


/**
 * wishlist_item_aggregateBase
 * auto generated base class for the model wishlist_item_aggregateModel.
 *
 * aggregated selection of "wishlist_item"
 */
export const wishlist_item_aggregateModelBase = ModelBase
  .named('wishlist_item_aggregate')
  .props({
    __typename: types.optional(types.literal("wishlist_item_aggregate"), "wishlist_item_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => wishlist_item_aggregate_fieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => wishlist_itemModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class wishlist_item_aggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | wishlist_item_aggregate_fieldsModelSelector | ((selector: wishlist_item_aggregate_fieldsModelSelector) => wishlist_item_aggregate_fieldsModelSelector)) { return this.__child(`aggregate`, wishlist_item_aggregate_fieldsModelSelector, builder) }
  nodes(builder?: string | wishlist_itemModelSelector | ((selector: wishlist_itemModelSelector) => wishlist_itemModelSelector)) { return this.__child(`nodes`, wishlist_itemModelSelector, builder) }
}
export function selectFromwishlist_item_aggregate() {
  return new wishlist_item_aggregateModelSelector()
}

export const wishlist_item_aggregateModelPrimitives = selectFromwishlist_item_aggregate()
