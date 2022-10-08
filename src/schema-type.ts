interface Property {
  [key: string]: JSNode;
}

type JSNode = FundamentalNode | ArrayNode | ObjectNode;

interface FundamentalNode {
  type: "string" | "number" | "integer" | "boolean" | "null";
  title?: string;
}

interface ArrayNode {
  type: "array";
  title?: string;
  items: JSNode;
}

interface ObjectNode {
  type: "object";
  title?: string;
  properties?: Property;
}

export default JSNode;

export { ObjectNode, ArrayNode, FundamentalNode, KIND };

enum KIND {
  "1-1",
  "composite",
  "row",
  "col",
  "row-col",
}
