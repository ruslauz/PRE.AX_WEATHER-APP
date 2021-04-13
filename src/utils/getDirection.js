/* Deg to Compass */
export const getDirection = degree => {
  const directions = ['С', 'СВ', 'В', 'ЮВ', 'Ю', 'ЮЗ', 'З', 'СЗ', 'С'];
  return directions[Math.round(degree / 45)];
};