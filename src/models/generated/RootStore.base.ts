/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { ObservableMap } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLStore, configureStoreMixin, QueryOptions, withTypedRefs } from "mst-gql"

import { query_rootModel, query_rootModelType } from "./query_rootModel"
import { query_rootModelPrimitives, query_rootModelSelector } from "./query_rootModel.base"
import { itemModel, itemModelType } from "./itemModel"
import { itemModelPrimitives, itemModelSelector } from "./itemModel.base"
import { wishlist_itemModel, wishlist_itemModelType } from "./wishlist_itemModel"
import { wishlist_itemModelPrimitives, wishlist_itemModelSelector } from "./wishlist_itemModel.base"
import { wishlistModel, wishlistModelType } from "./wishlistModel"
import { wishlistModelPrimitives, wishlistModelSelector } from "./wishlistModel.base"
import { wishlist_item_aggregateModel, wishlist_item_aggregateModelType } from "./wishlist_item_aggregateModel"
import { wishlist_item_aggregateModelPrimitives, wishlist_item_aggregateModelSelector } from "./wishlist_item_aggregateModel.base"
import { wishlist_item_aggregate_fieldsModel, wishlist_item_aggregate_fieldsModelType } from "./wishlist_item_aggregate_fieldsModel"
import { wishlist_item_aggregate_fieldsModelPrimitives, wishlist_item_aggregate_fieldsModelSelector } from "./wishlist_item_aggregate_fieldsModel.base"
import { wishlist_item_avg_fieldsModel, wishlist_item_avg_fieldsModelType } from "./wishlist_item_avg_fieldsModel"
import { wishlist_item_avg_fieldsModelPrimitives, wishlist_item_avg_fieldsModelSelector } from "./wishlist_item_avg_fieldsModel.base"
import { wishlist_item_max_fieldsModel, wishlist_item_max_fieldsModelType } from "./wishlist_item_max_fieldsModel"
import { wishlist_item_max_fieldsModelPrimitives, wishlist_item_max_fieldsModelSelector } from "./wishlist_item_max_fieldsModel.base"
import { wishlist_item_min_fieldsModel, wishlist_item_min_fieldsModelType } from "./wishlist_item_min_fieldsModel"
import { wishlist_item_min_fieldsModelPrimitives, wishlist_item_min_fieldsModelSelector } from "./wishlist_item_min_fieldsModel.base"
import { wishlist_item_stddev_fieldsModel, wishlist_item_stddev_fieldsModelType } from "./wishlist_item_stddev_fieldsModel"
import { wishlist_item_stddev_fieldsModelPrimitives, wishlist_item_stddev_fieldsModelSelector } from "./wishlist_item_stddev_fieldsModel.base"
import { wishlist_item_stddev_pop_fieldsModel, wishlist_item_stddev_pop_fieldsModelType } from "./wishlist_item_stddev_pop_fieldsModel"
import { wishlist_item_stddev_pop_fieldsModelPrimitives, wishlist_item_stddev_pop_fieldsModelSelector } from "./wishlist_item_stddev_pop_fieldsModel.base"
import { wishlist_item_stddev_samp_fieldsModel, wishlist_item_stddev_samp_fieldsModelType } from "./wishlist_item_stddev_samp_fieldsModel"
import { wishlist_item_stddev_samp_fieldsModelPrimitives, wishlist_item_stddev_samp_fieldsModelSelector } from "./wishlist_item_stddev_samp_fieldsModel.base"
import { wishlist_item_sum_fieldsModel, wishlist_item_sum_fieldsModelType } from "./wishlist_item_sum_fieldsModel"
import { wishlist_item_sum_fieldsModelPrimitives, wishlist_item_sum_fieldsModelSelector } from "./wishlist_item_sum_fieldsModel.base"
import { wishlist_item_var_pop_fieldsModel, wishlist_item_var_pop_fieldsModelType } from "./wishlist_item_var_pop_fieldsModel"
import { wishlist_item_var_pop_fieldsModelPrimitives, wishlist_item_var_pop_fieldsModelSelector } from "./wishlist_item_var_pop_fieldsModel.base"
import { wishlist_item_var_samp_fieldsModel, wishlist_item_var_samp_fieldsModelType } from "./wishlist_item_var_samp_fieldsModel"
import { wishlist_item_var_samp_fieldsModelPrimitives, wishlist_item_var_samp_fieldsModelSelector } from "./wishlist_item_var_samp_fieldsModel.base"
import { wishlist_item_variance_fieldsModel, wishlist_item_variance_fieldsModelType } from "./wishlist_item_variance_fieldsModel"
import { wishlist_item_variance_fieldsModelPrimitives, wishlist_item_variance_fieldsModelSelector } from "./wishlist_item_variance_fieldsModel.base"
import { userModel, userModelType } from "./userModel"
import { userModelPrimitives, userModelSelector } from "./userModel.base"
import { wishlist_aggregateModel, wishlist_aggregateModelType } from "./wishlist_aggregateModel"
import { wishlist_aggregateModelPrimitives, wishlist_aggregateModelSelector } from "./wishlist_aggregateModel.base"
import { wishlist_aggregate_fieldsModel, wishlist_aggregate_fieldsModelType } from "./wishlist_aggregate_fieldsModel"
import { wishlist_aggregate_fieldsModelPrimitives, wishlist_aggregate_fieldsModelSelector } from "./wishlist_aggregate_fieldsModel.base"
import { item_aggregateModel, item_aggregateModelType } from "./item_aggregateModel"
import { item_aggregateModelPrimitives, item_aggregateModelSelector } from "./item_aggregateModel.base"
import { item_aggregate_fieldsModel, item_aggregate_fieldsModelType } from "./item_aggregate_fieldsModel"
import { item_aggregate_fieldsModelPrimitives, item_aggregate_fieldsModelSelector } from "./item_aggregate_fieldsModel.base"
import { item_avg_fieldsModel, item_avg_fieldsModelType } from "./item_avg_fieldsModel"
import { item_avg_fieldsModelPrimitives, item_avg_fieldsModelSelector } from "./item_avg_fieldsModel.base"
import { item_max_fieldsModel, item_max_fieldsModelType } from "./item_max_fieldsModel"
import { item_max_fieldsModelPrimitives, item_max_fieldsModelSelector } from "./item_max_fieldsModel.base"
import { item_min_fieldsModel, item_min_fieldsModelType } from "./item_min_fieldsModel"
import { item_min_fieldsModelPrimitives, item_min_fieldsModelSelector } from "./item_min_fieldsModel.base"
import { item_stddev_fieldsModel, item_stddev_fieldsModelType } from "./item_stddev_fieldsModel"
import { item_stddev_fieldsModelPrimitives, item_stddev_fieldsModelSelector } from "./item_stddev_fieldsModel.base"
import { item_stddev_pop_fieldsModel, item_stddev_pop_fieldsModelType } from "./item_stddev_pop_fieldsModel"
import { item_stddev_pop_fieldsModelPrimitives, item_stddev_pop_fieldsModelSelector } from "./item_stddev_pop_fieldsModel.base"
import { item_stddev_samp_fieldsModel, item_stddev_samp_fieldsModelType } from "./item_stddev_samp_fieldsModel"
import { item_stddev_samp_fieldsModelPrimitives, item_stddev_samp_fieldsModelSelector } from "./item_stddev_samp_fieldsModel.base"
import { item_sum_fieldsModel, item_sum_fieldsModelType } from "./item_sum_fieldsModel"
import { item_sum_fieldsModelPrimitives, item_sum_fieldsModelSelector } from "./item_sum_fieldsModel.base"
import { item_var_pop_fieldsModel, item_var_pop_fieldsModelType } from "./item_var_pop_fieldsModel"
import { item_var_pop_fieldsModelPrimitives, item_var_pop_fieldsModelSelector } from "./item_var_pop_fieldsModel.base"
import { item_var_samp_fieldsModel, item_var_samp_fieldsModelType } from "./item_var_samp_fieldsModel"
import { item_var_samp_fieldsModelPrimitives, item_var_samp_fieldsModelSelector } from "./item_var_samp_fieldsModel.base"
import { item_variance_fieldsModel, item_variance_fieldsModelType } from "./item_variance_fieldsModel"
import { item_variance_fieldsModelPrimitives, item_variance_fieldsModelSelector } from "./item_variance_fieldsModel.base"
import { user_aggregateModel, user_aggregateModelType } from "./user_aggregateModel"
import { user_aggregateModelPrimitives, user_aggregateModelSelector } from "./user_aggregateModel.base"
import { user_aggregate_fieldsModel, user_aggregate_fieldsModelType } from "./user_aggregate_fieldsModel"
import { user_aggregate_fieldsModelPrimitives, user_aggregate_fieldsModelSelector } from "./user_aggregate_fieldsModel.base"
import { user_max_fieldsModel, user_max_fieldsModelType } from "./user_max_fieldsModel"
import { user_max_fieldsModelPrimitives, user_max_fieldsModelSelector } from "./user_max_fieldsModel.base"
import { user_min_fieldsModel, user_min_fieldsModelType } from "./user_min_fieldsModel"
import { user_min_fieldsModelPrimitives, user_min_fieldsModelSelector } from "./user_min_fieldsModel.base"
import { subscription_rootModel, subscription_rootModelType } from "./subscription_rootModel"
import { subscription_rootModelPrimitives, subscription_rootModelSelector } from "./subscription_rootModel.base"

