/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { types } from "mobx-state-tree"

/**
 * Typescript enum
 */

export enum order_by {
  asc="asc",
asc_nulls_first="asc_nulls_first",
asc_nulls_last="asc_nulls_last",
desc="desc",
desc_nulls_first="desc_nulls_first",
desc_nulls_last="desc_nulls_last"
}

/**
* order_by
 *
 * column ordering options
*/
export const order_byEnum = types.enumeration("order_by", [
        "asc", // in the ascending order, nulls last
  "asc_nulls_first", // in the ascending order, nulls first
  "asc_nulls_last", // in the ascending order, nulls last
  "desc", // in the descending order, nulls first
  "desc_nulls_first", // in the descending order, nulls first
  "desc_nulls_last", // in the descending order, nulls last
      ])
