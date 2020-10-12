import { PageViewElement } from '@components/page-view-element';
import { customElement, query } from 'lit-element';

import styles from './demo-slider.styles';
import template from './demo-slider.template';

// These are the shared styles needed by this element.
import sharedStyles from '@components/shared.styles';
import { Slider } from '@spectrum/sp-slider';
import { Spectrum } from '@spectrum/config/spectrum-config';

import Prism from "prismjs";

@customElement('demo-slider')
export class DemoSlider extends PageViewElement {

  public static styles = [sharedStyles, styles];

  protected render() {
    return template.call(this);
  }

  protected firstUpdated() {
    Prism.highlightAllUnder(this.shadowRoot);
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'demo-slider': DemoSlider;
  }
}
