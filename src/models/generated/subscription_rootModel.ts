import { Instance } from "mobx-state-tree"
import { subscription_rootModelBase } from "./subscription_rootModel.base"

/* The TypeScript type of an instance of subscription_rootModel */
export interface subscription_rootModelType extends Instance<typeof subscription_rootModel.Type> {}

/* A graphql query fragment builders for subscription_rootModel */
export { selectFromsubscription_root, subscription_rootModelPrimitives, subscription_rootModelSelector } from "./subscription_rootModel.base"

/**
 * subscription_rootModel
 *
 * subscription root
 */
export const subscription_rootModel = subscription_rootModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
