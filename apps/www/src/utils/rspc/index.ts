import { createClient, FetchTransport } from "@rspc/client";
import type { Procedures } from "./bindings";

export const client = createClient<Procedures>({
  transport: new FetchTransport("http://localhost:4000/rspc"),
});

