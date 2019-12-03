import { Instance } from "mobx-state-tree"
import { user_max_fieldsModelBase } from "./user_max_fieldsModel.base"

/* The TypeScript type of an instance of user_max_fieldsModel */
export interface user_max_fieldsModelType extends Instance<typeof user_max_fieldsModel.Type> {}

/* A graphql query fragment builders for user_max_fieldsModel */
export { selectFromuser_max_fields, user_max_fieldsModelPrimitives, user_max_fieldsModelSelector } from "./user_max_fieldsModel.base"

/**
 * user_max_fieldsModel
 *
 * aggregate max on columns
 */
export const user_max_fieldsModel = user_max_fieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
