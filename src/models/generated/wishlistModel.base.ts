/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"
import { userModel, userModelType } from "./userModel"
import { userModelSelector } from "./userModel.base"
import { wishlist_itemModel, wishlist_itemModelType } from "./wishlist_itemModel"
import { wishlist_itemModelSelector } from "./wishlist_itemModel.base"
import { wishlist_item_aggregateModel, wishlist_item_aggregateModelType } from "./wishlist_item_aggregateModel"
import { wishlist_item_aggregateModelSelector } from "./wishlist_item_aggregateModel.base"


/**
 * wishlistBase
 * auto generated base class for the model wishlistModel.
 *
 * List of products a user wishes to receive   columns and relationships of "wishlist" 
 */
export const wishlistModelBase = ModelBase
  .named('wishlist')
  .props({
    __typename: types.optional(types.literal("wishlist"), "wishlist"),
    id: types.union(types.undefined, types.frozen()),
    /** An array relationship */
    items: types.union(types.undefined, types.array(types.late((): any => wishlist_itemModel))),
    /** An aggregated array relationship */
    items_aggregate: types.union(types.undefined, types.late((): any => wishlist_item_aggregateModel)),
    /** An object relationship */
    user: types.union(types.undefined, types.late((): any => userModel)),
    user_id: types.union(types.undefined, types.frozen()),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class wishlistModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get user_id() { return this.__attr(`user_id`) }
  items(builder?: string | wishlist_itemModelSelector | ((selector: wishlist_itemModelSelector) => wishlist_itemModelSelector)) { return this.__child(`items`, wishlist_itemModelSelector, builder) }
  items_aggregate(builder?: string | wishlist_item_aggregateModelSelector | ((selector: wishlist_item_aggregateModelSelector) => wishlist_item_aggregateModelSelector)) { return this.__child(`items_aggregate`, wishlist_item_aggregateModelSelector, builder) }
  user(builder?: string | userModelSelector | ((selector: userModelSelector) => userModelSelector)) { return this.__child(`user`, userModelSelector, builder) }
}
export function selectFromwishlist() {
  return new wishlistModelSelector()
}

export const wishlistModelPrimitives = selectFromwishlist().user_id
