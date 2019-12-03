import { Instance } from "mobx-state-tree"
import { item_min_fieldsModelBase } from "./item_min_fieldsModel.base"

/* The TypeScript type of an instance of item_min_fieldsModel */
export interface item_min_fieldsModelType extends Instance<typeof item_min_fieldsModel.Type> {}

/* A graphql query fragment builders for item_min_fieldsModel */
export { selectFromitem_min_fields, item_min_fieldsModelPrimitives, item_min_fieldsModelSelector } from "./item_min_fieldsModel.base"

/**
 * item_min_fieldsModel
 *
 * aggregate min on columns
 */
export const item_min_fieldsModel = item_min_fieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
