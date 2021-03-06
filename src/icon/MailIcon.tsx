import * as React from "react";
import { ISvgIconProps, SvgIcon } from "../util/react/SvgIcon";

export interface IMailIconProps extends ISvgIconProps {

}

export class MailIcon extends React.Component<IMailIconProps> {
    render() {
        return (
            <SvgIcon {...this.props}>
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <polygon points="0 0 24 0 24 24 0 24"></polygon>
                    <path
                        // tslint:disable-next-line:max-line-length
                        d="M20,4 L4,4 C2.9,4 2.01,4.9 2.01,6 L2,18 C2,19.1 2.9,20 4,20 L20,20 C21.1,20 22,19.1 22,18 L22,6 C22,4.9 21.1,4 20,4 L20,4 Z M20,8 L12,13 L4,8 L4,6 L12,11 L20,6 L20,8 L20,8 Z"
                        fill="currentColor"></path>
                </g>
            </SvgIcon>
        );
    }
}
