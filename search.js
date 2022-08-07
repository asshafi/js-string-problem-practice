const lyrics = 'Tumi bondhu kala pakhi ami jeno ki, bosonto kale tomai bolte parini.sada sada kala';

// const doesExist = lyrics.includes('pakhi');
// const searchString = 'pakhi';
// const doesExist = lyrics.includes(searchString);
// console.log(doesExist);

// lower case 
const searchString = 'paKhi';
const lyricsLowerCase = lyrics.toLowerCase();
const searchStringLower = lyrics.toLowerCase();
const doesExist = lyricsLowerCase.includes(searchStringLower);
// console.log(doesExist);

// indexOf
// console.log(lyrics.indexOf('kailla'));

if (lyrics.indexOf('sada') !== -1) {
    console.log('Exists inside the string');
}
else {
    console.log('Can not find it');
}

// startswith
console.log(lyrics.startsWith('tmi'));

// endswith
const fileName = 'mybiodata.pdf';
const otherFile = 'mypic.jpg';
fileName.endsWith('.pdf');