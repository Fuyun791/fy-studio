import { ICommonSchema } from "@types";
import Text from "./Text/schema";
import Button from "./Button/schema";
import ListView from "./ListView/schema";
import View from "./View/schema";

// const Text = TextSchema;

const schema: { [key: string]: ICommonSchema } = {
  Text,
  Button,
  ListView,
  View,
};

export default schema;
