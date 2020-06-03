import { gql } from 'apollo-boost';

const getCountry = gql`
query {
    countries {
        country
        countryInfo {
            _id
            lat
            long
            flag
            iso3
            iso2
        }
        
    }
  }
`

const getGlobal = gql`
query{
    globalTotal {
        affectedCountries
        tests
        cases
        todayCases
        deaths
        todayDeaths
        recovered
        active
        critical
        casesPerOneMillion
        deathsPerOneMillion
        testsPerOneMillion
        updated
    }
  }
  
`
const getGhana = gql`
query {
        country(name:"Ghana"){
            country
            result{
                cases
                recovered
                deaths
                updated
                active
                critical
                tests
                updated
            }
        }
        
    }
`

export { getCountry, getGlobal, getGhana }