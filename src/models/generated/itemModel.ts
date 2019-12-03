import { Instance } from "mobx-state-tree"
import { itemModelBase } from "./itemModel.base"

/* The TypeScript type of an instance of itemModel */
export interface itemModelType extends Instance<typeof itemModel.Type> {}

/* A graphql query fragment builders for itemModel */
export { selectFromitem, itemModelPrimitives, itemModelSelector } from "./itemModel.base"

/**
 * itemModel
 *
 * columns and relationships of "item"
 */
export const itemModel = itemModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
