import { Instance } from "mobx-state-tree"
import { item_var_pop_fieldsModelBase } from "./item_var_pop_fieldsModel.base"

/* The TypeScript type of an instance of item_var_pop_fieldsModel */
export interface item_var_pop_fieldsModelType extends Instance<typeof item_var_pop_fieldsModel.Type> {}

/* A graphql query fragment builders for item_var_pop_fieldsModel */
export { selectFromitem_var_pop_fields, item_var_pop_fieldsModelPrimitives, item_var_pop_fieldsModelSelector } from "./item_var_pop_fieldsModel.base"

/**
 * item_var_pop_fieldsModel
 *
 * aggregate var_pop on columns
 */
export const item_var_pop_fieldsModel = item_var_pop_fieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
