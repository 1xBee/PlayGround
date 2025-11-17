// src/services/orders-edit-keyboard-handler.js
import { createStatusIndicator, showGreenLight, hideLight } from '../lib/status-indicator.js';
import { clickTabByLetter } from '../lib/tab-navigation.js';

export default class OrdersEditKeyboardHandler {
  constructor() {
    this.vCtrl = false;
    createStatusIndicator();
  }

  handleKeyUp(e) {
    if (e.key === "Control" && this.vCtrl) {
      showGreenLight();
    }
  }

  handleKeyDown(e) {
    if (e.key === "Control") {
      this.vCtrl = true;
      return;
    } else if (e.key === "Shift") return;

    if (this.vCtrl && !e.ctrlKey && !e.altKey) {
      e.preventDefault();
    }
    
    this.processKey(e);
    this.vCtrl = false;
    hideLight();
  }

  handleClick() {
    this.stopAll();
  }

  stopAll() {
    this.vCtrl = false;
    hideLight();
  }

  processKey(e) {
    const { key, ctrlKey, shiftKey, altKey } = e;
    
    if (this.vCtrl && !ctrlKey && !altKey) {
      if (key.length === 1 && /[a-zA-Z]/.test(key)) {
        clickTabByLetter(key, shiftKey);
        return;
      }
    }
  }
}