

const CountryQuery = `
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

const getCountry = `
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

const getGlobal = `
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
const getGhana = `
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

export { getCountry, getGlobal, getGhana,CountryQuery }