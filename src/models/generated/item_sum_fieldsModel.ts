import { Instance } from "mobx-state-tree"
import { item_sum_fieldsModelBase } from "./item_sum_fieldsModel.base"

/* The TypeScript type of an instance of item_sum_fieldsModel */
export interface item_sum_fieldsModelType extends Instance<typeof item_sum_fieldsModel.Type> {}

/* A graphql query fragment builders for item_sum_fieldsModel */
export { selectFromitem_sum_fields, item_sum_fieldsModelPrimitives, item_sum_fieldsModelSelector } from "./item_sum_fieldsModel.base"

/**
 * item_sum_fieldsModel
 *
 * aggregate sum on columns
 */
export const item_sum_fieldsModel = item_sum_fieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
