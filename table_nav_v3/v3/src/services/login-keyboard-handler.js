// src/services/login-keyboard-handler.js
// Simple handler for login page - minimal functionality
export default class LoginKeyboardHandler {
  constructor() {
    this.vCtrl = false;
  }

  handleKeyUp(e) {
    // No special behavior for login
  }

  handleKeyDown(e) {
    // Add any login-specific keyboard shortcuts here
    // For now, just basic tab navigation works
  }

  handleClick() {
    // Nothing to stop on login page
  }

  stopAll() {
    this.vCtrl = false;
  }
}