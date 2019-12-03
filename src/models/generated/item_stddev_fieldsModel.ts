import { Instance } from "mobx-state-tree"
import { item_stddev_fieldsModelBase } from "./item_stddev_fieldsModel.base"

/* The TypeScript type of an instance of item_stddev_fieldsModel */
export interface item_stddev_fieldsModelType extends Instance<typeof item_stddev_fieldsModel.Type> {}

/* A graphql query fragment builders for item_stddev_fieldsModel */
export { selectFromitem_stddev_fields, item_stddev_fieldsModelPrimitives, item_stddev_fieldsModelSelector } from "./item_stddev_fieldsModel.base"

/**
 * item_stddev_fieldsModel
 *
 * aggregate stddev on columns
 */
export const item_stddev_fieldsModel = item_stddev_fieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
