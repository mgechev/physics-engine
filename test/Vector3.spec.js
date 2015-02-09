/* global describe, it, expect, Vector3 */
describe('Vector3', function () {
  'use strict';

  it('should be a constructor function', function () {
    expect(typeof Vector3).toBe('function');
  });

  it('should initialize x, y, z when passed as params', function () {
    var vector = new Vector3(1, 2, 3);
    expect(vector.x).toBe(1);
    expect(vector.y).toBe(2);
    expect(vector.z).toBe(3);
  });

  it('should has method invert, which invers the vector', function () {
    var vector = new Vector3(1, 2, 3);
    expect(typeof vector.invert).toBe('function');
    vector.invert();
    expect(vector.x).toBe(-1);
    expect(vector.y).toBe(-2);
    expect(vector.z).toBe(-3);
  });

  it('should has method magnitude, which returns the vector\'s magnitude',
      function () {
        var vector = new Vector3(1, 2, 3);
        expect(typeof vector.magnitude).toBe('function');
        expect(vector.magnitude()).toBeCloseTo(3.741, 2);
      });

  it('should has method squareMagnitude, which should' +
      'return vector\'s square magnitude', function () {
    var vector = new Vector3(1, 2, 3);
    expect(typeof vector.squareMagnitude).toBe('function');
    expect(vector.squareMagnitude()).toBe(14);
  });

  it('should has method normalize, which returns the normalized vector',
      function () {
        var vector = new Vector3(1, 2, 3);
        expect(typeof vector.normalize).toBe('function');
        vector.normalize();
        expect(vector.x).toBeCloseTo(0.267, 3);
        expect(vector.y).toBeCloseTo(0.534, 2);
        expect(vector.z).toBeCloseTo(0.802, 3);
      });

  it('should has method multiply and allow multiplication with scalar',
      function () {
        var vector = new Vector3(1, 2, 3);
        expect(typeof vector.multiply).toBe('function');
        vector.multiply(2);
        expect(vector.x).toBe(2);
        expect(vector.y).toBe(4);
        expect(vector.z).toBe(6);
      });
});
