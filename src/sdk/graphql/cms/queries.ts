import { gql } from "@apollo/client";

const cmsPostList = gql`
  query PostList(
    $type: String
    $featured: Boolean
    $categoryIds: [String]
    $searchValue: String
    $status: PostStatus
    $tagIds: [String]
    $sortField: String
    $sortDirection: String
  ) {
    cpPostList(
      featured: $featured
      type: $type
      categoryIds: $categoryIds
      searchValue: $searchValue
      status: $status
      tagIds: $tagIds
      sortField: $sortField
      sortDirection: $sortDirection
    ) {
      totalCount
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
      posts {
        _id
        slug
        type
        customPostType {
          _id
          code
          label
          __typename
        }
        authorKind
        author {
          ... on User {
            _id
            username
            email
            details {
              fullName
              shortName
              avatar
              firstName
              lastName
              middleName
              __typename
            }
            __typename
          }

          __typename
        }
        categoryIds
        categories {
          _id
          name
          slug
          __typename
        }
        featured
        status
        tagIds

        authorId
        content
        excerpt
        createdAt
        autoArchiveDate
        scheduledDate
        thumbnail {
          url
          __typename
        }
        title
        images {
          url
          type
          name
          __typename
        }
        customFieldsData
        updatedAt
        __typename
      }
      __typename
    }
  }
`;

const queries = {
  cmsPostList,
};

export default queries;
