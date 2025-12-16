import { gql } from "@apollo/client";

const articleDetail = gql`
  query kbArticleDetail($id: String!) {
    knowledgeBaseArticleDetail(_id: $id) {
      _id
      title
      summary
      content
      createdUser {
        _id
        username
        details {
          avatar
          fullName
        }
      }
      attachments {
        url
      }
      image {
        url
      }
      createdDate
    }
  }
`;

const articles = gql`
  query ($page: Int, $perPage: Int, $categoryIds: [String]) {
    knowledgeBaseArticles(
      page: $page
      perPage: $perPage
      categoryIds: $categoryIds
    ) {
      _id
      title
      code
      summary
      content
      createdUser {
        _id
        username
        details {
          avatar
          fullName
        }
      }
      attachments {
        url
      }
      image {
        url
      }
      createdDate
    }
  }
`;
const kbTopicDetail = gql`
  query knowledgeBaseTopicDetail($_id: String!) {
    knowledgeBaseTopicDetail(_id: $_id) {
      _id
      title
      code
      description
      brand {
        _id
        name
      }
      categories {
        _id
        title
        description
        icon
        code
        articles {
          _id
          content
          modifiedDate
          createdDate
          code
          title
          summary
          viewCount
          status
          reactionChoices
          categoryId
          image {
            url
          }
          attachments {
            url
            type
          }
          createdUser {
            _id
            username
            email
            details {
              avatar
              fullName
              firstName
            }
          }
        }
      }
    }
  }
`;

const kbCategoryId = gql`
  query knowledgeBaseCategoryId($_id: String!) {
    knowledgeBaseCategoryDetail(_id: $_id) {
      _id
    }
  }
`;

const products = gql`
  query products(
    $type: String
    $categoryId: String
    $tag: String
    $status: String
    $searchValue: String
    $vendorId: String
    $brand: String
    $perPage: Int
    $page: Int
    $ids: [String]
    $excludeIds: Boolean
    $pipelineId: String
    $boardId: String
    $segment: String
    $segmentData: String
    $image: String
  ) {
    products(
      type: $type
      categoryId: $categoryId
      tag: $tag
      status: $status
      searchValue: $searchValue
      vendorId: $vendorId
      brand: $brand
      perPage: $perPage
      page: $page
      ids: $ids
      excludeIds: $excludeIds
      pipelineId: $pipelineId
      boardId: $boardId
      segment: $segment
      segmentData: $segmentData
      image: $image
    ) {
      _id
      name
      shortName
      type
      code
      categoryId
      vendorId
      scopeBrandIds
      status
      description
      unitPrice
      barcodes
      variants
      barcodeDescription
      getTags {
        _id
        name
        colorCode
      }
      tagIds
      createdAt
      category {
        _id
        code
        name
      }
      attachment {
        url
        name
        size
        type
      }
      attachmentMore {
        url
        name
        size
        type
      }
      uom
      subUoms
    }
  }
`;

const productCategories = gql`
  query productCategories($status: String, $brand: String) {
    productCategories(status: $status, brand: $brand) {
      _id
      name
      order
      code
      parentId
      scopeBrandIds
      description
      status
      meta
      attachment {
        name
        url
        type
        size
      }
      isRoot
      productCount
      maskType
      mask
      isSimilarity
      similarities
    }
  }
`;

const productDetail = gql`
  query productDetail($_id: String) {
    productDetail(_id: $_id) {
      _id
      name
      shortName
      type
      code
      categoryId
      vendorId
      vendor {
        _id
        avatar
        businessType
        code
        createdAt
        customFieldsData
        description
        emails
        industry
        isSubscribed
        links
        location
        mergedIds
        modifiedAt
        names
        ownerId
        parentCompanyId
        phones
        plan
        primaryEmail
        primaryName
        primaryPhone
        score
        size
        tagIds
        trackedData
        website
      }
      scopeBrandIds
      status
      description
      unitPrice
      barcodes
      variants
      barcodeDescription
      getTags {
        _id
        name
        colorCode
      }
      tagIds
      createdAt
      category {
        _id
        code
        name
      }
      attachment {
        url
        name
        size
        type
      }
      attachmentMore {
        url
        name
        size
        type
      }
      uom
      subUoms
      taxType
      taxCode
      customFieldsData
    }
  }
`;

