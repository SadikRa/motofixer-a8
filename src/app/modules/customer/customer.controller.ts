import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { customerService } from "./customer.service";
import status from "http-status";

const createCustomer = catchAsync(async (req, res) => {
  const result = await customerService.createCustomer(req.body);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "customer Created successfully!",
    data: result,
  });
});

export const customerController = {
  createCustomer,
};
