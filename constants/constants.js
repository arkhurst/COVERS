import numeral from 'numeral';
import moment from 'moment';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

function addCommas(value) {
  return numeral(value).format('0,0');
}

function covertDateTime(value) {
  return moment(value).format('ddd, MMM DD, YYYY');
}

export { addCommas, covertDateTime, width, height };