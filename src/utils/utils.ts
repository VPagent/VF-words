

// export const toRandomIndexes = (array: any[]):any[] => {
//   for (let i = array.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1)); 
//     [array[i], array[j]] = [array[j], array[i]]; 
//   }
//   return array;
// }


export const firstSymbolFormatter = (string: string): string => {
    if (string != null) {
      // console.log("string", string);
      return string.replace(string[0], string[0].toUpperCase());
    }
    return "";
};
  
export const findPercentage = (allNum: number, trulyNum: number): number => {
    
  const percent = (100 * trulyNum) / allNum;

  return percent;
}