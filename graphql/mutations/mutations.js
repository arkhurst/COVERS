import gql from 'graphql-tag'

const LogInUser = gql `
      mutation ($phone :String!) {
          loginUser (
              input: {
                  phone: $phone
              }
          ){
              success,
              message
          } 
      }
`

const validatingLogInUser = gql `
      mutation {
          validateLoginUser(
              input: {
                  phone: "0242382345"
                  otp: "2421"
              }
          ) {
               mobileToken
          }
      }
`

const editUser = gql `
      mutation {
          editUserProfile(
              input:{
                  age: 12
                #   other values can be added to be edited
              }
          ) {
              age
          }
      }
`

export default {
    LogInUser,
    validatingLogInUser
}
