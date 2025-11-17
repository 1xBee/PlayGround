// src/app/index.js
import TableKeyboardHandler from '../services/table-keyboard-handler.js';
import LoginKeyboardHandler from '../services/login-keyboard-handler.js';
import OrdersEditKeyboardHandler from '../services/orders-edit-keyboard-handler.js';

// Router: Select handler based on path
const path = window.location.pathname;

// Use regex test() or includes() on an array
const tablePages = ['/Items', '/Deliveries', '/Orders', '/Logs', '/Users', '/POs', '/Customers', '/Vendors', '/VendorGroups'];

let handler;
if (path === '/Account/Login') {
  handler = new LoginKeyboardHandler();
} else if (path.startsWith('/Orders/Edit')) {
  handler = new OrdersEditKeyboardHandler();
} else if (tablePages.some(page => path.startsWith(page))) {
  handler = new TableKeyboardHandler();
} else {
  handler = new TableKeyboardHandler();
}

// Setup event listeners
document.addEventListener("keyup", (e) => handler.handleKeyUp(e));
document.addEventListener("keydown", (e) => handler.handleKeyDown(e));
document.addEventListener("click", () => handler.handleClick());

console.log("Keyboard shortcuts loaded for:", path);