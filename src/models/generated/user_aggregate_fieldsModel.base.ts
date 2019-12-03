/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"
import { user_max_fieldsModel, user_max_fieldsModelType } from "./user_max_fieldsModel"
import { user_max_fieldsModelSelector } from "./user_max_fieldsModel.base"
import { user_min_fieldsModel, user_min_fieldsModelType } from "./user_min_fieldsModel"
import { user_min_fieldsModelSelector } from "./user_min_fieldsModel.base"


/**
 * user_aggregate_fieldsBase
 * auto generated base class for the model user_aggregate_fieldsModel.
 *
 * aggregate fields of "user"
 */
export const user_aggregate_fieldsModelBase = ModelBase
  .named('user_aggregate_fields')
  .props({
    __typename: types.optional(types.literal("user_aggregate_fields"), "user_aggregate_fields"),
    count: types.union(types.undefined, types.null, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => user_max_fieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => user_min_fieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class user_aggregate_fieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  max(builder?: string | user_max_fieldsModelSelector | ((selector: user_max_fieldsModelSelector) => user_max_fieldsModelSelector)) { return this.__child(`max`, user_max_fieldsModelSelector, builder) }
  min(builder?: string | user_min_fieldsModelSelector | ((selector: user_min_fieldsModelSelector) => user_min_fieldsModelSelector)) { return this.__child(`min`, user_min_fieldsModelSelector, builder) }
}
export function selectFromuser_aggregate_fields() {
  return new user_aggregate_fieldsModelSelector()
}

export const user_aggregate_fieldsModelPrimitives = selectFromuser_aggregate_fields().count
