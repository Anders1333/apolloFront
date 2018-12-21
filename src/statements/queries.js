import gql from "graphql-tag";

export const GET_ALL_USERS = gql`
   {
    getUsers {
      username
    }
  }
`;

export const GET_ALL_POSITIONS = gql`
   {
    getPositions {
      user
      created
      loc {
        coordinates
      }
    }
  }
`;

export const GET_ALL_LOCATIONBLOGS = gql`
   {
    getLocationBlogs {
      info
      likedBy
    }
  }
`;

export const FIND_USER_BY_USERNAME = gql`
query FindUserByUsername($username: String!) {
  findUserByUsername(username: $username) {
    username
    firstname
    lastname
  }
}
`