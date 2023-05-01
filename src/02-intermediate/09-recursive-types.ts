type NestedNumbers = number | NestedNumbers[];

const nums: NestedNumbers = [1, 2, [1, 2]];
nums.push(1);
nums.push([1, [12]]);

// JSON
type JSONPrimitive = string | number | boolean | null;
type JSONObject = { [k: string]: JSONValue };
type JSONArray = JSONValue[];
type JSONValue = JSONPrimitive | JSONObject | JSONArray;

function isJSON(arg: JSONValue) {}

isJSON("hi");
isJSON(1);
isJSON({ a: [123], v: { x: 1 } });
isJSON([1, { x: "" }]);
