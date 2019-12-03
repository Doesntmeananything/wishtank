/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"
import { item_avg_fieldsModel, item_avg_fieldsModelType } from "./item_avg_fieldsModel"
import { item_avg_fieldsModelSelector } from "./item_avg_fieldsModel.base"
import { item_max_fieldsModel, item_max_fieldsModelType } from "./item_max_fieldsModel"
import { item_max_fieldsModelSelector } from "./item_max_fieldsModel.base"
import { item_min_fieldsModel, item_min_fieldsModelType } from "./item_min_fieldsModel"
import { item_min_fieldsModelSelector } from "./item_min_fieldsModel.base"
import { item_stddev_fieldsModel, item_stddev_fieldsModelType } from "./item_stddev_fieldsModel"
import { item_stddev_fieldsModelSelector } from "./item_stddev_fieldsModel.base"
import { item_stddev_pop_fieldsModel, item_stddev_pop_fieldsModelType } from "./item_stddev_pop_fieldsModel"
import { item_stddev_pop_fieldsModelSelector } from "./item_stddev_pop_fieldsModel.base"
import { item_stddev_samp_fieldsModel, item_stddev_samp_fieldsModelType } from "./item_stddev_samp_fieldsModel"
import { item_stddev_samp_fieldsModelSelector } from "./item_stddev_samp_fieldsModel.base"
import { item_sum_fieldsModel, item_sum_fieldsModelType } from "./item_sum_fieldsModel"
import { item_sum_fieldsModelSelector } from "./item_sum_fieldsModel.base"
import { item_var_pop_fieldsModel, item_var_pop_fieldsModelType } from "./item_var_pop_fieldsModel"
import { item_var_pop_fieldsModelSelector } from "./item_var_pop_fieldsModel.base"
import { item_var_samp_fieldsModel, item_var_samp_fieldsModelType } from "./item_var_samp_fieldsModel"
import { item_var_samp_fieldsModelSelector } from "./item_var_samp_fieldsModel.base"
import { item_variance_fieldsModel, item_variance_fieldsModelType } from "./item_variance_fieldsModel"
import { item_variance_fieldsModelSelector } from "./item_variance_fieldsModel.base"


/**
 * item_aggregate_fieldsBase
 * auto generated base class for the model item_aggregate_fieldsModel.
 *
 * aggregate fields of "item"
 */
export const item_aggregate_fieldsModelBase = ModelBase
  .named('item_aggregate_fields')
  .props({
    __typename: types.optional(types.literal("item_aggregate_fields"), "item_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => item_avg_fieldsModel)),
    count: types.union(types.undefined, types.null, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => item_max_fieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => item_min_fieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => item_stddev_fieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => item_stddev_pop_fieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => item_stddev_samp_fieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => item_sum_fieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => item_var_pop_fieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => item_var_samp_fieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => item_variance_fieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class item_aggregate_fieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | item_avg_fieldsModelSelector | ((selector: item_avg_fieldsModelSelector) => item_avg_fieldsModelSelector)) { return this.__child(`avg`, item_avg_fieldsModelSelector, builder) }
  max(builder?: string | item_max_fieldsModelSelector | ((selector: item_max_fieldsModelSelector) => item_max_fieldsModelSelector)) { return this.__child(`max`, item_max_fieldsModelSelector, builder) }
  min(builder?: string | item_min_fieldsModelSelector | ((selector: item_min_fieldsModelSelector) => item_min_fieldsModelSelector)) { return this.__child(`min`, item_min_fieldsModelSelector, builder) }
  stddev(builder?: string | item_stddev_fieldsModelSelector | ((selector: item_stddev_fieldsModelSelector) => item_stddev_fieldsModelSelector)) { return this.__child(`stddev`, item_stddev_fieldsModelSelector, builder) }
  stddev_pop(builder?: string | item_stddev_pop_fieldsModelSelector | ((selector: item_stddev_pop_fieldsModelSelector) => item_stddev_pop_fieldsModelSelector)) { return this.__child(`stddev_pop`, item_stddev_pop_fieldsModelSelector, builder) }
  stddev_samp(builder?: string | item_stddev_samp_fieldsModelSelector | ((selector: item_stddev_samp_fieldsModelSelector) => item_stddev_samp_fieldsModelSelector)) { return this.__child(`stddev_samp`, item_stddev_samp_fieldsModelSelector, builder) }
  sum(builder?: string | item_sum_fieldsModelSelector | ((selector: item_sum_fieldsModelSelector) => item_sum_fieldsModelSelector)) { return this.__child(`sum`, item_sum_fieldsModelSelector, builder) }
  var_pop(builder?: string | item_var_pop_fieldsModelSelector | ((selector: item_var_pop_fieldsModelSelector) => item_var_pop_fieldsModelSelector)) { return this.__child(`var_pop`, item_var_pop_fieldsModelSelector, builder) }
  var_samp(builder?: string | item_var_samp_fieldsModelSelector | ((selector: item_var_samp_fieldsModelSelector) => item_var_samp_fieldsModelSelector)) { return this.__child(`var_samp`, item_var_samp_fieldsModelSelector, builder) }
  variance(builder?: string | item_variance_fieldsModelSelector | ((selector: item_variance_fieldsModelSelector) => item_variance_fieldsModelSelector)) { return this.__child(`variance`, item_variance_fieldsModelSelector, builder) }
}
export function selectFromitem_aggregate_fields() {
  return new item_aggregate_fieldsModelSelector()
}

export const item_aggregate_fieldsModelPrimitives = selectFromitem_aggregate_fields().count
