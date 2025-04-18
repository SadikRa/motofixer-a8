"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateServiceStatusSchema = exports.ServiceRecordValidationSchema = exports.ServiceStatusEnum = void 0;
const zod_1 = require("zod");
exports.ServiceStatusEnum = zod_1.z.enum(["pending", "in_progress", "done"]);
exports.ServiceRecordValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        serviceId: zod_1.z.string().uuid().optional(),
        bikeId: zod_1.z
            .string()
            .uuid({ message: "Invalid bikeId format (UUID expected)" }),
        serviceDate: zod_1.z
            .string()
            .refine((date) => !isNaN(Date.parse(date)), {
            message: "Invalid serviceDate format",
        })
            .optional(),
        completionDate: zod_1.z
            .string()
            .refine((date) => !isNaN(Date.parse(date)), {
            message: "Invalid completionDate format",
        })
            .optional()
            .nullable(),
        description: zod_1.z.string().min(1, { message: "Description is required" }),
        status: exports.ServiceStatusEnum.optional(),
    }),
});
exports.UpdateServiceStatusSchema = zod_1.z.object({
    body: zod_1.z.object({
        completionDate: zod_1.z
            .string()
            .datetime({ message: "Invalid ISO date format" })
            .optional(),
    }),
});
