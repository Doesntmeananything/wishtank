import { Instance } from "mobx-state-tree"
import { item_stddev_pop_fieldsModelBase } from "./item_stddev_pop_fieldsModel.base"

/* The TypeScript type of an instance of item_stddev_pop_fieldsModel */
export interface item_stddev_pop_fieldsModelType extends Instance<typeof item_stddev_pop_fieldsModel.Type> {}

/* A graphql query fragment builders for item_stddev_pop_fieldsModel */
export { selectFromitem_stddev_pop_fields, item_stddev_pop_fieldsModelPrimitives, item_stddev_pop_fieldsModelSelector } from "./item_stddev_pop_fieldsModel.base"

/**
 * item_stddev_pop_fieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const item_stddev_pop_fieldsModel = item_stddev_pop_fieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
