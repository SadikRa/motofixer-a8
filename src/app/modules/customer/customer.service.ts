import prisma from "../../../shared/prisma";
import { ICustomer } from "./customer.interface";

// create customer
const createCustomer = async (data: ICustomer) => {
  try {
    const customerData = {
      name: data.name,
      email: data.email,
      phone: data.phone,
    };

    const result = await prisma.customer.create({
      data: customerData,
    });

    return result;
  } catch (err) {
    throw new Error("failed to create customer");
  }
};

// get All Customer
const getAllCustomer = async () => {
  const result = await prisma.customer.findMany();
  return result;
};

// get A Customer
const getACustomer = async (customerId: string) => {
  const result = await prisma.customer.findUnique({
    where: {
      customerId,
    },
  });
  return result;
};

export const customerService = {
  createCustomer,
  getAllCustomer,
  getACustomer,
};
