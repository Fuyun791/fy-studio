import { ICommonSchema } from "@types";
import TextSchema from "./Text/schema";
import ButtonSchema from "./Button/schema";
import ListViewSchema from "./ListView/schema";
import ViewSchema from "./View/schema";
import CustomizeComSchema from "./CustomizeCom/schema";
import Text from "./Text";
import Button from "./Button";
import ListView from "./ListView";
import View from "./View";
import CustomizeCom from "./CustomizeCom";

// const Text = TextSchema;

const Schema: { [key: string]: ICommonSchema } = {
  Text: TextSchema,
  Button: ButtonSchema,
  ListView: ListViewSchema,
  View: ViewSchema,
  CUstomizeCom: CustomizeComSchema,
};

const Component = {
  Text,
  Button,
  ListView,
  View,
  CustomizeCom,
};

export default { Schema, Component };
