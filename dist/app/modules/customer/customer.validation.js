"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCustomerZodSchema = exports.createCustomerZodSchema = void 0;
const zod_1 = require("zod");
exports.createCustomerZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().min(1, "Name is required"),
        email: zod_1.z.string().email("Invalid email address"),
        phone: zod_1.z
            .string()
            .min(10, "Phone number must be at least 10 digits")
            .max(15, "Phone number can't be longer than 15 digits"),
    }),
});
exports.updateCustomerZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().min(1).optional(),
        phone: zod_1.z
            .string()
            .min(11, { message: "Phone number must be at least 11 characters long" })
            .optional(),
    }),
});
