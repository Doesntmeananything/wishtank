/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"
import { userModel, userModelType } from "./userModel"
import { userModelSelector } from "./userModel.base"
import { user_aggregate_fieldsModel, user_aggregate_fieldsModelType } from "./user_aggregate_fieldsModel"
import { user_aggregate_fieldsModelSelector } from "./user_aggregate_fieldsModel.base"


/**
 * user_aggregateBase
 * auto generated base class for the model user_aggregateModel.
 *
 * aggregated selection of "user"
 */
export const user_aggregateModelBase = ModelBase
  .named('user_aggregate')
  .props({
    __typename: types.optional(types.literal("user_aggregate"), "user_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => user_aggregate_fieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => userModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class user_aggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | user_aggregate_fieldsModelSelector | ((selector: user_aggregate_fieldsModelSelector) => user_aggregate_fieldsModelSelector)) { return this.__child(`aggregate`, user_aggregate_fieldsModelSelector, builder) }
  nodes(builder?: string | userModelSelector | ((selector: userModelSelector) => userModelSelector)) { return this.__child(`nodes`, userModelSelector, builder) }
}
export function selectFromuser_aggregate() {
  return new user_aggregateModelSelector()
}

export const user_aggregateModelPrimitives = selectFromuser_aggregate()