import { item_select_column } from "./item_select_columnEnum"
import { order_by } from "./order_byEnum"
import { wishlist_item_select_column } from "./wishlist_item_select_columnEnum"
import { wishlist_select_column } from "./wishlist_select_columnEnum"
import { user_select_column } from "./user_select_columnEnum"

export type item_order_by = {
  brand: order_by
  color: order_by
  description: order_by
  id: order_by
  image: order_by
  name: order_by
  price: order_by
  url: order_by
  wishlist_items_aggregate: wishlist_item_aggregate_order_by | undefined
}
export type wishlist_item_aggregate_order_by = {
  avg: wishlist_item_avg_order_by | undefined
  count: order_by
  max: wishlist_item_max_order_by | undefined
  min: wishlist_item_min_order_by | undefined
  stddev: wishlist_item_stddev_order_by | undefined
  stddev_pop: wishlist_item_stddev_pop_order_by | undefined
  stddev_samp: wishlist_item_stddev_samp_order_by | undefined
  sum: wishlist_item_sum_order_by | undefined
  var_pop: wishlist_item_var_pop_order_by | undefined
  var_samp: wishlist_item_var_samp_order_by | undefined
  variance: wishlist_item_variance_order_by | undefined
}
export type wishlist_item_avg_order_by = {
  item_id: order_by
}
export type wishlist_item_max_order_by = {
  item_id: order_by
}
export type wishlist_item_min_order_by = {
  item_id: order_by
}
export type wishlist_item_stddev_order_by = {
  item_id: order_by
}
export type wishlist_item_stddev_pop_order_by = {
  item_id: order_by
}
export type wishlist_item_stddev_samp_order_by = {
  item_id: order_by
}
export type wishlist_item_sum_order_by = {
  item_id: order_by
}
export type wishlist_item_var_pop_order_by = {
  item_id: order_by
}
export type wishlist_item_var_samp_order_by = {
  item_id: order_by
}
export type wishlist_item_variance_order_by = {
  item_id: order_by
}
export type item_bool_exp = {
  _and: item_bool_exp | undefined[]
  _not: item_bool_exp | undefined
  _or: item_bool_exp | undefined[]
  brand: String_comparison_exp | undefined
  color: String_comparison_exp | undefined
  description: String_comparison_exp | undefined
  id: Int_comparison_exp | undefined
  image: String_comparison_exp | undefined
  name: String_comparison_exp | undefined
  price: numeric_comparison_exp | undefined
  url: String_comparison_exp | undefined
  wishlist_items: wishlist_item_bool_exp | undefined
}
export type String_comparison_exp = {
  _eq: string | undefined
  _gt: string | undefined
  _gte: string | undefined
  _ilike: string | undefined
  _in: string[]
  _is_null: boolean | undefined
  _like: string | undefined
  _lt: string | undefined
  _lte: string | undefined
  _neq: string | undefined
  _nilike: string | undefined
  _nin: string[]
  _nlike: string | undefined
  _nsimilar: string | undefined
  _similar: string | undefined
}
export type Int_comparison_exp = {
  _eq: number | undefined
  _gt: number | undefined
  _gte: number | undefined
  _in: number[]
  _is_null: boolean | undefined
  _lt: number | undefined
  _lte: number | undefined
  _neq: number | undefined
  _nin: number[]
}
export type numeric_comparison_exp = {
  _eq: any | undefined
  _gt: any | undefined
  _gte: any | undefined
  _in: any[]
  _is_null: boolean | undefined
  _lt: any | undefined
  _lte: any | undefined
  _neq: any | undefined
  _nin: any[]
}
export type wishlist_item_bool_exp = {
  _and: wishlist_item_bool_exp | undefined[]
  _not: wishlist_item_bool_exp | undefined
  _or: wishlist_item_bool_exp | undefined[]
  item: item_bool_exp | undefined
  item_id: Int_comparison_exp | undefined
  reserved: Boolean_comparison_exp | undefined
  wishlist: wishlist_bool_exp | undefined
  wishlist_id: uuid_comparison_exp | undefined
}
export type Boolean_comparison_exp = {
  _eq: boolean | undefined
  _gt: boolean | undefined
  _gte: boolean | undefined
  _in: boolean[]
  _is_null: boolean | undefined
  _lt: boolean | undefined
  _lte: boolean | undefined
  _neq: boolean | undefined
  _nin: boolean[]
}
export type wishlist_bool_exp = {
  _and: wishlist_bool_exp | undefined[]
  _not: wishlist_bool_exp | undefined
  _or: wishlist_bool_exp | undefined[]
  id: uuid_comparison_exp | undefined
  items: wishlist_item_bool_exp | undefined
  user: user_bool_exp | undefined
  user_id: uuid_comparison_exp | undefined
}
export type uuid_comparison_exp = {
  _eq: any | undefined
  _gt: any | undefined
  _gte: any | undefined
  _in: any[]
  _is_null: boolean | undefined
  _lt: any | undefined
  _lte: any | undefined
  _neq: any | undefined
  _nin: any[]
}
export type user_bool_exp = {
  _and: user_bool_exp | undefined[]
  _not: user_bool_exp | undefined
  _or: user_bool_exp | undefined[]
  created_at: timestamptz_comparison_exp | undefined
  email: String_comparison_exp | undefined
  gender: String_comparison_exp | undefined
  id: uuid_comparison_exp | undefined
  name: String_comparison_exp | undefined
  wishlists: wishlist_bool_exp | undefined
}
export type timestamptz_comparison_exp = {
  _eq: any | undefined
  _gt: any | undefined
  _gte: any | undefined
  _in: any[]
  _is_null: boolean | undefined
  _lt: any | undefined
  _lte: any | undefined
  _neq: any | undefined
  _nin: any[]
}
export type wishlist_item_order_by = {
  item: item_order_by | undefined
  item_id: order_by
  reserved: order_by
  wishlist: wishlist_order_by | undefined
  wishlist_id: order_by
}
export type wishlist_order_by = {
  id: order_by
  items_aggregate: wishlist_item_aggregate_order_by | undefined
  user: user_order_by | undefined
  user_id: order_by
}
export type user_order_by = {
  created_at: order_by
  email: order_by
  gender: order_by
  id: order_by
  name: order_by
  wishlists_aggregate: wishlist_aggregate_order_by | undefined
}
export type wishlist_aggregate_order_by = {
  count: order_by
}
export type item_aggregate_order_by = {
  avg: item_avg_order_by | undefined
  count: order_by
  max: item_max_order_by | undefined
  min: item_min_order_by | undefined
  stddev: item_stddev_order_by | undefined
  stddev_pop: item_stddev_pop_order_by | undefined
  stddev_samp: item_stddev_samp_order_by | undefined
  sum: item_sum_order_by | undefined
  var_pop: item_var_pop_order_by | undefined
  var_samp: item_var_samp_order_by | undefined
  variance: item_variance_order_by | undefined
}
export type item_avg_order_by = {
  id: order_by
  price: order_by
}
export type item_max_order_by = {
  brand: order_by
  color: order_by
  description: order_by
  id: order_by
  image: order_by
  name: order_by
  price: order_by
  url: order_by
}
export type item_min_order_by = {
  brand: order_by
  color: order_by
  description: order_by
  id: order_by
  image: order_by
  name: order_by
  price: order_by
  url: order_by
}
export type item_stddev_order_by = {
  id: order_by
  price: order_by
}
export type item_stddev_pop_order_by = {
  id: order_by
  price: order_by
}
export type item_stddev_samp_order_by = {
  id: order_by
  price: order_by
}
export type item_sum_order_by = {
  id: order_by
  price: order_by
}
export type item_var_pop_order_by = {
  id: order_by
  price: order_by
}
export type item_var_samp_order_by = {
  id: order_by
  price: order_by
}
export type item_variance_order_by = {
  id: order_by
  price: order_by
}
export type user_aggregate_order_by = {
  count: order_by
  max: user_max_order_by | undefined
  min: user_min_order_by | undefined
}
export type user_max_order_by = {
  created_at: order_by
  email: order_by
  gender: order_by
  name: order_by
}
export type user_min_order_by = {
  created_at: order_by
  email: order_by
  gender: order_by
  name: order_by
}
/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {

}

