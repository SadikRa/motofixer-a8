"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.customerService = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
// create customer
const createCustomer = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const customerData = {
            name: data.name,
            email: data.email,
            phone: data.phone,
        };
        const result = yield prisma_1.default.customer.create({
            data: customerData,
        });
        return result;
    }
    catch (err) {
        throw new Error("failed to create customer");
    }
});
// get All Customer
const getAllCustomer = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.customer.findMany();
    return result;
});
// get A Customer
const getACustomer = (customerId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.customer.findUnique({
        where: { customerId },
    });
    if (!result) {
        throw new Error("Customer not found");
    }
    return result;
});
/// update customer
const updateCustomer = (customerId, data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.$transaction((transactionClient) => __awaiter(void 0, void 0, void 0, function* () {
        yield transactionClient.customer.findUniqueOrThrow({
            where: { customerId },
        });
        const updatedCustomer = yield transactionClient.customer.update({
            where: { customerId },
            data: data,
        });
        return updatedCustomer;
    }));
    return result;
});
/// delete customer
const deleteCustomer = (customerId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.$transaction((transactionClient) => __awaiter(void 0, void 0, void 0, function* () {
        yield transactionClient.customer.findUniqueOrThrow({
            where: { customerId },
        });
        const deleteCustomer = yield transactionClient.customer.delete({
            where: { customerId },
        });
        return deleteCustomer;
    }));
    return result;
});
exports.customerService = {
    createCustomer,
    getAllCustomer,
    getACustomer,
    updateCustomer,
    deleteCustomer,
};
