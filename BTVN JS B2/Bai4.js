const textEmail = "mynamebvh@gmail.comdfklgjfdkjgkfdjgkldtranduong@gmail.com";
const textPhone = "dfkdsklfjlksdjfklsd0979150921dfjhdsjfhds0979120734";

let regexEmail = /[\w]{9}@[\w]+.com/g;
console.log(textEmail.match(regexEmail));
let regexPhone = /[0-9]{10}/g;
console.log(textPhone.match(regexPhone));

