import { customElement, property, query, queryAll } from 'lit-element';
import { Base } from '@spectrum/sp-base';
import sliderStyles from './slider.styles';
import template from './slider.template';

@customElement('sp-slider')
export class Slider extends Base {
  public static componentStyles = [sliderStyles];

  @property({ type: Boolean }) disabled = false;
  @property({ type: Boolean }) simpleStyle = false;
  @property({ type: Boolean }) color = false;
  @property({ type: Boolean }) ramp = false;
  @property({ type: Boolean }) tick = false;
  @property({ type: Boolean }) filled = false;
  @property({ type: String }) colorStyle = '';
  @property({ type: String }) label = '';
  @property({ type: String }) value = '';
  @property({ type: Number }) min = 5;
  @property({ type: Number }) max = 50;
  @property({ type: Number }) step = 1;

  @query('.spectrum-Slider-handle')
  protected sliderDiv!: HTMLElement;
  @query('.spectrum-Slider-input')
  protected sliderInput!: HTMLInputElement;
  @query('.spectrum-Slider-value')
  protected sliderValue!: HTMLElement;
  @queryAll('.spectrum-Slider-track')
  protected tracks!: HTMLElement;
  @queryAll('.spectrum-Slider-handle')
  protected handles!: HTMLElement;
  @query('.spectrum-Slider-controls')
  protected slider!: HTMLElement;

  constructor() {
    super();
    this._mouseUpListener = this._mouseUp.bind(this);
    this._mouseMoveListener = this._mouseMove.bind(this);
  }

  firstUpdated(changedProperties: any) {
    if(!this.value) {
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


  protected render() {
    return template.call(this);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sp-slider': Slider;
  }
}
