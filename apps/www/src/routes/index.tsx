import type { DocumentHead } from "@builder.io/qwik-city";
import { component$ } from "@builder.io/qwik";
import { loader$ } from "@builder.io/qwik-city";
import { client } from "../utils/rspc";

export const useGetVersion = loader$(() => "0.12");

const useVersion = loader$(async () => {
  return client.query(["version"]);
});

export default component$(() => {
  const version = useVersion();
  return <div>{version.value}</div>;
});

export const head: DocumentHead = {
  title: "Waitlist",
  meta: [
    {
      name: "description",
      content: "Create a waitlist for your product",
    },
  ],
};
