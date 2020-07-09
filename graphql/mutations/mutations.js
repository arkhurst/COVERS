import gql from 'graphql-tag'

const LogInUser = gql`
      mutation ($phone:String!) {
          loginUser (
              input: {
                  phone: $phone
              }
          ){
              success,
             
          } 
      }
`;

const validateUser = gql`
   mutation($phone :String!, $otp:String){
       validateLoginUser(input: { phone: $phone, otp: $otp}){
           mobileToken
       }
   }
`;

export  {
    LogInUser,
    validateUser
}
