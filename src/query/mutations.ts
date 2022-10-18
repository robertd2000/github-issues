import { gql } from "@apollo/client";

export const ADD_REACTION = gql`
  mutation AddReaction($id: ID!, $content: ReactionContent!) {
    addReaction(input: { content: $content, subjectId: $id }) {
      reaction {
        id
      }
    }
  }
`;

export const REMOVE_REACTION = gql`
  mutation($id: ID!, $content: ReactionContent!) {
    removeReaction(input: { subjectId: $id, content: $content }) {
      clientMutationId
    }
  }
`;

export const CREATE_ISSUE = gql`
  mutation($repositoryId: ID!, $title: String!, $body: String) {
    createIssue(
      input: { repositoryId: $repositoryId, title: $title, body: $body }
    ) {
      clientMutationId
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation($id: ID!, $body: String!) {
    addComment(input: { subjectId: $id, body: $body }) {
      clientMutationId
    }
  }
`;

export const CLOSE_ISSUE = gql`
  mutation($id: ID!) {
    closeIssue(input: { issueId: $id }) {
      clientMutationId
    }
  }
`;

export const REOPEN_ISSUE = gql`
  mutation($id: ID!) {
    reopenIssue(input: { issueId: $id }) {
      clientMutationId
    }
  }
`;
