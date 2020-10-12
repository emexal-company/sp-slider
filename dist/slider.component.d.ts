import { Base } from '@spectrum/sp-base';
export declare class Slider extends Base {
    static componentStyles: import("lit-element").CSSResult[];
    disabled: boolean;
    simpleStyle: boolean;
    color: boolean;
    ramp: boolean;
    tick: boolean;
    filled: boolean;
    colorStyle: string;
    label: string;
    value: string;
    min: number;
    max: number;
    step: number;
    protected sliderDiv: HTMLElement;
    protected sliderInput: HTMLInputElement;
    protected sliderValue: HTMLElement;
    protected tracks: HTMLElement;
    protected handles: HTMLElement;
    protected slider: HTMLElement;
    constructor();
    firstUpdated(changedProperties: any): void;
    _mouseDown(e: any): void;
    _mouseUp(e: any): void;
    _mouseMove(e: any): void;
    protected render(): import("lit-element").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'sp-slider': Slider;
    }
}
