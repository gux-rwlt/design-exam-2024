import type { Decorator, Preview } from "@storybook/react";
import { initialize, mswDecorator } from "msw-storybook-addon";

initialize();

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  globalTypes: {
    normalFontFamily: {
      name: "Normal font family",
      description: "Specify normal font family",
      defaultValue: "Noto Sans JP Regular",
      toolbar: {
        icon: "edit",
        items: ["Noto Sans JP Regular", "Noto Sans JP Medium"],
      },
    },
  },
};

export const decorators: Decorator[] = [
  mswDecorator,
  (story, context) => {
    document.body.style.fontFamily = context.globals.normalFontFamily;
    return story();
  },
];

export default preview;
