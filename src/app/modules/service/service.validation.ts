import { z } from "zod";

export const ServiceStatusEnum = z.enum([
  "pending",
  "in_progress",
  "completed",
]);

export const ServiceRecordValidationSchema = z.object({
  body: z.object({
    serviceId: z.string().uuid().optional(),
    bikeId: z
      .string()
      .uuid({ message: "Invalid bikeId format (UUID expected)" }),
    serviceDate: z
      .string()
      .refine((date) => !isNaN(Date.parse(date)), {
        message: "Invalid serviceDate format",
      })
      .optional(),
    completionDate: z
      .string()
      .refine((date) => !isNaN(Date.parse(date)), {
        message: "Invalid completionDate format",
      })
      .optional()
      .nullable(),
    description: z.string().min(1, { message: "Description is required" }),
    status: ServiceStatusEnum.optional(),
  }),
});
