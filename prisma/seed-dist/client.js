"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = void 0;
var client_1 = require("@prisma/client");
var prisma_paginate_1 = require("prisma-paginate");
var prisma = new client_1.PrismaClient().$extends(prisma_paginate_1.default);
exports.prisma = prisma;
