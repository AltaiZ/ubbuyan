import { ApolloClient, HttpLink, InMemoryCache, gql } from "@apollo/client";

export const revalidate = 1;
const ITEMS_PER_PAGE = 9;

const client = new ApolloClient({
  link: new HttpLink({
    uri: process.env.ERXES_API_URL,
    fetch,
    headers: {
      "x-app-token": process.env.ERXES_APP_TOKEN || "",
    },
  }),
  cache: new InMemoryCache(),
});

const GET_POSTS = gql`
  query cpPostList {
    cpPostList {
      posts {
        _id
        title
        summary
        image {
          url
        }
        categories {
          _id
          name
          code
        }
      }
    }
  }
`;

export default async function page({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  let posts: any[] = [];

  try {
    const { data } = await client.query({
      query: GET_POSTS,
      fetchPolicy: "no-cache",
    });

    const allPosts = data?.cpPostList?.posts || [];

    posts = allPosts.filter((post: any) =>
      Array.isArray(post?.categories) &&
      post.categories.some(
        (cat: any) =>
          cat?.name?.toLowerCase() === "news" ||
          cat?.code?.toLowerCase() === "news"
      )
    );
  } catch (e) {
    console.error("CMS PAGE ERROR:", e);
    posts = [];
  }

  const reversedArticles = [...posts].reverse();
  const currentPage = parseInt(searchParams.page || "1") || 1;
  const totalPages = Math.max(
    1,
    Math.ceil(reversedArticles.length / ITEMS_PER_PAGE)
  );
  const safeCurrentPage = Math.min(Math.max(currentPage, 1), totalPages);
  const startIndex = (safeCurrentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedArticles = reversedArticles.slice(startIndex, endIndex);

  return (
    <div id="content" style={{ display: "block" }}>
      <div className="blog_cat container wrapper h_blog">
        <h1>Мэдлэг, мэдээлэл</h1>
        <p>
          Сүүлийн үеийн мэдээлэл, мэдлэг, арга хэмжээ зэргийг та эндээс авах
          боломжтой.
        </p>

        <ul
          className="nav nav-tabs centered blog_buttons hidden-xs"
          role="tablist"
        >
          <li role="presentation" className="active">
            <a
              href="#medee_medeelel"
              aria-controls="medee_medeelel"
              role="tab"
              data-toggle="tab"
            >
              Мэдээ мэдээлэл
            </a>
          </li>
          <li role="presentation">
            <a href="/medee-medeelel/arag-hemjee">Арга хэмжээ</a>
          </li>
          <li role="presentation">
            <a href="/medee-medeelel/medlegiin-san">Мэдлэгийн сан</a>
          </li>
          <li role="presentation">
            <a href="/medee-medeelel/zurhaich-lam-nar">Зурхайч лам нар</a>
          </li>
          <li role="presentation">
            <a href="/medee-medeelel/tugemel-asuult">Түгээмээл асуулт</a>
          </li>
          <li role="presentation">
            <a href="/huuli-erh-zui">Хууль эрх зүй</a>
          </li>
        </ul>

        <br />

        <div className="tab-content">
          <div
            role="tabpanel"
            className="sub_tab fade tab-pane in active"
            id="medee_medeelel"
          >
            {paginatedArticles.length > 0 ? (
              paginatedArticles.map((item) => (
                <div className="pc_tab col-md-3 col-sm-6" key={item._id}>
                  <a href={`/medee-medeelel/${item._id}`}>
                    <div
                      className="p_img"
                      style={{
                        background: `url(https://ulaanbaatarbuyanmn.next.erxes.io/gateway/read-file?key=${item?.image?.url}) no-repeat center`,
                        backgroundSize: "cover",
                        minHeight: "220px",
                      }}
                    >
                      <div className="overlay">
                        <img
                          className="c_arrow"
                          src="/static/sites/ulaanbaatarbuyannew/default/images/sum-white.png"
                        />
                      </div>
                    </div>

                    <div className="garchig">
                      <h4>{item.title}</h4>
                      <i>{item.summary}</i>
                    </div>
                  </a>
                </div>
              ))
            ) : (
              <div className="col-md-12">
                <p>Пост олдсонгүй</p>
              </div>
            )}

            <div className="clearfix" />
          </div>

          {totalPages > 1 && (
            <nav>
              <ul className="pagination">
                {Array.from({ length: totalPages }).map((_, index) => {
                  const pageNumber = index + 1;
                  return (
                    <li
                      key={pageNumber}
                      className={pageNumber === safeCurrentPage ? "active" : ""}
                    >
                      <a href={`?page=${pageNumber}`}>{pageNumber}</a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          )}
        </div>
      </div>

      <div className="map_new" style={{ display: "none" }}>
        <div id="map-canvas">
          <div style={{ height: "100%", width: "100%" }}>
            <div style={{ overflow: "hidden" }} />
          </div>
        </div>
      </div>
    </div>
  );
}