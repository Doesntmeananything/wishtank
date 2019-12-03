/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"
import { wishlist_itemModel, wishlist_itemModelType } from "./wishlist_itemModel"
import { wishlist_itemModelSelector } from "./wishlist_itemModel.base"
import { wishlist_item_aggregateModel, wishlist_item_aggregateModelType } from "./wishlist_item_aggregateModel"
import { wishlist_item_aggregateModelSelector } from "./wishlist_item_aggregateModel.base"


/**
 * itemBase
 * auto generated base class for the model itemModel.
 *
 * columns and relationships of "item"
 */
export const itemModelBase = ModelBase
  .named('item')
  .props({
    __typename: types.optional(types.literal("item"), "item"),
    brand: types.union(types.undefined, types.null, types.string),
    color: types.union(types.undefined, types.null, types.string),
    description: types.union(types.undefined, types.null, types.string),
    id: types.union(types.undefined, types.integer),
    image: types.union(types.undefined, types.null, types.string),
    name: types.union(types.undefined, types.string),
    price: types.union(types.undefined, types.null, types.frozen()),
    url: types.union(types.undefined, types.null, types.string),
    /** An array relationship */
    wishlist_items: types.union(types.undefined, types.array(types.late((): any => wishlist_itemModel))),
    /** An aggregated array relationship */
    wishlist_items_aggregate: types.union(types.undefined, types.late((): any => wishlist_item_aggregateModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class itemModelSelector extends QueryBuilder {
  get brand() { return this.__attr(`brand`) }
  get color() { return this.__attr(`color`) }
  get description() { return this.__attr(`description`) }
  get id() { return this.__attr(`id`) }
  get image() { return this.__attr(`image`) }
  get name() { return this.__attr(`name`) }
  get price() { return this.__attr(`price`) }
  get url() { return this.__attr(`url`) }
  wishlist_items(builder?: string | wishlist_itemModelSelector | ((selector: wishlist_itemModelSelector) => wishlist_itemModelSelector)) { return this.__child(`wishlist_items`, wishlist_itemModelSelector, builder) }
  wishlist_items_aggregate(builder?: string | wishlist_item_aggregateModelSelector | ((selector: wishlist_item_aggregateModelSelector) => wishlist_item_aggregateModelSelector)) { return this.__child(`wishlist_items_aggregate`, wishlist_item_aggregateModelSelector, builder) }
}
export function selectFromitem() {
  return new itemModelSelector()
}

export const itemModelPrimitives = selectFromitem().brand.color.description.image.name.price.url
