/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"
import { wishlist_item_avg_fieldsModel, wishlist_item_avg_fieldsModelType } from "./wishlist_item_avg_fieldsModel"
import { wishlist_item_avg_fieldsModelSelector } from "./wishlist_item_avg_fieldsModel.base"
import { wishlist_item_max_fieldsModel, wishlist_item_max_fieldsModelType } from "./wishlist_item_max_fieldsModel"
import { wishlist_item_max_fieldsModelSelector } from "./wishlist_item_max_fieldsModel.base"
import { wishlist_item_min_fieldsModel, wishlist_item_min_fieldsModelType } from "./wishlist_item_min_fieldsModel"
import { wishlist_item_min_fieldsModelSelector } from "./wishlist_item_min_fieldsModel.base"
import { wishlist_item_stddev_fieldsModel, wishlist_item_stddev_fieldsModelType } from "./wishlist_item_stddev_fieldsModel"
import { wishlist_item_stddev_fieldsModelSelector } from "./wishlist_item_stddev_fieldsModel.base"
import { wishlist_item_stddev_pop_fieldsModel, wishlist_item_stddev_pop_fieldsModelType } from "./wishlist_item_stddev_pop_fieldsModel"
import { wishlist_item_stddev_pop_fieldsModelSelector } from "./wishlist_item_stddev_pop_fieldsModel.base"
import { wishlist_item_stddev_samp_fieldsModel, wishlist_item_stddev_samp_fieldsModelType } from "./wishlist_item_stddev_samp_fieldsModel"
import { wishlist_item_stddev_samp_fieldsModelSelector } from "./wishlist_item_stddev_samp_fieldsModel.base"
import { wishlist_item_sum_fieldsModel, wishlist_item_sum_fieldsModelType } from "./wishlist_item_sum_fieldsModel"
import { wishlist_item_sum_fieldsModelSelector } from "./wishlist_item_sum_fieldsModel.base"
import { wishlist_item_var_pop_fieldsModel, wishlist_item_var_pop_fieldsModelType } from "./wishlist_item_var_pop_fieldsModel"
import { wishlist_item_var_pop_fieldsModelSelector } from "./wishlist_item_var_pop_fieldsModel.base"
import { wishlist_item_var_samp_fieldsModel, wishlist_item_var_samp_fieldsModelType } from "./wishlist_item_var_samp_fieldsModel"
import { wishlist_item_var_samp_fieldsModelSelector } from "./wishlist_item_var_samp_fieldsModel.base"
import { wishlist_item_variance_fieldsModel, wishlist_item_variance_fieldsModelType } from "./wishlist_item_variance_fieldsModel"
import { wishlist_item_variance_fieldsModelSelector } from "./wishlist_item_variance_fieldsModel.base"


/**
 * wishlist_item_aggregate_fieldsBase
 * auto generated base class for the model wishlist_item_aggregate_fieldsModel.
 *
 * aggregate fields of "wishlist_item"
 */
export const wishlist_item_aggregate_fieldsModelBase = ModelBase
  .named('wishlist_item_aggregate_fields')
  .props({
    __typename: types.optional(types.literal("wishlist_item_aggregate_fields"), "wishlist_item_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => wishlist_item_avg_fieldsModel)),
    count: types.union(types.undefined, types.null, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => wishlist_item_max_fieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => wishlist_item_min_fieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => wishlist_item_stddev_fieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => wishlist_item_stddev_pop_fieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => wishlist_item_stddev_samp_fieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => wishlist_item_sum_fieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => wishlist_item_var_pop_fieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => wishlist_item_var_samp_fieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => wishlist_item_variance_fieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class wishlist_item_aggregate_fieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | wishlist_item_avg_fieldsModelSelector | ((selector: wishlist_item_avg_fieldsModelSelector) => wishlist_item_avg_fieldsModelSelector)) { return this.__child(`avg`, wishlist_item_avg_fieldsModelSelector, builder) }
  max(builder?: string | wishlist_item_max_fieldsModelSelector | ((selector: wishlist_item_max_fieldsModelSelector) => wishlist_item_max_fieldsModelSelector)) { return this.__child(`max`, wishlist_item_max_fieldsModelSelector, builder) }
  min(builder?: string | wishlist_item_min_fieldsModelSelector | ((selector: wishlist_item_min_fieldsModelSelector) => wishlist_item_min_fieldsModelSelector)) { return this.__child(`min`, wishlist_item_min_fieldsModelSelector, builder) }
  stddev(builder?: string | wishlist_item_stddev_fieldsModelSelector | ((selector: wishlist_item_stddev_fieldsModelSelector) => wishlist_item_stddev_fieldsModelSelector)) { return this.__child(`stddev`, wishlist_item_stddev_fieldsModelSelector, builder) }
  stddev_pop(builder?: string | wishlist_item_stddev_pop_fieldsModelSelector | ((selector: wishlist_item_stddev_pop_fieldsModelSelector) => wishlist_item_stddev_pop_fieldsModelSelector)) { return this.__child(`stddev_pop`, wishlist_item_stddev_pop_fieldsModelSelector, builder) }
  stddev_samp(builder?: string | wishlist_item_stddev_samp_fieldsModelSelector | ((selector: wishlist_item_stddev_samp_fieldsModelSelector) => wishlist_item_stddev_samp_fieldsModelSelector)) { return this.__child(`stddev_samp`, wishlist_item_stddev_samp_fieldsModelSelector, builder) }
  sum(builder?: string | wishlist_item_sum_fieldsModelSelector | ((selector: wishlist_item_sum_fieldsModelSelector) => wishlist_item_sum_fieldsModelSelector)) { return this.__child(`sum`, wishlist_item_sum_fieldsModelSelector, builder) }
  var_pop(builder?: string | wishlist_item_var_pop_fieldsModelSelector | ((selector: wishlist_item_var_pop_fieldsModelSelector) => wishlist_item_var_pop_fieldsModelSelector)) { return this.__child(`var_pop`, wishlist_item_var_pop_fieldsModelSelector, builder) }
  var_samp(builder?: string | wishlist_item_var_samp_fieldsModelSelector | ((selector: wishlist_item_var_samp_fieldsModelSelector) => wishlist_item_var_samp_fieldsModelSelector)) { return this.__child(`var_samp`, wishlist_item_var_samp_fieldsModelSelector, builder) }
  variance(builder?: string | wishlist_item_variance_fieldsModelSelector | ((selector: wishlist_item_variance_fieldsModelSelector) => wishlist_item_variance_fieldsModelSelector)) { return this.__child(`variance`, wishlist_item_variance_fieldsModelSelector, builder) }
}
export function selectFromwishlist_item_aggregate_fields() {
  return new wishlist_item_aggregate_fieldsModelSelector()
}

export const wishlist_item_aggregate_fieldsModelPrimitives = selectFromwishlist_item_aggregate_fields().count
