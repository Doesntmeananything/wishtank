import { Instance } from "mobx-state-tree"
import { user_aggregate_fieldsModelBase } from "./user_aggregate_fieldsModel.base"

/* The TypeScript type of an instance of user_aggregate_fieldsModel */
export interface user_aggregate_fieldsModelType extends Instance<typeof user_aggregate_fieldsModel.Type> {}

/* A graphql query fragment builders for user_aggregate_fieldsModel */
export { selectFromuser_aggregate_fields, user_aggregate_fieldsModelPrimitives, user_aggregate_fieldsModelSelector } from "./user_aggregate_fieldsModel.base"

/**
 * user_aggregate_fieldsModel
 *
 * aggregate fields of "user"
 */
export const user_aggregate_fieldsModel = user_aggregate_fieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
