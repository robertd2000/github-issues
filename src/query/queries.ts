import { gql } from "@apollo/client";

export const GET_REPOSITORY_ISSUES = gql`
  query GetRepos(
    $name: String!
    $owner: String!
    $field: IssueOrderField!
    $direction: OrderDirection!
    $states: [IssueState!]
  ) {
    repository(name: $name, owner: $owner) {
      id
      createdAt
      issues(
        first: 100
        orderBy: { field: $field, direction: $direction }
        states: $states
      ) {
        edges {
          node {
            id
            title
            closed
            closedAt
            createdAt
            updatedAt
            number
            comments {
              totalCount
            }
            author {
              login
              avatarUrl
              url
              resourcePath
            }
            reactions(first: 10) {
              edges {
                node {
                  id
                  content
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_REPOSITORY_ISSUE = gql`
  query GetRepo($name: String!, $owner: String!, $id: Int!) {
    repository(name: $name, owner: $owner) {
      createdAt
      issue(number: $id) {
        id
        title
        number
        createdAt
        updatedAt
        closed
        bodyHTML
        closedAt
        comments(orderBy: { direction: ASC, field: UPDATED_AT }, first: 100) {
          totalCount
          edges {
            node {
              author {
                login
                avatarUrl
                url
                resourcePath
              }
              body
              bodyHTML
              createdAt
              id
              issue {
                id
                url
                title
              }
              repository {
                id
                url
                name
              }
              updatedAt
              url
              reactions(first: 10) {
                edges {
                  node {
                    id
                    content
                    createdAt
                    user {
                      id
                      login
                      url
                    }
                  }
                }
              }
            }
          }
        }
        author {
          login
          avatarUrl
          url
          resourcePath
        }
        bodyHTML
        reactions(first: 10) {
          edges {
            node {
              id
              content
            }
          }
        }
      }
    }
  }
`;

export const GET_AUTHENTICATED_USER = gql`
  query {
    viewer {
      login
    }
  }
`;
