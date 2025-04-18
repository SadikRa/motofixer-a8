"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.customerRouter = void 0;
const express_1 = __importDefault(require("express"));
const customer_controller_1 = require("./customer.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const customer_validation_1 = require("./customer.validation");
const router = express_1.default.Router();
// create customer
router.post("/", (0, validateRequest_1.default)(customer_validation_1.createCustomerZodSchema), customer_controller_1.customerController.createCustomer);
// get All Customer
router.get("/", customer_controller_1.customerController.getAllCustomer);
// get All Customer
router.get("/:customerId", customer_controller_1.customerController.getACustomer);
//updated Customer
router.put("/:customerId", (0, validateRequest_1.default)(customer_validation_1.updateCustomerZodSchema), customer_controller_1.customerController.updateCustomer);
//updated Customer
router.delete("/:customerId", customer_controller_1.customerController.deleteCustomer);
exports.customerRouter = router;
