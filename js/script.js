// Strict Mode
"use strict";

// Method
function Hewan() {
  this.nama = "Kambing Etawa";
  this.makan = function () {
    return this;
  };
}

// const kambing = new Hewan();
// console.log(kambing.makan());

// Function
function nomor() {
  console.log(this);
}
nomor();
