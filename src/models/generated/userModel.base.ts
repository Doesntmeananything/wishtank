/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"
import { wishlistModel, wishlistModelType } from "./wishlistModel"
import { wishlistModelSelector } from "./wishlistModel.base"
import { wishlist_aggregateModel, wishlist_aggregateModelType } from "./wishlist_aggregateModel"
import { wishlist_aggregateModelSelector } from "./wishlist_aggregateModel.base"


/**
 * userBase
 * auto generated base class for the model userModel.
 *
 * App users   columns and relationships of "user" 
 */
export const userModelBase = ModelBase
  .named('user')
  .props({
    __typename: types.optional(types.literal("user"), "user"),
    created_at: types.union(types.undefined, types.frozen()),
    email: types.union(types.undefined, types.string),
    gender: types.union(types.undefined, types.null, types.string),
    id: types.union(types.undefined, types.frozen()),
    name: types.union(types.undefined, types.string),
    /** An array relationship */
    wishlists: types.union(types.undefined, types.array(types.late((): any => wishlistModel))),
    /** An aggregated array relationship */
    wishlists_aggregate: types.union(types.undefined, types.late((): any => wishlist_aggregateModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class userModelSelector extends QueryBuilder {
  get created_at() { return this.__attr(`created_at`) }
  get email() { return this.__attr(`email`) }
  get gender() { return this.__attr(`gender`) }
  get id() { return this.__attr(`id`) }
  get name() { return this.__attr(`name`) }
  wishlists(builder?: string | wishlistModelSelector | ((selector: wishlistModelSelector) => wishlistModelSelector)) { return this.__child(`wishlists`, wishlistModelSelector, builder) }
  wishlists_aggregate(builder?: string | wishlist_aggregateModelSelector | ((selector: wishlist_aggregateModelSelector) => wishlist_aggregateModelSelector)) { return this.__child(`wishlists_aggregate`, wishlist_aggregateModelSelector, builder) }
}
export function selectFromuser() {
  return new userModelSelector()
}

export const userModelPrimitives = selectFromuser().created_at.email.gender.name
