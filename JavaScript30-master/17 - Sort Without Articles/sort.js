const bands = [
  'The Plot in You',
  'The Devil Wears Prada',
  'Pierce the Veil',
  'Norma Jean',
  'The Bled',
  'Say Anything',
  'The Midway State',
  'We Came as Romans',
  'Counterparts',
  'Oh, Sleeper',
  'A Skylit Drive',
  'Anywhere But Here',
  'An Old Dog'
];

function strip(band) {
  return band.replace(/^(a |the |an )/i, '').trim();
}

const sorted = bands.sort((a, b) => {
  if (strip(a) < strip(b)) {
    return -1;
  }
  return 1;
});

console.log(sorted);
