import { createClient } from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";

const PROJECT_ID = "ovreivo5";

const sanityConfig = createClient({
    projectId: PROJECT_ID,
    dataset: "production",
    useCdn: true,
    apiVersion: '2022-03-07',
});

const builder = ImageUrlBuilder(sanityConfig);

export const Urlfor = (source) => builder.image(source);

export default sanityConfig;