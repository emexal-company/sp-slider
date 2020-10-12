import { html } from 'lit-element';
import { DemoSlider } from './demo-slider.component';

import '@spectrum/sp-slider';
import '@spectrum/sp-container';


export default function template(this: DemoSlider) {
  return html`
  <sp-container>
  <sp-rule medium label="Standard"></sp-rule>
  <sp-demo width="300">
<pre><sp-slider simpleStyle step="1" max="100" min="0"></sp-slider></pre>
  </sp-demo>
  <sp-demo width="300">
<pre><sp-slider disabled simpleStyle step="1" max="100" min="0"></sp-slider></pre>
  </sp-demo>
  <sp-rule medium label="Label and value"></sp-rule>
  <sp-demo width="300">
<pre><sp-slider simpleStyle step="1" max="100" min="0" label="Label" ></sp-slider></pre>
  </sp-demo>
  <sp-demo width="300">
<pre><sp-slider disabled simpleStyle step="1" max="100" min="0" label="Label" ></sp-slider></pre>
  </sp-demo>
  <sp-rule medium label="Filled"></sp-rule>
  <sp-demo width="300">
<pre><sp-slider simpleStyle filled step="1" max="100" min="0" label="Label"></sp-slider></pre>
  </sp-demo>
  <sp-demo width="300">
<pre><sp-slider simpleStyle disabled></sp-slider></pre>
  </sp-demo>
  <sp-rule medium label="Ramp"></sp-rule>
  <sp-demo width="300">
<pre><sp-slider ramp label="Label" step="1" max="100" min="0" label="Label"></sp-slider></pre>
  </sp-demo>
  <sp-demo width="300">
<pre><sp-slider disabled ramp label="Label" step="1" max="100" min="0" label="Label"></sp-slider></pre>
  </sp-demo>
  <sp-rule medium label="Color"></sp-rule>
  <sp-demo width="300">
<pre><sp-slider color colorStyle="linear-gradient(to right, rgba(38, 128, 235, .5), rgb(9, 90, 186))" label="blue"></sp-slider></pre>
  </sp-demo>
  <sp-demo width="300">
<pre><sp-slider disabled color colorStyle="linear-gradient(to right, rgba(38, 128, 235, .5), rgb(9, 90, 186))" label="blue"></sp-slider></pre>
  </sp-demo>
  <sp-rule medium label="Tick with Labels"></sp-rule>
  <sp-demo width="300">
<pre> <sp-slider tick step="20" max="100" min="0" label="Label"></sp-slider></pre>
  </sp-demo>
  <sp-demo width="300">
<pre><sp-slider disabled tick step="20" max="100" min="0"></sp-slider></pre>
  </sp-demo>
  </sp-container>
  `;
}