/**
* Store, managing, among others, all the objects received through graphQL
*/
export const RootStoreBase = withTypedRefs<Refs>()(MSTGQLStore
  .named("RootStore")
  .extend(configureStoreMixin([['query_root', () => query_rootModel], ['item', () => itemModel], ['wishlist_item', () => wishlist_itemModel], ['wishlist', () => wishlistModel], ['wishlist_item_aggregate', () => wishlist_item_aggregateModel], ['wishlist_item_aggregate_fields', () => wishlist_item_aggregate_fieldsModel], ['wishlist_item_avg_fields', () => wishlist_item_avg_fieldsModel], ['wishlist_item_max_fields', () => wishlist_item_max_fieldsModel], ['wishlist_item_min_fields', () => wishlist_item_min_fieldsModel], ['wishlist_item_stddev_fields', () => wishlist_item_stddev_fieldsModel], ['wishlist_item_stddev_pop_fields', () => wishlist_item_stddev_pop_fieldsModel], ['wishlist_item_stddev_samp_fields', () => wishlist_item_stddev_samp_fieldsModel], ['wishlist_item_sum_fields', () => wishlist_item_sum_fieldsModel], ['wishlist_item_var_pop_fields', () => wishlist_item_var_pop_fieldsModel], ['wishlist_item_var_samp_fields', () => wishlist_item_var_samp_fieldsModel], ['wishlist_item_variance_fields', () => wishlist_item_variance_fieldsModel], ['user', () => userModel], ['wishlist_aggregate', () => wishlist_aggregateModel], ['wishlist_aggregate_fields', () => wishlist_aggregate_fieldsModel], ['item_aggregate', () => item_aggregateModel], ['item_aggregate_fields', () => item_aggregate_fieldsModel], ['item_avg_fields', () => item_avg_fieldsModel], ['item_max_fields', () => item_max_fieldsModel], ['item_min_fields', () => item_min_fieldsModel], ['item_stddev_fields', () => item_stddev_fieldsModel], ['item_stddev_pop_fields', () => item_stddev_pop_fieldsModel], ['item_stddev_samp_fields', () => item_stddev_samp_fieldsModel], ['item_sum_fields', () => item_sum_fieldsModel], ['item_var_pop_fields', () => item_var_pop_fieldsModel], ['item_var_samp_fields', () => item_var_samp_fieldsModel], ['item_variance_fields', () => item_variance_fieldsModel], ['user_aggregate', () => user_aggregateModel], ['user_aggregate_fields', () => user_aggregate_fieldsModel], ['user_max_fields', () => user_max_fieldsModel], ['user_min_fields', () => user_min_fieldsModel], ['subscription_root', () => subscription_rootModel]], []))
  .props({

  })
  .actions(self => ({
  })))
