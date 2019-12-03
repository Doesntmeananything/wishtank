import { Instance } from "mobx-state-tree"
import { item_avg_fieldsModelBase } from "./item_avg_fieldsModel.base"

/* The TypeScript type of an instance of item_avg_fieldsModel */
export interface item_avg_fieldsModelType extends Instance<typeof item_avg_fieldsModel.Type> {}

/* A graphql query fragment builders for item_avg_fieldsModel */
export { selectFromitem_avg_fields, item_avg_fieldsModelPrimitives, item_avg_fieldsModelSelector } from "./item_avg_fieldsModel.base"

/**
 * item_avg_fieldsModel
 *
 * aggregate avg on columns
 */
export const item_avg_fieldsModel = item_avg_fieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
