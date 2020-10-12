import { html } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map.js';

import { Slider } from './slider.component';

import '@spectrum/sp-icon';

export default function template(this: Slider) {

  const classes = {
    'is-disabled': this.disabled,
    'spectrum-Slider--ramp': this.ramp,
    'spectrum-Slider--tick': this.tick,
    'spectrum-Slider--color': this.color,
    'spectrum-Slider--filled': this.filled
  }
  const colorTemplate = [];
  const labelTemplate = [];
  const rampTemplate = [];
  const tickTemplate = [];

  if (this.label) {
    labelTemplate.push(html`
      <div class="spectrum-Slider-labelContainer">
        <label class="spectrum-Slider-label" id="spectrum-Slider-label-6" for="spectrum-Slider-input-6">${this.label}</label>
        <div class="spectrum-Slider-value" role="textbox" aria-readonly="true" aria-labelledby="spectrum-Slider-value-6">${this.value}</div>       
      </div> 
      `);
  }

  if (this.ramp) {
    rampTemplate.push(html`
      <div class="spectrum-Slider-ramp">
      <svg viewBox="0 0 240 16" preserveAspectRatio="none" aria-hidden="true" focusable="false">
        <path d="M240,4v8c0,2.3-1.9,4.1-4.2,4L1,9C0.4,9,0,8.5,0,8c0-0.5,0.4-1,1-1l234.8-7C238.1-0.1,240,1.7,240,4z"></path>
      </svg>
      </div>`)
  }

  if (this.color) {
    colorTemplate.push(html`
      <div class="spectrum-Slider-track" style="background: ${this.colorStyle}"></div>
    `)
  }

  if (this.tick) {
    let ticksTemplate = [];
    let ticks = Math.floor(this.max / this.step);
    for (let i = 0; i < ticks; i++) {
      ticksTemplate.push(html`
        <div class="spectrum-Slider-tick">
          <div class="spectrum-Slider-tickLabel">${this.min + this.step * i}</div>
        </div>
      `);
    }
    ticksTemplate.push(html`
    <div class="spectrum-Slider-tick">
      <div class="spectrum-Slider-tickLabel">${this.max}</div>
    </div>
    `);
    tickTemplate.push(html`
    <div class="spectrum-Slider-track"></div>
    <div class="spectrum-Slider-ticks">
      ${ticksTemplate}
    </div>
    `);
  }

  if (this.simpleStyle) {
    return html`
      <div class="spectrum-Slider ${classMap(classes)}" style="width:100%;">
      ${labelTemplate}
      <div class="spectrum-Slider-controls">
        <div class="spectrum-Slider-track" style="width: 40%;"></div>
        <div @mousedown="${this._mouseDown}"  class="spectrum-Slider-handle" style="left: 40%" >
          <input value="${this.value}" type="range" class="spectrum-Slider-input" step="${this.step}" min="${this.min}" max="${this.max}">
        </div>
        <div class="spectrum-Slider-track" style="width: 60%;"></div>
      </div>
      </div>`
  } else if (this.ramp) {
    return html`  
      <div class="spectrum-Slider ${classMap(classes)}" style="width:100%;">
      ${labelTemplate}
      <div class="spectrum-Slider-controls">      
      ${rampTemplate}
        <div @mousedown="${this._mouseDown}" class="spectrum-Slider-handle" style="left: 40%;">
          <input type="range" class="spectrum-Slider-input" aria-valuetext="#2680eb" value="${this.value}" step="${this.step}" min="${this.min}" max="${this.max}" id="spectrum-Slider--color-input-0">
        </div>
      </div>
      </div>`
  } else if (this.color) {
    return html`  
      <div class="spectrum-Slider ${classMap(classes)}" style="width:100%;">
      ${labelTemplate}
      <div class="spectrum-Slider-controls">
        ${colorTemplate}
        <div @mousedown="${this._mouseDown}" class="spectrum-Slider-handle" style="left: 40%;">
          <input type="range" class="spectrum-Slider-input" value="14" aria-valuetext="#2680eb" step="2" min="0" max="100" id="spectrum-Slider--color-input-0">
        </div>
      </div>
    </div>`
  } else if (this.tick) {
    return html`  
    <div class="spectrum-Slider ${classMap(classes)}" style="width:100%;">
    ${labelTemplate}
    <div class="spectrum-Slider-controls">
      ${tickTemplate}
      <div @mousedown="${this._mouseDown}" class="spectrum-Slider-handle" style="left: 40%;">
        <input type="range" class="spectrum-Slider-input" value="${this.value}" step="${this.step}" min="${this.min}" max="${this.max}" id="spectrum-Slider-input-12">
      </div>
      </div>
    </div>`
  }
}
