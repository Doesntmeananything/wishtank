/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { types } from "mobx-state-tree"

/**
 * Typescript enum
 */

export enum item_select_column {
  brand="brand",
color="color",
description="description",
id="id",
image="image",
name="name",
price="price",
url="url"
}

/**
* item_select_column
 *
 * select columns of table "item"
*/
export const item_select_columnEnum = types.enumeration("item_select_column", [
        "brand", // column name
  "color", // column name
  "description", // column name
  "id", // column name
  "image", // column name
  "name", // column name
  "price", // column name
  "url", // column name
      ])
