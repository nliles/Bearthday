
import moment from 'moment';
import _sortedIndex from 'lodash/sortedIndex';

export const CURRENT_DATE = moment().format("YYYY-MM-DD");
const CURRENT_YEAR = new Date().getFullYear();
const PREVIOUS_YEAR = CURRENT_YEAR - 1;

/**
 * Format a date using moment.js
 *
 */
export function formatDate(date, format) {
  return moment(date).format(format);
}

// Pluralize a term if needed.
export function pluralize(numItems, singularTerm, pluralTerm) {
  if (!pluralTerm) pluralTerm = singularTerm + 's';

  return !numItems || numItems > 1 ? pluralTerm : singularTerm;
}

// Format new year
const formatYear = (year, monthDay) => year + '-' + monthDay;

// Get most recent ocurrence of a date
export function getRecentDate(date) {
  if (!date) return null;
  const monthDay = formatDate(date, 'MM-DD') //remove the year the user entered
  let formattedDate =  formatYear(CURRENT_YEAR, monthDay); //Add current year in correct format

  // if next birthday of current year is in the future, use past year
  if (moment(formattedDate).isAfter(CURRENT_DATE)) {
    formattedDate = formatYear(PREVIOUS_YEAR, monthDay);
  }

  return formattedDate;
}

// Find a date in an array
export function findDate(dates, date) {
  if (!dates.length || ! date) return null;
  const sorted = dates.slice().reverse();
  let index = _sortedIndex(sorted, date);
  // If there is no next index, use previous index;
  if (!sorted[index]) index = index - 1;
  return sorted[index];
}
