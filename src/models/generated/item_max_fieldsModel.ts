import { Instance } from "mobx-state-tree"
import { item_max_fieldsModelBase } from "./item_max_fieldsModel.base"

/* The TypeScript type of an instance of item_max_fieldsModel */
export interface item_max_fieldsModelType extends Instance<typeof item_max_fieldsModel.Type> {}

/* A graphql query fragment builders for item_max_fieldsModel */
export { selectFromitem_max_fields, item_max_fieldsModelPrimitives, item_max_fieldsModelSelector } from "./item_max_fieldsModel.base"

/**
 * item_max_fieldsModel
 *
 * aggregate max on columns
 */
export const item_max_fieldsModel = item_max_fieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
