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
