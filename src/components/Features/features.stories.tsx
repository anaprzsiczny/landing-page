import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import Features from './features';

export default {
  title: "Features container",
  component: Features,
} as Meta;

export const Primary: React.VFC<{}> = () => <Features />;
