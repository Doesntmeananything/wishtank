/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * item_max_fieldsBase
 * auto generated base class for the model item_max_fieldsModel.
 *
 * aggregate max on columns
 */
export const item_max_fieldsModelBase = ModelBase
  .named('item_max_fields')
  .props({
    __typename: types.optional(types.literal("item_max_fields"), "item_max_fields"),
    brand: types.union(types.undefined, types.null, types.string),
    color: types.union(types.undefined, types.null, types.string),
    description: types.union(types.undefined, types.null, types.string),
    id: types.union(types.undefined, types.null, types.integer),
    image: types.union(types.undefined, types.null, types.string),
    name: types.union(types.undefined, types.null, types.string),
    price: types.union(types.undefined, types.null, types.frozen()),
    url: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class item_max_fieldsModelSelector extends QueryBuilder {
  get brand() { return this.__attr(`brand`) }
  get color() { return this.__attr(`color`) }
  get description() { return this.__attr(`description`) }
  get id() { return this.__attr(`id`) }
  get image() { return this.__attr(`image`) }
  get name() { return this.__attr(`name`) }
  get price() { return this.__attr(`price`) }
  get url() { return this.__attr(`url`) }
}
export function selectFromitem_max_fields() {
  return new item_max_fieldsModelSelector()
}

export const item_max_fieldsModelPrimitives = selectFromitem_max_fields().brand.color.description.image.name.price.url
