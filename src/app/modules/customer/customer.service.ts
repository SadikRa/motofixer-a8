import prisma from "../../../shared/prisma";

const createCustomer = async (data: any) => {
  const result = await prisma.customers
};

export const customerService = {
  createCustomer,
};
