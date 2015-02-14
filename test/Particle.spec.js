/* global describe, it, expect, Vector3, Particle */
describe('Particle', function () {
  'use strict';

  it('should be a constructor function', function () {
    expect(typeof Particle).toBe('function');
  });

  it('should initialize particle\'s properties when called with new',
    function () {
      var pos = new Vector3(1, 2, 3);
      var vel = new Vector3(2, 2, 2);
      var acc = new Vector3(3, 3, 3);
      var particle = new Particle(pos, vel, acc);
      expect(particle.position).toBe(pos);
      expect(particle.velocity).toBe(vel);
      expect(particle.acceleration).toBe(acc);
    });
});
