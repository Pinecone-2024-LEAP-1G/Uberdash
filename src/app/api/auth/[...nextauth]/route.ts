import { handlers } from "@/lib/auth";
import { connectToMongoDB } from "@/lib/db";

connectToMongoDB();
export const { GET, POST } = handlers;
