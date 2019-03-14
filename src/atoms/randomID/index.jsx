// численная длинна ID
const randomNumber = (length) => {
  return Math.floor(Math.random() * length)
}

//  генерация псевдо-случайного ID
const generateID = (length) => {
  const possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let text = "";
  
  for (let i = 0; i < length; i++) {
    text += possible.charAt(randomNumber(possible.length));
  }
  
  return text;
}

export default generateID;