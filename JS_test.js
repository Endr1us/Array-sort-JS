let arr = [
  { name: "Aotugygoe", close: ["Uhntmsm", "Tczgxpjjj"] },
  { name: "Avlojbs", close: ["Pmswbqdtw", "Ppaehhdl"] },
  { name: "Baoxspz", close: ["Xorfyf", "Nfxibqewp"] },
  { name: "Bazpscaxb", close: ["Eimcdbza", "Ufdgsw"] },
  { name: "Bgtscsii", close: ["Nxwacd", "Itmpaio"] },
  { name: "Bmjolejuz", close: ["Kassnimqh", "Ssjgpuwp"] },
  { name: "Cxospeps", close: ["Tmsmcxyg", "Uhntmsm"] },
  { name: "Dkogmrf", close: ["Sbevkn", "Jcekzziny"] },
  { name: "Dkrajqert", close: ["Rbrely", "Ssjgpuwp"] },
  { name: "Eimcdbza", close: ["Bazpscaxb", "Xavftugk"] },
  { name: "Ezwwdfd", close: ["Ytfil", "Nfxibqewp"] },
  { name: "Ffgyex", close: ["Nkhpmgjqf", "Igbxq"] },
  { name: "Fkpjh", close: ["Ytfil", "Itmpaio"] },
  { name: "Fqvtnynx", close: ["Jcekzziny", "Hpgemo"] },
  { name: "Hpgemo", close: ["Yrewn", "Fqvtnynx"] },
  { name: "Igbxq", close: ["Ffgyex", "Pmswbqdtw"] },
  { name: "Imdhxajx", close: ["Kjftx", "Uhhyz"] },
  { name: "Itmpaio", close: ["Bgtscsii", "Fkpjh"] },
  { name: "Jbktfpa", close: ["Oayyy", "Xorfyf"] },
  { name: "Jcekzziny", close: ["Dkogmrf", "Fqvtnynx"] },
  { name: "Kassnimqh", close: ["Nprysne", "Bmjolejuz"] },
  { name: "Kjftx", close: ["Imdhxajx", "Quhprh"] },
  { name: "Nfxibqewp", close: ["Baoxspz", "Ezwwdfd"] },
  { name: "Njpgme", close: ["Ufdgsw", "Orioqcwz"] },
  { name: "Nkhpmgjqf", close: ["Xaohdx", "Ffgyex"] },
  { name: "Nprysne", close: ["Tczgxpjjj", "Kassnimqh"] },
  { name: "Nxwacd", close: ["Tdbnytkym", "Bgtscsii"] },
  { name: "Oanofefjr", close: ["Tdbnytkym", "Xavftugk"] },
  { name: "Oayyy", close: ["Vpptwq", "Jbktfpa"] },
  { name: "Orioqcwz", close: ["Njpgme", "Uhhyz"] },
  { name: "Pmswbqdtw", close: ["Igbxq", "Avlojbs"] },
  { name: "Ppaehhdl", close: ["Yrewn", "Avlojbs"] },
  { name: "Quhprh", close: ["Kjftx", "Tmsmcxyg"] },
  { name: "Rbrely", close: ["Dkrajqert", "Sbevkn"] },
  { name: "Sbevkn", close: ["Rbrely", "Dkogmrf"] },
  { name: "Ssjgpuwp", close: ["Bmjolejuz", "Dkrajqert"] },
  { name: "Tczgxpjjj", close: ["Aotugygoe", "Nprysne"] },
  { name: "Tdbnytkym", close: ["Oanofefjr", "Nxwacd"] },
  { name: "Tmsmcxyg", close: ["Quhprh", "Cxospeps"] },
  { name: "Tqdcbwz", close: ["Utpvjh", "Xaohdx"] },
  { name: "Ufdgsw", close: ["Njpgme", "Bazpscaxb"] },
  { name: "Uhhyz", close: ["Imdhxajx", "Orioqcwz"] },
  { name: "Uhntmsm", close: ["Cxospeps", "Aotugygoe"] },
  { name: "Utpvjh", close: ["Tqdcbwz", "Vpptwq"] },
  { name: "Vpptwq", close: ["Utpvjh", "Oayyy"] },
  { name: "Xaohdx", close: ["Nkhpmgjqf", "Tqdcbwz"] },
  { name: "Xavftugk", close: ["Oanofefjr", "Eimcdbza"] },
  { name: "Xorfyf", close: ["Jbktfpa", "Baoxspz"] },
  { name: "Yrewn", close: ["Hpgemo", "Ppaehhdl"] },
  { name: "Ytfil", close: ["Fkpjh", "Ezwwdfd"] }
];
function placeGuests(arr) {
  let result = [];

  arr.sort((a, b) => a.name - b.name);

  var mapper = JSON.parse(JSON.stringify(arr));
  for (let i = 0; i <= arr.length - 1; i++) {
    mapper[i].close.sort();
  }
  let arrSize = arr.length;

  result.push(arr[0]);
  arr.shift(arr[0]);

  let j = 1;
  while (j < arrSize) {
    result.push(arr[0]);
    if ((result[j].name = mapper[0].close[0])) {
      arr.shift(arr[0]);
      mapper.shift(mapper[0]);
    } else if ((result[j].name = mapper[0].close[1])) {
      arr.shift(arr[0]);
      mapper.shift(mapper[0]);
    } else {
      arr.push(arr[0]);
      arr.shift(arr[0]);
      mapper.push(mapper[0]);
      mapper.shift(mapper[0]);
      result.shift(result[j]);
    }
    j++;
  }

  console.log("arr", arr.length, arr);
  console.log("mapper", mapper.length, mapper);
  console.log("new_result", result.length, result);

  return result;
}

placeGuests(arr);
