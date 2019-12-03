/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"
import { itemModel, itemModelType } from "./itemModel"
import { itemModelSelector } from "./itemModel.base"
import { item_aggregateModel, item_aggregateModelType } from "./item_aggregateModel"
import { item_aggregateModelSelector } from "./item_aggregateModel.base"
import { userModel, userModelType } from "./userModel"
import { userModelSelector } from "./userModel.base"
import { user_aggregateModel, user_aggregateModelType } from "./user_aggregateModel"
import { user_aggregateModelSelector } from "./user_aggregateModel.base"
import { wishlistModel, wishlistModelType } from "./wishlistModel"
import { wishlistModelSelector } from "./wishlistModel.base"
import { wishlist_aggregateModel, wishlist_aggregateModelType } from "./wishlist_aggregateModel"
import { wishlist_aggregateModelSelector } from "./wishlist_aggregateModel.base"
import { wishlist_itemModel, wishlist_itemModelType } from "./wishlist_itemModel"
import { wishlist_itemModelSelector } from "./wishlist_itemModel.base"
import { wishlist_item_aggregateModel, wishlist_item_aggregateModelType } from "./wishlist_item_aggregateModel"
import { wishlist_item_aggregateModelSelector } from "./wishlist_item_aggregateModel.base"


/**
 * query_rootBase
 * auto generated base class for the model query_rootModel.
 *
 * query root
 */
export const query_rootModelBase = ModelBase
  .named('query_root')
  .props({
    __typename: types.optional(types.literal("query_root"), "query_root"),
    /** fetch data from the table: "item" */
    item: types.union(types.undefined, types.array(types.late((): any => itemModel))),
    /** fetch aggregated fields from the table: "item" */
    item_aggregate: types.union(types.undefined, types.late((): any => item_aggregateModel)),
    /** fetch data from the table: "item" using primary key columns */
    item_by_pk: types.union(types.undefined, types.null, types.late((): any => itemModel)),
    /** fetch data from the table: "user" */
    user: types.union(types.undefined, types.array(types.late((): any => userModel))),
    /** fetch aggregated fields from the table: "user" */
    user_aggregate: types.union(types.undefined, types.late((): any => user_aggregateModel)),
    /** fetch data from the table: "user" using primary key columns */
    user_by_pk: types.union(types.undefined, types.null, types.late((): any => userModel)),
    /** fetch data from the table: "wishlist" */
    wishlist: types.union(types.undefined, types.array(types.late((): any => wishlistModel))),
    /** fetch aggregated fields from the table: "wishlist" */
    wishlist_aggregate: types.union(types.undefined, types.late((): any => wishlist_aggregateModel)),
    /** fetch data from the table: "wishlist" using primary key columns */
    wishlist_by_pk: types.union(types.undefined, types.null, types.late((): any => wishlistModel)),
    /** fetch data from the table: "wishlist_item" */
    wishlist_item: types.union(types.undefined, types.array(types.late((): any => wishlist_itemModel))),
    /** fetch aggregated fields from the table: "wishlist_item" */
    wishlist_item_aggregate: types.union(types.undefined, types.late((): any => wishlist_item_aggregateModel)),
    /** fetch data from the table: "wishlist_item" using primary key columns */
    wishlist_item_by_pk: types.union(types.undefined, types.null, types.late((): any => wishlist_itemModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class query_rootModelSelector extends QueryBuilder {
  item(builder?: string | itemModelSelector | ((selector: itemModelSelector) => itemModelSelector)) { return this.__child(`item`, itemModelSelector, builder) }
  item_aggregate(builder?: string | item_aggregateModelSelector | ((selector: item_aggregateModelSelector) => item_aggregateModelSelector)) { return this.__child(`item_aggregate`, item_aggregateModelSelector, builder) }
  item_by_pk(builder?: string | itemModelSelector | ((selector: itemModelSelector) => itemModelSelector)) { return this.__child(`item_by_pk`, itemModelSelector, builder) }
  user(builder?: string | userModelSelector | ((selector: userModelSelector) => userModelSelector)) { return this.__child(`user`, userModelSelector, builder) }
  user_aggregate(builder?: string | user_aggregateModelSelector | ((selector: user_aggregateModelSelector) => user_aggregateModelSelector)) { return this.__child(`user_aggregate`, user_aggregateModelSelector, builder) }
  user_by_pk(builder?: string | userModelSelector | ((selector: userModelSelector) => userModelSelector)) { return this.__child(`user_by_pk`, userModelSelector, builder) }
  wishlist(builder?: string | wishlistModelSelector | ((selector: wishlistModelSelector) => wishlistModelSelector)) { return this.__child(`wishlist`, wishlistModelSelector, builder) }
  wishlist_aggregate(builder?: string | wishlist_aggregateModelSelector | ((selector: wishlist_aggregateModelSelector) => wishlist_aggregateModelSelector)) { return this.__child(`wishlist_aggregate`, wishlist_aggregateModelSelector, builder) }
  wishlist_by_pk(builder?: string | wishlistModelSelector | ((selector: wishlistModelSelector) => wishlistModelSelector)) { return this.__child(`wishlist_by_pk`, wishlistModelSelector, builder) }
  wishlist_item(builder?: string | wishlist_itemModelSelector | ((selector: wishlist_itemModelSelector) => wishlist_itemModelSelector)) { return this.__child(`wishlist_item`, wishlist_itemModelSelector, builder) }
  wishlist_item_aggregate(builder?: string | wishlist_item_aggregateModelSelector | ((selector: wishlist_item_aggregateModelSelector) => wishlist_item_aggregateModelSelector)) { return this.__child(`wishlist_item_aggregate`, wishlist_item_aggregateModelSelector, builder) }
  wishlist_item_by_pk(builder?: string | wishlist_itemModelSelector | ((selector: wishlist_itemModelSelector) => wishlist_itemModelSelector)) { return this.__child(`wishlist_item_by_pk`, wishlist_itemModelSelector, builder) }
}
export function selectFromquery_root() {
  return new query_rootModelSelector()
}

export const query_rootModelPrimitives = selectFromquery_root()
