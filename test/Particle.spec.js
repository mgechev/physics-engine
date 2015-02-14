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
      var particle = new Particle({
        position: pos,
        velocity: vel,
        acceleration: acc,
        damping: 2,
        mass: 2
      });
      expect(particle.position).toBe(pos);
      expect(particle.velocity).toBe(vel);
      expect(particle.acceleration).toBe(acc);
      expect(particle.damping).toBe(2);
      expect(particle.inverseMass).toBe(0.5);
      expect(particle.mass).toBe(2);
      particle.mass = 4;
      expect(particle.inverseMass).toBe(0.25);
    });

  it('should has a method integrate, which integrates ' +
      'the particle for duration',
      function () {
        var particle = new Particle({
          position: new Vector3(1, 1, 1),
          velocity: new Vector3(2, 2, 2),
          acceleration: new Vector3(1, 1, 1),
          damping: 1,
          mass: 2
        });
        expect(typeof particle.integrate).toBe('function');
      });
});
