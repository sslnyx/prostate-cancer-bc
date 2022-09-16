const url = "https://staging-api.prostatecancerbc.ca/graphql";
// const url = "http://api-pcf.test/graphql";


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

                grantYears(first: 100) {
                  nodes {
                    id
                    name
                    slug
                    description
                    grantees(first: 100) {
                      nodes {
                        title
                        granteeBio {
                          description
                          title
                          portfolioPicture {
                            sourceUrl
                            mediaDetails {
                              height
                            }
                          }
                          title
                        }
                      }
                    }
                  }
                }

                stories(first: 1000) {
                  nodes {
                    id
                    title
                    slug
                    story {
                      content
                      excerpt
                      location
                      featuredImage {
                        sourceUrl
                      }
                      storyGallery {
                        sourceUrl
                      }
                    }
                    storyHeadings {
                      description
                      headline
                      subheading
                    }
                  }
                }

                events(first: 1000) {
                  nodes {
                    id
                    title
                    slug
                    event {
                      description
                      date
                      featuredImage {
                        srcSet
                        sourceUrl
                      }
                      logo {
                        srcSet
                        sourceUrl
                      }
                      website
                      gallery {
                        id
                        srcSet
                      }
                      location
                    }
                  }
                }

                members(first: 1000) {
                  edges {
                    node {
                      id
                      title
                      memberTypes {
                        nodes {
                          id
                          name
                          parent {
                            node {
                              id
                              name
                            }
                          }
                        }
                      }
                      memberDescription {
                        professionalDesignation
                        biography
                        profilePicture {
                          sourceUrl
                        }
                      }
                      memberContact {
                        email
                        tel
                      }
                      committies {
                        committeeMembers {
                          title
                          name
                        }
                      }
                    }
                  }
                }
            }
        `,
    }),
  });
  const { data } = await res.json();
  // console.log(data)
  return data;
}


async function fetchStatic() {
  const res = await fetch("/static-data.json", {
    method: "GET",
  })

  return await res.json()
}

export { fetchApi, fetchStatic };
