"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const _1 = __importDefault(require("./"));
const _2 = __importDefault(require("./"));
const signUp_1 = require("./signUp");
const routes = express_1.Router();
routes.use('/', _1.default);
routes.use('/', _2.default);
routes.use('/', signUp_1.signUp);
exports.default = routes;
