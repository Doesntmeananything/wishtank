import { Instance } from "mobx-state-tree"
import { item_var_samp_fieldsModelBase } from "./item_var_samp_fieldsModel.base"

/* The TypeScript type of an instance of item_var_samp_fieldsModel */
export interface item_var_samp_fieldsModelType extends Instance<typeof item_var_samp_fieldsModel.Type> {}

/* A graphql query fragment builders for item_var_samp_fieldsModel */
export { selectFromitem_var_samp_fields, item_var_samp_fieldsModelPrimitives, item_var_samp_fieldsModelSelector } from "./item_var_samp_fieldsModel.base"

/**
 * item_var_samp_fieldsModel
 *
 * aggregate var_samp on columns
 */
export const item_var_samp_fieldsModel = item_var_samp_fieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
