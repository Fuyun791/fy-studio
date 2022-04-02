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

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  attributes: {
    data: [
      {
        component: "View",
        attributes: {},
        extra: { commonStyle: { backgroundColor: "blue", height: 40 } },
        children: [
          {
            component: "Text",
            attributes: { text: "view in text" },
          },
        ],
      },
      { component: "Text", attributes: { text: "view out text" } },
    ],
  },
  extra: { commonStyle: { backgroundColor: "red", padding: 8 } },
};
