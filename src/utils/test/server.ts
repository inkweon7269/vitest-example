import {setupServer} from "msw/node";
import {handlers} from "@/utils/mock/handlers";

export const server = setupServer(...handlers);