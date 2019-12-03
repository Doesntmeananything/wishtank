import { Instance } from "mobx-state-tree"
import { wishlistModelBase } from "./wishlistModel.base"

/* The TypeScript type of an instance of wishlistModel */
export interface wishlistModelType extends Instance<typeof wishlistModel.Type> {}

/* A graphql query fragment builders for wishlistModel */
export { selectFromwishlist, wishlistModelPrimitives, wishlistModelSelector } from "./wishlistModel.base"

/**
 * wishlistModel
 *
 * List of products a user wishes to receive   columns and relationships of "wishlist" 
 */
export const wishlistModel = wishlistModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
