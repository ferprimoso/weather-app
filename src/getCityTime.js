const getCitytime = (timeoffset) => {
  const date = new Date();
  date.setMinutes(date.getMinutes() + date.getTimezoneOffset() * 1);
  date.setSeconds(date.getSeconds() + timeoffset);

  console.log(date);
  return date;
};

export default getCitytime;
