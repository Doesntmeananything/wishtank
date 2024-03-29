/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * user_min_fieldsBase
 * auto generated base class for the model user_min_fieldsModel.
 *
 * aggregate min on columns
 */
export const user_min_fieldsModelBase = ModelBase
  .named('user_min_fields')
  .props({
    __typename: types.optional(types.literal("user_min_fields"), "user_min_fields"),
    created_at: types.union(types.undefined, types.null, types.frozen()),
    email: types.union(types.undefined, types.null, types.string),
    gender: types.union(types.undefined, types.null, types.string),
    name: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class user_min_fieldsModelSelector extends QueryBuilder {
  get created_at() { return this.__attr(`created_at`) }
  get email() { return this.__attr(`email`) }
  get gender() { return this.__attr(`gender`) }
  get name() { return this.__attr(`name`) }
}
export function selectFromuser_min_fields() {
  return new user_min_fieldsModelSelector()
}

export const user_min_fieldsModelPrimitives = selectFromuser_min_fields().created_at.email.gender.name
