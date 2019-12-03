import { Instance } from "mobx-state-tree"
import { item_variance_fieldsModelBase } from "./item_variance_fieldsModel.base"

/* The TypeScript type of an instance of item_variance_fieldsModel */
export interface item_variance_fieldsModelType extends Instance<typeof item_variance_fieldsModel.Type> {}

/* A graphql query fragment builders for item_variance_fieldsModel */
export { selectFromitem_variance_fields, item_variance_fieldsModelPrimitives, item_variance_fieldsModelSelector } from "./item_variance_fieldsModel.base"

/**
 * item_variance_fieldsModel
 *
 * aggregate variance on columns
 */
export const item_variance_fieldsModel = item_variance_fieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
