export const getColorByNumber = (num) => {
  switch (num) {
    case 1:
      return "165,144,90";
    case 2:
      return "138,41,36";
    case 3:
      return "115,70,38";
    case 4:
      return "73,46,83";
    case 5:
      return "173,16,83";
    case 6:
      return "103,96,23";
    case 7:
      return "0,156,103";
    case 8:
      return "13,26,143";
    default:
      return "0,0,0";
  }
};


export const getPropertyByColor = (color) => {
  return {
    backgroundColor: `rgb(${color})`,
    background: `radial-gradient( circle,rgba(${color})0%, rgba(17, 24, 34, 1) 100% )`,
  };
};
