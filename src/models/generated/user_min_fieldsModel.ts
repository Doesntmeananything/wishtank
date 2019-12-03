import { Instance } from "mobx-state-tree"
import { user_min_fieldsModelBase } from "./user_min_fieldsModel.base"

/* The TypeScript type of an instance of user_min_fieldsModel */
export interface user_min_fieldsModelType extends Instance<typeof user_min_fieldsModel.Type> {}

/* A graphql query fragment builders for user_min_fieldsModel */
export { selectFromuser_min_fields, user_min_fieldsModelPrimitives, user_min_fieldsModelSelector } from "./user_min_fieldsModel.base"

/**
 * user_min_fieldsModel
 *
 * aggregate min on columns
 */
export const user_min_fieldsModel = user_min_fieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
