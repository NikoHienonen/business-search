import axios from 'axios';

export default function GetBusinesses(date, callback) {
  axios.get(`http://avoindata.prh.fi/tr/v1?totalResults=false&maxResults=1000&resultsFrom=0&companyRegistrationFrom=${date}&companyRegistrationTo=${date}`)
  .then((result) => {
    const filteredResult = result.data.results.filter(business => business.registrationDate === date);
    callback(filteredResult);
  }).catch((error) => {
    callback('error');
  });
}
