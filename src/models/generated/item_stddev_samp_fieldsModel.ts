import { Instance } from "mobx-state-tree"
import { item_stddev_samp_fieldsModelBase } from "./item_stddev_samp_fieldsModel.base"

/* The TypeScript type of an instance of item_stddev_samp_fieldsModel */
export interface item_stddev_samp_fieldsModelType extends Instance<typeof item_stddev_samp_fieldsModel.Type> {}

/* A graphql query fragment builders for item_stddev_samp_fieldsModel */
export { selectFromitem_stddev_samp_fields, item_stddev_samp_fieldsModelPrimitives, item_stddev_samp_fieldsModelSelector } from "./item_stddev_samp_fieldsModel.base"

/**
 * item_stddev_samp_fieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const item_stddev_samp_fieldsModel = item_stddev_samp_fieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