const fieldGroups = gql`
  query fieldsGroups(
  $contentType: String!
  $isDefinedByErxes: Boolean
  $config: JSON
) {
  fieldsGroups(
    contentType: $contentType
    isDefinedByErxes: $isDefinedByErxes
    config: $config
  ) {
    name
    _id
    description
    code
    order
    isVisible
    isVisibleInDetail
    contentType
    isDefinedByErxes
    logicAction
    logics {
      fieldId
      logicOperator
      logicValue
      __typename
    }
    isMultiple
    alwaysOpen
    parentId
    config
    lastUpdatedUser {
      details {
        fullName
        __typename
      }
      __typename
    }
    fields {
      type
      text
      canHide
      validation
      regexValidation
      options
      isVisibleToCreate
      locationOptions {
        lat
        lng
        description
        __typename
      }
      objectListConfigs {
        key
        label
        type
        __typename
      }
      groupId
      searchable
      showInCard
      isRequired
      _id
      description
      code
      order
      isVisible
      isVisibleInDetail
      contentType
      isDefinedByErxes
      logicAction
      logics {
        fieldId
        logicOperator
        logicValue
        __typename
      }
      lastUpdatedUser {
        details {
          fullName
          __typename
        }
        __typename
      }
      logicAction
      logics {
        fieldId
        logicOperator
        logicValue
        __typename
      }
      relationType
      isDisabled
      __typename
    }
    __typename
  }
}
`
const customersMain = gql`
  query customersMain(
  $page: Int
  $perPage: Int
  $segment: String
  $tag: String
  $type: String
  $ids: [String]
  $excludeIds: Boolean
  $searchValue: String
  $autoCompletionType: String
  $autoCompletion: Boolean
  $brand: String
  $integration: String
  $form: String
  $startDate: String
  $endDate: String
  $leadStatus: String
  $sortField: String
  $sortDirection: Int
  $dateFilters: String
  $segmentData: String
  $emailValidationStatus: String
  $registrationNumber: String
  $mainType: String
  $mainTypeId: String
  $relType: String
  $isRelated: Boolean
  $isSaved: Boolean
) {
  customersMain(
    page: $page
    perPage: $perPage
    segment: $segment
    tag: $tag
    type: $type
    ids: $ids
    excludeIds: $excludeIds
    autoCompletionType: $autoCompletionType
    autoCompletion: $autoCompletion
    searchValue: $searchValue
    brand: $brand
    integration: $integration
    form: $form
    startDate: $startDate
    endDate: $endDate
    leadStatus: $leadStatus
    sortField: $sortField
    sortDirection: $sortDirection
    dateFilters: $dateFilters
    segmentData: $segmentData
    emailValidationStatus: $emailValidationStatus
    registrationNumber: $registrationNumber
    conformityMainType: $mainType
    conformityMainTypeId: $mainTypeId
    conformityRelType: $relType
    conformityIsRelated: $isRelated
    conformityIsSaved: $isSaved
  ) {
    list {
      _id
      firstName
      middleName
      lastName
      avatar
      sex
      birthDate
      primaryEmail
      emails
      primaryPhone
      phones
      state
      visitorContactInfo
      modifiedAt
      position
      department
      leadStatus
      hasAuthority
      description
      isSubscribed
      code
      emailValidationStatus
      registrationNumber
      phoneValidationStatus
      score
      isOnline
      lastSeenAt
      sessionCount
      links
      ownerId
      owner {
        _id
        details {
          fullName
          __typename
        }
        __typename
      }
      integrationId
      createdAt
      remoteAddress
      location
      customFieldsData
      trackedData
      tagIds
      getTags {
        _id
        name
        colorCode
        __typename
      }
      __typename
    }
    totalCount
    __typename
  }
}
` 

const customerDetail = gql`
  query customerDetail($_id: String!) {
    customerDetail(_id: $_id) {
      _id
      firstName
      middleName
      lastName
      avatar
      sex
      birthDate
      primaryEmail
      emails
      primaryPhone
      phones
      state
      visitorContactInfo
      modifiedAt
      position
      department
      leadStatus
      hasAuthority
      description
      isSubscribed
      code
      emailValidationStatus
      registrationNumber
      phoneValidationStatus
      score
      isOnline
      lastSeenAt
      sessionCount
      links
      ownerId
      owner {
        _id
        details {
          fullName
          __typename
        }
        __typename
      }
      integrationId
      createdAt
      remoteAddress
      location
      customFieldsData
      trackedData
      tagIds
      getTags {
        _id
        name
        colorCode
        __typename
      }
      urlVisits
      integration {
        kind
        name
        isActive
        __typename
      }
      companies {
        _id
        primaryName
        website
        __typename
      }
      __typename
    }
  }
`

const queries = {
  articleDetail,
  articles,
  kbCategoryId,
  kbTopicDetail,
  products,
  productCategories,
  productDetail,
  fieldGroups,
  customersMain,
  customerDetail,
};

export default queries;
