const setTime = () => {
  let newDate = new Date().toString();
  let newDateLength = newDate.length;
  return newDate.slice(0, newDateLength - 19);
};
let dateTime = setTime();

export const lastLoginTxt = `Last login: ${dateTime} on console`;
export const headLineTxt = `molju@molju-ui-MacBookPro ~ %`;
export const errorTxt = `zsh: command not found :`;
