import getPosts from "@/services/getPosts";

export async function GET(request: Request) {
    return Response.json(getPosts());
}
