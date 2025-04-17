import express from "express";
import { customerController } from "./customer.controller";

const router = express.Router();

router.post("/", customerController.createCustomer);

// get All Customer
router.get("/", customerController.getAllCustomer);

export const customerRouter = router;
