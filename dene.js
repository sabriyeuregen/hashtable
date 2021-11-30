
let a=[]

function h(x){ //neye göre ekliyor ? ax+b
  return (8*x+5)%27
}
//hash tablea veri koyan fonk.k yeni veri v lokasyonu
function put(k,v){ 
  a[h(k)]=v //h(k)nın indeksi v dir
}
function get(k){ //k nın v sini göster
  return a[h(k)]
}

put(10,10201) // a dizisine eklendi 
put(1,45682)
put(100,75862)

console.log(get(10))
console.log(get(1))
console.log(get(100))