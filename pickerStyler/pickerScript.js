function shuffle(array) {
  var currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

function spin() {
  // Play the sound
  wheel.play();
  // Inisialisasi variabel
  const box = document.getElementById('box');
  const element = document.getElementById('mainbox');
  let SelectedItem = '';

  // Shuffle 450 karena class box1 sudah ditambah 90 derajat diawal. minus 40 per item agar posisi panah pas ditengah.
  // Setiap item memiliki 12.5% kemenangan kecuali item sepeda yang hanya memiliki sekitar 4% peluang untuk menang.
  // Item berupa ipad dan samsung tab tidak akan pernah menang.
  // let Sepeda = shuffle([2210]); //Kemungkinan : 33% atau 1/3
  let MagicRoaster = shuffle([1890, 2250, 2610]);
  let Sepeda = shuffle([1850, 2210, 2570]); //Kemungkinan : 100%
  let RiceCooker = shuffle([1810, 2170, 2530]);
  let LunchBox = shuffle([1770, 2130, 2490]);
  let Sanken = shuffle([1750, 2110, 2470]);
  let Electrolux = shuffle([1630, 1990, 2350]);
  let JblSpeaker = shuffle([1570, 1930, 2290]);

  // Bentuk acak
  let Hasil = shuffle([
    MagicRoaster[0],
    Sepeda[0],
    RiceCooker[0],
    LunchBox[0],
    Sanken[0],
    Electrolux[0],
    JblSpeaker[0],
  ]);
  // console.log(Hasil[0]);

  // Ambil value item yang terpilih
  if (MagicRoaster.includes(Hasil[0]))
    SelectedItem =
      "Land of Water! It is composed of many islands, with each having its own unique traditions. The country's weather is typically cool and full of mist and lakes. https://naruto.fandom.com/wiki/Land_of_Water";
  if (Sepeda.includes(Hasil[0]))
    SelectedItem =
      'Land of Sound! This country was said to be home to many shinobi clans, who had been used in a hopeless war, with the clans suffering heavily. https://naruto.fandom.com/wiki/Land_of_Sound';
  if (RiceCooker.includes(Hasil[0]))
    SelectedItem =
      'Land of Earth! The country is mostly comprised of desolate, rocky areas. The border of the Land of Earth runs along a rocky mountain range, blocking communication with other countries. https://naruto.fandom.com/wiki/Land_of_Earth';
  if (LunchBox.includes(Hasil[0]))
    SelectedItem =
      'Land of Fire! It is one of the largest and most powerful countries in the series, and the home of the main characters. https://naruto.fandom.com/wiki/Land_of_Fire';
  if (Sanken.includes(Hasil[0]))
    SelectedItem =
      "Land of Wind! The country covers a vast realm, but that realm is largely composed of deserts. Because there is very little rainfall throughout the year, the people of the country live in villages built on one of the desert's many oases. Despite the country's extremely harsh environment, it has a large population. https://naruto.fandom.com/wiki/Land_of_Wind";
  if (Electrolux.includes(Hasil[0]))
    SelectedItem =
      'Land of Lightning! In the centre of the country are vast mountain ranges, whose many thunderstorms are said to give the country its name. From these mountain ranges, many rivers flow to the sea, creating a very crooked coastline that displays an impressive oceanic beauty. https://naruto.fandom.com/wiki/Land_of_Lightning';
  if (JblSpeaker.includes(Hasil[0]))
    SelectedItem =
      'Land of Sky! The country was formed by ninja from several countries that could mold their chakra to mist in order to fly. Their civilization appears to be fairly advanced, best demonstrated by their usage of highly advanced forms of aviation not seen elsewhere in the Great Shinobi Countries. https://naruto.fandom.com/wiki/Land_of_the_Sky';

  // Proses
  box.style.setProperty('transition', 'all ease 5s');
  box.style.transform = 'rotate(' + Hasil[0] + 'deg)';
  element.classList.remove('animate');
  setTimeout(function () {
    element.classList.add('animate');
  }, 5000);

  // Munculkan Alert
  setTimeout(function () {
    applause.play();
    swal('Congratulations', 'You got The ' + SelectedItem);
  }, 5500);

  // Delay and set to normal state
  setTimeout(function () {
    box.style.setProperty('transition', 'initial');
    box.style.transform = 'rotate(90deg)';
  }, 6000);
}
