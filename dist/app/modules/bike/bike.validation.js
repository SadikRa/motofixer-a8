"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBikeZodSchema = void 0;
const zod_1 = require("zod");
exports.createBikeZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        brand: zod_1.z.string().min(1, "Brand is required"),
        model: zod_1.z.string().min(1, "Model is required"),
        year: zod_1.z
            .number()
            .int()
            .min(1900, "Year must be a valid number")
            .max(new Date().getFullYear()),
        customerId: zod_1.z.string().uuid("Invalid customer ID"),
    }),
});
