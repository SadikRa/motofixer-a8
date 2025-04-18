"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceRouter = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const service_validation_1 = require("./service.validation");
const service_controller_1 = require("./service.controller");
const router = express_1.default.Router();
// create service
router.post("/", (0, validateRequest_1.default)(service_validation_1.ServiceRecordValidationSchema), service_controller_1.serviceController.createService);
// get All service
router.get("/", service_controller_1.serviceController.getAllService);
// get All service
router.get("/:serviceId", service_controller_1.serviceController.getAService);
// updated service
router.put("/:serviceId/complete", (0, validateRequest_1.default)(service_validation_1.UpdateServiceStatusSchema), service_controller_1.serviceController.updateService);
// get Overdue Or Pending Services
router.get("/status", service_controller_1.serviceController.getOverdueOrPendingServices);
exports.serviceRouter = router;
