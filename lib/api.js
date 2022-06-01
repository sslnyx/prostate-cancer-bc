const url = "http://api-pcf.test/graphql";

async function fetchApi() {
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
            {
                pages(first: 100) {
                    nodes {
                        frontPageHeroSlide {
                          frontPageHeroSlide {
                            learnMore
                            title
                            description
                            image {
                              sourceUrl
                            }
                          }
                        }
                        uri
                    }
                }
            }
        `,
    }),
  });

  const { data } = await res.json();

  return data;
}

export { fetchApi };
