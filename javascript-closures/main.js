function graduate(credential) {
  return fullName => `${fullName}, ${credential}`;
}

const medicalSchool = graduate('M.D.');
const lawSchool = graduate('Esq.');

console.log(medicalSchool('Dan Abramov'));
console.log(lawSchool('Ryan Florence'));
