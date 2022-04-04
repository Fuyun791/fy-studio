import React from "react";

import { ListView } from ".";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/ListView",
  component: ListView,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <ListView {...args} />;

const temp = ["text1", "text2"];

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  attributes: {
    data: ["text1", "text2"],
  },
  extra: { commonStyle: { backgroundColor: "red", padding: 8 } },
  id: "aaa",
  onClick: (id) => console.log("id", id),
};
