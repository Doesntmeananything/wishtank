/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"
import { wishlistModel, wishlistModelType } from "./wishlistModel"
import { wishlistModelSelector } from "./wishlistModel.base"
import { wishlist_aggregate_fieldsModel, wishlist_aggregate_fieldsModelType } from "./wishlist_aggregate_fieldsModel"
import { wishlist_aggregate_fieldsModelSelector } from "./wishlist_aggregate_fieldsModel.base"


/**
 * wishlist_aggregateBase
 * auto generated base class for the model wishlist_aggregateModel.
 *
 * aggregated selection of "wishlist"
 */
export const wishlist_aggregateModelBase = ModelBase
  .named('wishlist_aggregate')
  .props({
    __typename: types.optional(types.literal("wishlist_aggregate"), "wishlist_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => wishlist_aggregate_fieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => wishlistModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class wishlist_aggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | wishlist_aggregate_fieldsModelSelector | ((selector: wishlist_aggregate_fieldsModelSelector) => wishlist_aggregate_fieldsModelSelector)) { return this.__child(`aggregate`, wishlist_aggregate_fieldsModelSelector, builder) }
  nodes(builder?: string | wishlistModelSelector | ((selector: wishlistModelSelector) => wishlistModelSelector)) { return this.__child(`nodes`, wishlistModelSelector, builder) }
}
export function selectFromwishlist_aggregate() {
  return new wishlist_aggregateModelSelector()
}

export const wishlist_aggregateModelPrimitives = selectFromwishlist_aggregate()
