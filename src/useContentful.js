import { createClient } from "contentful";

const useContentful = () => {
  const client = createClient({
    space: "y0konwto5otc",
    accessToken: "2G4-UZmmryQqeCWK67ugRssDQlSJIsfPbqa6PjxWMZw",
    host: "cdn.contentful.com",
  });

  const getRosterData = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "artists",
        select: "fields",
      });

      const sanitizedEntries = entries.items.map((item) => {
        const information = item.fields.information.fields;

        return {
          ...item.fields,
          //   information,
        };
      });

      return sanitizedEntries;
    } catch (error) {
      console.log(`Error fectching artists: ${error}`);
    }
  };
  return { getRosterData };
};

export default useContentful;
