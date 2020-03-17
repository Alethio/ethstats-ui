import React from "react";
import { storiesOf } from "@storybook/react";
import { ExpanderAccordion } from "../expander/ExpanderAccordion";
import { AccordionItem } from "./AccordionItem";
import styled from "../../styled-components";
import { AccordionBasic } from "./AccordionBasic";

interface IItemConfig {
    label: string;
    value: number;
}

const ContentArea = styled.div`
    background: ${props => props.theme.colors.base.bg.main};
    padding: 8px;
`;

storiesOf("control/accordion/" + AccordionBasic.name, module)
    .addParameters({
        info: {
            propTablesExclude: [ContentArea]
        }
    })
    .addDecorator(storyFn => <ContentArea>{storyFn()}</ContentArea>)
    .add("default", () => (
        <AccordionBasic<IItemConfig>
            renderItems={(items, activeContent) => <div>
                <div style={{ display: "flex" }}>
                    {items.map((item, index) =>
                        <ExpanderAccordion open={item.isOpen} onClick={item.onClick} label={item.config.label}
                            value={item.config.value} locale="en-US" fullWidth />
                    )}
                </div>
                <div>
                    { activeContent }
                </div>
            </div>}
        >
            <AccordionItem<IItemConfig> label="Item 1" value={5}>
                <div>Static content 1</div>
            </AccordionItem>
            <AccordionItem<IItemConfig> label="Item 2" value={10}>
                <div>Static content 2</div>
            </AccordionItem>
        </AccordionBasic>
    ));