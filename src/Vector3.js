'use strict';

function Vector3(x, y, z) {
  this.x = x;
  this.y = y;
  this.z = z;
}

Vector3.prototype.invert = function () {
  this.x = -this.x;
  this.y = -this.y;
  this.z = -this.z;
};

Vector3.prototype.magnitude = function () {
  return Math.sqrt(this.squareMagnitude());
};

Vector3.prototype.squareMagnitude = function () {
  return this.x * this.x + this.y * this.y + this.z * this.z;
};

Vector3.prototype.normalize = function () {
  var l = this.magnitude();
  this.x /= l;
  this.y /= l;
  this.z /= l;
};

Vector3.prototype.multiplyUpdate = function (n) {
  this.x *= n;
  this.y *= n;
  this.z *= n;
};

Vector3.prototype.multiply = function (n) {
  return new Vector3(this.x * n, this.y * n, this.z * n);
};

Vector3.prototype.sumUpdate = function (v) {
  this.x += v.x;
  this.y += v.y;
  this.z += v.z;
};

Vector3.prototype.sum = function (v) {
  return new Vector3(this.x + v.x, this.y + v.y, this.z + v.z);
};

Vector3.prototype.substractUpdate = function (v) {
  this.x -= v.x;
  this.y -= v.y;
  this.z -= v.z;
};

Vector3.prototype.substract = function (v) {
  return new Vector3(this.x - v.x, this.y - v.y, this.z - v.z);
};

Vector3.prototype.addScaledVector = function (v, s) {
  this.x += v.x * s;
  this.y += v.y * s;
  this.z += v.z * s;
};

Vector3.prototype.componentProduct = function (v) {
  return new Vector3(this.x * v.x, this.y * v.y, this.z * v.z);
};

Vector3.prototype.componentProductUpdate = function (v) {
  this.x *= v.x;
  this.y *= v.y;
  this.z *= v.z;
};

Vector3.prototype.scalarProduct = function (v) {
  return this.x * v.x + this.y * v.y + this.z * v.z;
};
