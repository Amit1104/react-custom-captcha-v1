export const generateCaptcha = (
  length = 6,
  charsArray = "0123456789abcdefghijklmnopqrstuvwxyz"
) => {
  let captcha = [];
  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * charsArray.length);
    captcha.push(charsArray[index]);
  }
  return captcha.join("");
};

export const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};
