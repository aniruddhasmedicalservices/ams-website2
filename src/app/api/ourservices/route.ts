import { ourservices } from "@/app/data/data";

export async function GET() {
    return Response.json(ourservices);
}