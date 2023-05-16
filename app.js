var data = [null, 123, undefined, null, 'qwerty', 34, 65, undefined, null, null, 43, 'aerg', 'пкцйк', null, 'uioo']
var result = {}
data.forEach(i => {
  var iType = typeof i
  if (result.hasOwnProperty(iType)) {
    result[iType].push(i);
  } 
  else {
    result[iType] = [i]
  }
});
var sort = Object.keys(result).sort((a, b) => result[b].length - result[a].length)
sort.map(key => {
  console.log(`${key}:`, result[key])
})
