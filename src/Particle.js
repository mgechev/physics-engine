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
