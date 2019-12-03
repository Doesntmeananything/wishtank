import { Instance } from "mobx-state-tree"
import { item_aggregate_fieldsModelBase } from "./item_aggregate_fieldsModel.base"

/* The TypeScript type of an instance of item_aggregate_fieldsModel */
export interface item_aggregate_fieldsModelType extends Instance<typeof item_aggregate_fieldsModel.Type> {}

/* A graphql query fragment builders for item_aggregate_fieldsModel */
export { selectFromitem_aggregate_fields, item_aggregate_fieldsModelPrimitives, item_aggregate_fieldsModelSelector } from "./item_aggregate_fieldsModel.base"

/**
 * item_aggregate_fieldsModel
 *
 * aggregate fields of "item"
 */
export const item_aggregate_fieldsModel = item_aggregate_fieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
