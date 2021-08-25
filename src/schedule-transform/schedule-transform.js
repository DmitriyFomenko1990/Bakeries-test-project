export function createSchedule (schedule) {
  const dayOrder = [
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
    'sunday'];

  let scheduleArray = [];
  let indexCurrentDay = 0;
  let firstSimilarDay = '';

  const isSimilarDays = (currentDay, nextDay) => {
    return (schedule[nextDay].order_before === schedule[currentDay].order_before &&
      schedule[nextDay].days_before_order === schedule[currentDay].days_before_order &&
      schedule[nextDay].day_off === schedule[currentDay].day_off)
  };
  const daysBeforeOrder = (indexCurrentDay, currentDay) => {
    const indexDayBeforeOrder = (indexCurrentDay - schedule[currentDay].days_before_order > 0)
      ? indexCurrentDay - schedule[currentDay].days_before_order
      : indexCurrentDay - schedule[currentDay].days_before_order + 7
    return `on ${dayOrder[indexDayBeforeOrder]}`
  };
  const time = (currentDay) => {
    const hours = Math.floor(schedule[currentDay].order_before / 60);
    const minutes = (schedule[currentDay].order_before % 60).toString().padStart(2, '0');
    return `before ${hours}:${minutes}`
  };

  while (indexCurrentDay < 7) {
    let currentDay = dayOrder[indexCurrentDay];
    let nextDay = dayOrder[indexCurrentDay + 1];
    if (schedule[currentDay].day_off) {
      if (indexCurrentDay < 6 && isSimilarDays(currentDay, nextDay)) {
        firstSimilarDay = currentDay;
        while (indexCurrentDay < 6 && isSimilarDays(currentDay, nextDay)) {
          indexCurrentDay++;
          currentDay = dayOrder[indexCurrentDay];
          nextDay = dayOrder[indexCurrentDay + 1];
        }
        scheduleArray.push(`For ${firstSimilarDay.slice(0, 3)} - ${currentDay.slice(0, 3)}: closed`);
        indexCurrentDay++;
      } else {
        scheduleArray.push(`For ${currentDay}: closed`);
        indexCurrentDay++;
      }
    } else {
      const prefix = (schedule[currentDay].days_before_order > 1)
        ? 's'
        : ''
      if (isSimilarDays(currentDay, nextDay)) {
        firstSimilarDay = currentDay;
        while (indexCurrentDay < 6 && isSimilarDays(currentDay, nextDay)) {
          indexCurrentDay++;
          currentDay = dayOrder[indexCurrentDay];
          nextDay = dayOrder[indexCurrentDay + 1];
        }
        scheduleArray.push(`For ${firstSimilarDay.slice(0, 3)} - ${currentDay.slice(0, 3)}: ${time(currentDay)}, ${schedule[currentDay].days_before_order} day${prefix} before`)
        indexCurrentDay++;
      } else {
        scheduleArray.push(`For ${currentDay}: ${time(currentDay)}, ${daysBeforeOrder(indexCurrentDay, currentDay)}`)
        indexCurrentDay++;
      }
    }
  }
  return scheduleArray
}
