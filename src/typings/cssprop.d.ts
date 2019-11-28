// https://github.com/DefinitelyTyped/DefinitelyTyped/issues/31245#issuecomment-463640878

import { CSSProp } from "styled-components";

interface Theme {}

declare module "react" {
  interface Attributes {
    css?: CSSProp<Theme>;
  }
}
