import { ServiceStatus } from "../../../../generated/prisma";
import prisma from "../../../shared/prisma";
import { IServiceRecord } from "./service.interface";

// create Service
const createService = async (data: IServiceRecord) => {
  try {
    await prisma.bike.findUniqueOrThrow({
      where: {
        bikeId: data.bikeId,
      },
    });

    const serviceData = {
      bikeId: data.bikeId,
      serviceDate: data.serviceDate,
      description: data.description,
    };

    const result = await prisma.serviceRecord.create({
      data: serviceData,
    });

    return result;
  } catch (err) {
    throw new Error("failed to create Service");
  }
};

// get All Service
const getAllService = async () => {
  const result = await prisma.serviceRecord.findMany();
  return result;
};

// get A Service
const getAService = async (serviceId: string) => {
  const result = await prisma.serviceRecord.findUnique({
    where: {
      serviceId,
    },
  });
  return result;
};

/// update Service
const updateService = async (
  serviceId: string,
  data: { completionDate?: string }
) => {
  const result = await prisma.$transaction(async (transactionClient) => {
    await transactionClient.serviceRecord.findUniqueOrThrow({
      where: { serviceId },
    });

    const updatedService = await transactionClient.serviceRecord.update({
      where: { serviceId },
      data: {
        completionDate: data.completionDate ?? new Date().toISOString(),
        status: ServiceStatus.done,
      },
    });

    return updatedService;
  });

  return result;
};

export const serviceService = {
  createService,
  getAllService,
  getAService,
  updateService,
};
