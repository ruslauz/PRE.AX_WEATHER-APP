/* Icon URL */
const getIcon = size => id =>  `http://openweathermap.org/img/wn/${id}@${size}x.png`;
export const getSmallIcon = getIcon(2);
export const getLargeIcon = getIcon(4);
