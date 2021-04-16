function changeColor()
{
  const hex_numbers = ["0","1","2","3","4","5","6","7","8","9","A", "B", "C", "D", "E", "F"];
  var hexcode1 = '';
  var hexcode2 = '';
  var random_index;
  
  for(let i = 0; i<6; i++){
  random_index = Math.floor(Math.random() * hex_numbers.length);
    hexcode1 += hex_numbers[random_index];
  random_index = Math.floor(Math.random() * hex_numbers.length);
    hexcode2 += hex_numbers[random_index];
  }

  document.body.style.background = 'linear-gradient(to right, #'+hexcode1+', #'+hexcode2+')';
  document.getElementById("hexcode1").innerHTML = hexcode1;
  document.getElementById("hexcode2").innerHTML = hexcode2;
}