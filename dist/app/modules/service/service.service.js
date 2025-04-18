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
exports.serviceService = void 0;
const prisma_1 = require("../../../../generated/prisma");
const prisma_2 = __importDefault(require("../../../shared/prisma"));
// create Service
const createService = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield prisma_2.default.bike.findUniqueOrThrow({
            where: {
                bikeId: data.bikeId,
            },
        });
        const serviceData = {
            bikeId: data.bikeId,
            serviceDate: data.serviceDate,
            description: data.description,
        };
        const result = yield prisma_2.default.serviceRecord.create({
            data: serviceData,
        });
        return result;
    }
    catch (err) {
        throw new Error("failed to create Service");
    }
});
// get All Service
const getAllService = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_2.default.serviceRecord.findMany();
    return result;
});
// get A Service
const getAService = (serviceId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_2.default.serviceRecord.findUnique({
        where: {
            serviceId,
        },
    });
    if (!result) {
        throw new Error("service not found");
    }
    return result;
});
/// update Service
const updateService = (serviceId, data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_2.default.$transaction((transactionClient) => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        yield transactionClient.serviceRecord.findUniqueOrThrow({
            where: { serviceId },
        });
        const updatedService = yield transactionClient.serviceRecord.update({
            where: { serviceId },
            data: {
                completionDate: (_a = data.completionDate) !== null && _a !== void 0 ? _a : new Date().toISOString(),
                status: prisma_1.ServiceStatus.done,
            },
        });
        return updatedService;
    }));
    return result;
});
// get Overdue Or Pending Services
const getOverdueOrPendingServices = () => __awaiter(void 0, void 0, void 0, function* () {
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    const result = yield prisma_2.default.serviceRecord.findMany({
        where: {
            status: {
                in: [prisma_1.ServiceStatus.pending, prisma_1.ServiceStatus.in_progress],
            },
            serviceDate: {
                lt: sevenDaysAgo,
            },
        },
    });
    return result;
});
exports.serviceService = {
    createService,
    getAllService,
    getAService,
    updateService,
    getOverdueOrPendingServices,
};
