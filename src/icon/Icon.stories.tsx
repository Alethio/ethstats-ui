import React from "react";
import { storiesOf } from "@storybook/react";
import { TooltipRegular } from "../overlay/tooltip/TooltipRegular";

let icons = require.context("./", false, /Icon\.tsx$/);

storiesOf("icon/icons", module)
    .addDecorator(storyFn => <div style={{ display: "flex"}}>{storyFn()}</div>)
    .add("default", () =>
        icons.keys().map(k => k.replace(/\.\/(.*)\.tsx$/, "$1")).map(iconName => {
            let Icon = icons("./" + iconName + ".tsx")[iconName];
            return <TooltipRegular content={iconName}>
                <Icon color="black" />
            </TooltipRegular>;
        })
    );