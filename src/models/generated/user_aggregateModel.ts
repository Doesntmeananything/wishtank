import { Instance } from "mobx-state-tree"
import { user_aggregateModelBase } from "./user_aggregateModel.base"

/* The TypeScript type of an instance of user_aggregateModel */
export interface user_aggregateModelType extends Instance<typeof user_aggregateModel.Type> {}

/* A graphql query fragment builders for user_aggregateModel */
export { selectFromuser_aggregate, user_aggregateModelPrimitives, user_aggregateModelSelector } from "./user_aggregateModel.base"

/**
 * user_aggregateModel
 *
 * aggregated selection of "user"
 */
export const user_aggregateModel = user_aggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
