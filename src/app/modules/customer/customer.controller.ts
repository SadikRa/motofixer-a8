import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { customerService } from "./customer.service";
import status from "http-status";

// create customer
const createCustomer = catchAsync(async (req, res) => {
  const result = await customerService.createCustomer(req.body);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "customer Created successfully!",
    data: result,
  });
});

//get All Customer
const getAllCustomer = catchAsync(async (req, res) => {
  const result = await customerService.getAllCustomer();

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "customer get successfully!",
    data: result,
  });
});

//get A Customer
const getACustomer = catchAsync(async (req, res) => {
  const { customerId } = req.params;

  const result = await customerService.getACustomer(customerId);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "customer get successfully!",
    data: result,
  });
});

//Update A Customer
const updateCustomer = catchAsync(async (req, res) => {
  const { customerId } = req.params;

  const result = await customerService.updateCustomer(customerId, req.body);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "customer updated successfully!",
    data: result,
  });
});

//delete A Customer
const deleteCustomer = catchAsync(async (req, res) => {
  const { customerId } = req.params;

  const result = await customerService.deleteCustomer(customerId);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "customer deleted successfully!",
    data: result,
  });
});

export const customerController = {
  createCustomer,
  getAllCustomer,
  getACustomer,
  updateCustomer,
  deleteCustomer,
};
