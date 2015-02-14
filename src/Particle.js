'use strict';

function Particle(position, velocity, acceleration, damping) {
  this.position = position;
  this.velocity = velocity;
  this.acceleration = acceleration;
  this.damping = damping || 0;
}
