import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "7wmkg446",
  dataset: "production",
  apiVersion: "2023-07-07",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);
console.log("builder, client", builder, client);
export const urlFor = (source) => builder.image(source);
