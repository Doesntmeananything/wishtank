import { Instance } from "mobx-state-tree"
import { userModelBase } from "./userModel.base"

/* The TypeScript type of an instance of userModel */
export interface userModelType extends Instance<typeof userModel.Type> {}

/* A graphql query fragment builders for userModel */
export { selectFromuser, userModelPrimitives, userModelSelector } from "./userModel.base"

/**
 * userModel
 *
 * App users   columns and relationships of "user" 
 */
export const userModel = userModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
