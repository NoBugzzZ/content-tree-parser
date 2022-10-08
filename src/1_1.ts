import { boolean } from "yargs";
import { FundamentalType } from "./content-tree-type";

interface schema_1_1 {
  [key: string]: FundamentalType;
}

interface uischema_1_1 {
  [key: string]: {
    col?: number;
    row?: number;
    colspan?: number;
    rowspan?: number;
  };
}

const ct: schema_1_1 = {
  h1: 1,
  h2: "1",
  h3: true,
  h4: null,
  h5: undefined,
  h6: 1.2,
};
