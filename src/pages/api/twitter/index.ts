import { getMediaURL } from "../../../utils";

export async function get({ request }) {
  const url = new URL(request.url);
  const json = await getMediaURL(url.searchParams.get('url') ?? '');

  return new Response(JSON.stringify(json), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      'Cache-Control': 'public, max-age=604800'
    }
  });
}