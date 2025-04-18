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
exports.bikeService = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
// create Bike
const createBike = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield prisma_1.default.customer.findUniqueOrThrow({
            where: {
                customerId: data.customerId,
            },
        });
        const bikeData = {
            brand: data.brand,
            model: data.model,
            year: data.year,
            customerId: data.customerId,
        };
        const result = yield prisma_1.default.bike.create({
            data: bikeData,
        });
        return result;
    }
    catch (err) {
        throw new Error("failed to create Bike");
    }
});
// get All Bike
const getAllBike = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.bike.findMany();
    return result;
});
// get A Bike
const getABike = (bikeId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.bike.findUnique({
        where: {
            bikeId,
        },
    });
    if (!result) {
        throw new Error("Bike not found");
    }
    return result;
});
exports.bikeService = {
    createBike,
    getAllBike,
    getABike,
};
