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
      continent
      result {
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
}


`;

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
    countries {
        country(country:"Ghana")
        
    }
}

`

export { getCountry, getGlobal, getGhana }