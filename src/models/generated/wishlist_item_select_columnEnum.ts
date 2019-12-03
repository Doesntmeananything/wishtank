/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { types } from "mobx-state-tree"

/**
 * Typescript enum
 */

export enum wishlist_item_select_column {
  item_id="item_id",
reserved="reserved",
wishlist_id="wishlist_id"
}

/**
* wishlist_item_select_column
 *
 * select columns of table "wishlist_item"
*/
export const wishlist_item_select_columnEnum = types.enumeration("wishlist_item_select_column", [
        "item_id", // column name
  "reserved", // column name
  "wishlist_id", // column name
      ])
