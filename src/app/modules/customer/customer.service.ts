import prisma from "../../../shared/prisma";
import { ICustomer } from "./customer.interface";

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

export const customerService = {
  createCustomer,
};
