import express from "express";
import { customerController } from "./customer.controller";
import validateRequest from "../../middlewares/validateRequest";
import { createCustomerZodSchema } from "./customer.validation";

const router = express.Router();

// create customer
router.post(
  "/",
  validateRequest(createCustomerZodSchema),
  customerController.createCustomer
);

// get All Customer
router.get("/", customerController.getAllCustomer);

// get All Customer
router.get("/:customerId", customerController.getACustomer);

export const customerRouter = router;
