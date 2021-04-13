/* Date Unix to TimeZone */
export const getLocalDate = timeZone => {
  const dateFormat = new Intl.DateTimeFormat('ru-RU', {
    timeZone,
    weekday: 'short',
    day: '2-digit',
    month: 'short',
  });

  return unixTime => dateFormat.format(unixTime * 1000).slice(0, -1);
};

/* Time Unix to TimeZone */
export const getLocalTime = timeZone => {
  const dateFormat = new Intl.DateTimeFormat('ru-RU', {
    timeZone,
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });

  return unixTime => dateFormat.format(unixTime * 1000);
}