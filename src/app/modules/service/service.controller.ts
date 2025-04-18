import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import status from "http-status";
import { serviceService } from "./service.service";

// create Service
const createService = catchAsync(async (req, res) => {
  const result = await serviceService.createService(req.body);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Service Created successfully!",
    data: result,
  });
});

//get All Service
const getAllService = catchAsync(async (req, res) => {
  const result = await serviceService.getAllService();

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Service get successfully!",
    data: result,
  });
});

//get A Service
const getAService = catchAsync(async (req, res) => {
  const { serviceId } = req.params;

  const result = await serviceService.getAService(serviceId);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "get a Service successfully!",
    data: result,
  });
});

//Update A Service
const updateService = catchAsync(async (req, res) => {
  const { serviceId } = req.params;

  const result = await serviceService.updateService(serviceId, req.body);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Service updated successfully!",
    data: result,
  });
});

export const serviceController = {
  createService,
  getAllService,
  getAService,
  updateService,
};
