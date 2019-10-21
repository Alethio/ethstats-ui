import * as React from "react";
import styled, { css } from "../styled-components";
import { Box, IBoxProps } from "../layout/content/box/Box";
import { IBoxColorsThunk } from "../layout/content/box/IBoxColorsThunk";
import { HoverState } from "../util/react/HoverState";
import { ITheme } from "../theme/ITheme";

interface IButtonRootProps {
    floating?: boolean;
    disabled?: boolean;
    rounded?: boolean;
}

const ButtonRoot = styled<IButtonRootProps, "button">("button")`
    ${props => !props.disabled ? css`
    cursor: pointer;
    ` : ``}
    user-select: none;
    text-transform: uppercase;
    ${props => props.floating ? css`
    box-shadow: 0 8px 16px rgba(167, 181, 209, 0.6);
    ` : ``}

    border-radius: ${props => props.rounded ? "100px" : "4px" };

    /* Override user-agent styles */
    background: none;
    border: none; /* Remove borders */
    outline: none;
    padding: 0px;
`;

const StyledBox = styled(Box)`
    border-radius: inherit;
    transition: background-color .2s ease-in-out, border-color .2s ease-in-out;
`;

export type ButtonColors = "primary" | "secondary" | "special1" | "special2";
type InteractionState = "normal" | "hover" | "disabled";
type GetColorSetFn = (colorVariants: ButtonColors, state: InteractionState) => IBoxColorsThunk<ITheme>;

const getColorSet: GetColorSetFn = (colorVariant, state) => (theme) => theme.colors.button[colorVariant][state];

type IHtmlButtonProps = Pick<React.ButtonHTMLAttributes<HTMLButtonElement>, "autoFocus" | "name" | "type" | "value">;

export interface IButtonProps extends IHtmlButtonProps {
    Icon?: IBoxProps["Icon"];
    iconPlacement?: IBoxProps["iconPlacement"];
    colors?: ButtonColors;
    floating?: boolean;
    /** Rounded 50% corners */
    rounded?: boolean;
    children?: string;
    disabled?: boolean;
    onClick?(): void;
}

export class Button extends React.Component<IButtonProps> {
    static defaultProps: Pick<IButtonProps, "colors"> = {
        colors: "secondary"
    };

    render() {
        let {
            Icon, iconPlacement, floating, disabled, rounded, colors, autoFocus, name, type, value, children
        } = this.props;
        return (
            <HoverState>
                {(hover) =>
                <ButtonRoot
                    onClick={!this.props.disabled ? this.props.onClick : void 0}
                    floating={floating}
                    disabled={disabled}
                    rounded={rounded}
                    autoFocus={autoFocus}
                    name={name}
                    type={type}
                    value={value}
                >
                    <StyledBox
                        Icon={Icon}
                        iconPlacement={iconPlacement ? iconPlacement : "left"}
                        colors={getColorSet(colors!, !disabled ? hover ? "hover" : "normal" : "disabled")}
                        metrics={{
                            fontSize: 12,
                            lineHeight: 14,
                            fontWeight: 600,
                            height: 36,
                            iconSize: 24,
                            letterSpacing: .4,
                            textPaddingTop: 9,
                            textPaddingX: 16
                        }}
                    >{children}</StyledBox>
                </ButtonRoot>
                }
            </HoverState>
        );
    }
}
