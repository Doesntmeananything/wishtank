/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * user_max_fieldsBase
 * auto generated base class for the model user_max_fieldsModel.
 *
 * aggregate max on columns
 */
export const user_max_fieldsModelBase = ModelBase
  .named('user_max_fields')
  .props({
    __typename: types.optional(types.literal("user_max_fields"), "user_max_fields"),
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

export class user_max_fieldsModelSelector extends QueryBuilder {
  get created_at() { return this.__attr(`created_at`) }
  get email() { return this.__attr(`email`) }
  get gender() { return this.__attr(`gender`) }
  get name() { return this.__attr(`name`) }
}
export function selectFromuser_max_fields() {
  return new user_max_fieldsModelSelector()
}

export const user_max_fieldsModelPrimitives = selectFromuser_max_fields().created_at.email.gender.name
