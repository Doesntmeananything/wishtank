/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { types } from "mobx-state-tree"

/**
 * Typescript enum
 */

export enum user_select_column {
  created_at="created_at",
email="email",
gender="gender",
id="id",
name="name"
}

/**
* user_select_column
 *
 * select columns of table "user"
*/
export const user_select_columnEnum = types.enumeration("user_select_column", [
        "created_at", // column name
  "email", // column name
  "gender", // column name
  "id", // column name
  "name", // column name
      ])
