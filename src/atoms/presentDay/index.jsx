import React from 'react';

const PresentDay = () => {
  const monts = ["янв", "фев", "мар", "апр", "май", 
                "июн", "июл", "авг", "сен", "окт", 
                "ноя", "дек"];
  let cur_date = new Date();
  let formated_date = cur_date.getDate() + "-" + monts[cur_date.getMonth()] 
  + "-" + cur_date.getFullYear() + " " + cur_date.getHours() + ":" 
  + cur_date.getMinutes() + ":" + cur_date.getSeconds();
  return formated_date.toString();
}

export default PresentDay;