/* global Vector3 */
'use strict';

function Particle(config) {
  this.position = config.position;
  this.velocity = config.velocity;
  this.acceleration = config.acceleration;
  this.damping = config.damping || 1;
  this.inverseMass = 1 / config.mass || Infinity;
  Object.defineProperty(this, 'mass', {
    get: function () {
      return 1 / this.inverseMass;
    },
    set: function (mass) {
      this.inverseMass = 1 / mass;
    }
  });
}

Particle.prototype.integrate = function (duration) {
  // Move the particle
  this.position.addScaledVector(this.velocity, duration);

  // g = 9.8 m/s^2, in our case 10
  var g = new Vector3(0, -10, 0);
  this.acceleration.addScaledVector(g, this.inverseMass);

  // Update the velocity based on the updated acceleration
  this.velocity.addScaledVector(this.acceleration, duration);
  // Update the velocity based on the damping
  this.velocity.multiplyUpdate(Math.pow(this.damping, duration));
};
