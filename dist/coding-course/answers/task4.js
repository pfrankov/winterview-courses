module.exports =
    `function check (array, number) {
  const comp = {};
  for(let i=0; i < array.length; i++){
    if(comp[array[i]] >= 0){
      return true;
    }
    comp[number - array[i]] = i;
  }
  return false;
}`;
