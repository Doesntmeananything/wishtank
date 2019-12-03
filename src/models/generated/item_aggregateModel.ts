import { Instance } from "mobx-state-tree"
import { item_aggregateModelBase } from "./item_aggregateModel.base"

/* The TypeScript type of an instance of item_aggregateModel */
export interface item_aggregateModelType extends Instance<typeof item_aggregateModel.Type> {}

/* A graphql query fragment builders for item_aggregateModel */
export { selectFromitem_aggregate, item_aggregateModelPrimitives, item_aggregateModelSelector } from "./item_aggregateModel.base"

/**
 * item_aggregateModel
 *
 * aggregated selection of "item"
 */
export const item_aggregateModel = item_aggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
