const EARLIEST_ARRIVAL_TIME = 5;
const MIDNIGHT = 12;

const hourNumber = time => (time < EARLIEST_ARRIVAL_TIME) ? (time + MIDNIGHT) : time;

const buildHoursArray = (departure, arrival) => {
  return Array(departure - arrival).fill().map((_, index) => arrival + index);
};

const hourlyRate = (hour, bedtime) => {
  if (hour < bedtime) {
    return 10;
  }

  if (hour < MIDNIGHT) {
    return 6;
  }

  return 8;
};

/*
 * Calculate the babysitter's pay
 * @param {number} arrival - the babysitter's arrival time
 * @param {number} departure - the babysitter's departure time
 * @param {number} bedtime - the kids' bedtime
 * @returns {number} - the amount the babysitter should be paid
 */
export const calculatePay = ({ arrival, departure, bedtime }) => {
  const hours = buildHoursArray(hourNumber(departure), hourNumber(arrival));

  return hours.reduce((result, hour) => {
    return result + hourlyRate(hour, bedtime);
  }, 0);
}


export default calculatePay;
