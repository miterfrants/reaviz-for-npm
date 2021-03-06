import React, { Component, ReactElement } from 'react';
import { Tooltip, TooltipProps } from 'realayers';
import { NodeExtra, Link } from '../utils';
export interface SankeyLinkProps extends Link {
    /**
     * Whether the element is active or not. Set internally by `Sankey`.
     */
    active: boolean;
    /**
     * Whether to animate the enter/update/exit.
     */
    animated: boolean;
    /**
     * Id of Sankey chart. Set internally by `Sankey`.
     */
    chartId: string;
    /**
     * CSS class to apply.
     */
    className?: string;
    /**
     * Whether the node is disabled. Set internally by `Sankey`.
     */
    disabled: boolean;
    /**
     * Whether to use gradient or not.
     */
    gradient?: boolean;
    /**
     * Opacity callback for the link.
     */
    opacity: (active: boolean, disabled: boolean) => number;
    /**
     * CSS styles to apply.
     */
    style?: object;
    /**
     * Tooltip element.
     */
    tooltip: ReactElement<TooltipProps, typeof Tooltip>;
    /**
     * Width of the link. Set internally by `Sankey`.
     */
    width: number;
    /**
     * Event for when the link is clicked.
     */
    onClick: (event: React.MouseEvent<SVGPathElement>) => void;
    /**
     * Event for when the link has mouse enter.
     */
    onMouseEnter: (event: React.MouseEvent<SVGPathElement>) => void;
    /**
     * Event for when the link has mouse leave.
     */
    onMouseLeave: (event: React.MouseEvent<SVGPathElement>) => void;
}
interface SankeyLinkState {
    hovered?: boolean;
}
export declare class SankeyLink extends Component<SankeyLinkProps, SankeyLinkState> {
    static defaultProps: Partial<SankeyLinkProps>;
    link: React.RefObject<SVGPathElement>;
    state: SankeyLinkState;
    getEnter(): {
        d: string;
        strokeWidth: number;
    };
    getExit(): {
        d: string;
        strokeWidth: number;
    };
    getLink(): {
        index: number;
        y0: number;
        y1: number;
        value: number;
        width: number;
        source: string | number | import("d3-sankey").SankeyNode<NodeExtra, import("../utils").LinkExtra>;
        target: string | number | import("d3-sankey").SankeyNode<NodeExtra, import("../utils").LinkExtra>;
    };
    getStroke(): string;
    onMouseEnter(event: React.MouseEvent<SVGPathElement>): void;
    onMouseLeave(event: React.MouseEvent<SVGPathElement>): void;
    renderLink(): JSX.Element;
    renderTooltipContent(): JSX.Element;
    render(): JSX.Element;
}
export {};
