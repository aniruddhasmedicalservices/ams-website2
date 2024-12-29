import { blog } from "../../data/data";

export async function GET() {
    return Response.json(blog);
}