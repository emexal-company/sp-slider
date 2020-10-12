import { __decorate, __metadata } from "tslib";
import { customElement, property, query, queryAll } from 'lit-element';
import { Base } from '@spectrum/sp-base';
import sliderStyles from './slider.styles';
import template from './slider.template';
let Slider = class Slider extends Base {
    constructor() {
        super();
        this.disabled = false;
        this.simpleStyle = false;
        this.color = false;
        this.ramp = false;
        this.tick = false;
        this.filled = false;
        this.colorStyle = '';
        this.label = '';
        this.value = '';
        this.min = 5;
        this.max = 50;
        this.step = 1;
        this._mouseUpListener = this._mouseUp.bind(this);
        this._mouseMoveListener = this._mouseMove.bind(this);
    }
    firstUpdated(changedProperties) {
        if (!this.value) {
            this.value = String(this.sliderInput.value);
            // var sliderOffsetWidth = this.slider.offsetWidth;
            // var sliderOffsetLeft = this.slider.offsetParent.getBoundingClientRect().left;
            // var x = Math.max(Math.min(e.x - sliderOffsetLeft, sliderOffsetWidth), 0);
            // var percent = (x / sliderOffsetWidth) * 100;
            // this.value = String(Math.trunc(Math.trunc(percent) * (this.max - this.min) / 100) + this.min);
        }
    }
    _mouseDown(e) {
        window.addEventListener('mouseup', this._mouseUpListener);
        window.addEventListener('mousemove', this._mouseMoveListener);
    }
    _mouseUp(e) {
        window.removeEventListener('mouseup', this._mouseUpListener);
        window.removeEventListener('mousemove', this._mouseMoveListener);
    }
    _mouseMove(e) {
        console.log(e);
        var leftTrack = this.tracks[0];
        var rightTrack = this.tracks[1];
        var handle = this.handles[0];
        var sliderOffsetWidth = this.slider.offsetWidth;
        var sliderOffsetLeft = this.slider.offsetParent.getBoundingClientRect().left;
        var x = Math.max(Math.min(e.x - sliderOffsetLeft, sliderOffsetWidth), 0);
        var percent = (x / sliderOffsetWidth) * 100;
        if (leftTrack && rightTrack) {
            leftTrack.style.width = percent + '%';
            rightTrack.style.width = (100 - percent) + '%';
        }
        handle.style.left = percent + '%';
        this.value = String(Math.trunc(Math.trunc(percent) * (this.max - this.min) / 100) + this.min);
        this.sliderInput.value = this.value;
    }
    render() {
        return template.call(this);
    }
};
Slider.componentStyles = [sliderStyles];
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Object)
], Slider.prototype, "disabled", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Object)
], Slider.prototype, "simpleStyle", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Object)
], Slider.prototype, "color", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Object)
], Slider.prototype, "ramp", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Object)
], Slider.prototype, "tick", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Object)
], Slider.prototype, "filled", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", Object)
], Slider.prototype, "colorStyle", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", Object)
], Slider.prototype, "label", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", Object)
], Slider.prototype, "value", void 0);
__decorate([
    property({ type: Number }),
    __metadata("design:type", Object)
], Slider.prototype, "min", void 0);
__decorate([
    property({ type: Number }),
    __metadata("design:type", Object)
], Slider.prototype, "max", void 0);
__decorate([
    property({ type: Number }),
    __metadata("design:type", Object)
], Slider.prototype, "step", void 0);
__decorate([
    query('.spectrum-Slider-handle'),
    __metadata("design:type", HTMLElement)
], Slider.prototype, "sliderDiv", void 0);
__decorate([
    query('.spectrum-Slider-input'),
    __metadata("design:type", HTMLInputElement)
], Slider.prototype, "sliderInput", void 0);
__decorate([
    query('.spectrum-Slider-value'),
    __metadata("design:type", HTMLElement)
], Slider.prototype, "sliderValue", void 0);
__decorate([
    queryAll('.spectrum-Slider-track'),
    __metadata("design:type", HTMLElement)
], Slider.prototype, "tracks", void 0);
__decorate([
    queryAll('.spectrum-Slider-handle'),
    __metadata("design:type", HTMLElement)
], Slider.prototype, "handles", void 0);
__decorate([
    query('.spectrum-Slider-controls'),
    __metadata("design:type", HTMLElement)
], Slider.prototype, "slider", void 0);
Slider = __decorate([
    customElement('sp-slider'),
    __metadata("design:paramtypes", [])
], Slider);
export { Slider };
//# sourceMappingURL=slider.component.js.map