import { LitElement, html } from '../../@polymer/lit-element/lit-element.js';

class EmojiCheckbox extends LitElement {

  static get properties() {
    return {
      /** If the checkbox is checked. */
      checked: Boolean,

      /** Emoji for non-checked state. Default ✅. */
      empty: String,

      /** Emoji for checked state. Default ✔️. */
      full: String,

      /** Checkbox label. */
      label: String,

      /** Checkbox value. */
      value: String,
    };
  }

  render({checked, empty, full, label, value}) {
    return html`
    <style>
    html {
      --emoji-checkbox-width: 1.5em;
    }

    :host {
      display: inline-block;
      align-items: center;
      justify-content: center;
      position: relative;
      width: var(--emoji-checkbox-width);
      height: var(--emoji-checkbox-width);
    }

    input, label {
      visibility: hidden;
      width: 0;
      height: 0;
    }

    input, label, label::after {
      left: 0;
      top: 0;
      position: absolute;
      display: block;
    }

    input {
      width: var(--emoji-checkbox-width);
      height: var(--emoji-checkbox-width);
    }

    label {
      width: var(--emoji-checkbox-width);
      height: var(--emoji-checkbox-width);
      content: '';
    }

    label::after {
      visibility: visible;
      display: block;
    }

    label::after {
      content: '${empty || '✅'}';
    }

    input:checked + label::after {
      content: '${full || '✔️'}';
    }

    </style>

    <input id="input" type="checkbox" checked?="${checked}" value="${value}"/>
    <label for="input">${label}</label>
    `;
  }
}

customElements.define('emoji-checkbox', EmojiCheckbox);
