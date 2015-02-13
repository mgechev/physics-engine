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
        expect(typeof vector.multiplyUpdate).toBe('function');
        vector.multiplyUpdate(2);
        expect(vector.x).toBe(2);
        expect(vector.y).toBe(4);
        expect(vector.z).toBe(6);
      });

  it('should has method for multipllication the current vector ' +
      'with scalar and return new vector', function () {
        var vector = new Vector3(1, 2, 3);
        expect(typeof vector.multiply).toBe('function');
        var v2 = vector.multiply(2);
        expect(v2.x).toBe(2);
        expect(v2.y).toBe(4);
        expect(v2.z).toBe(6);
        expect(v2).not.toEqual(vector);
        expect(vector.x).toBe(1);
        expect(vector.y).toBe(2);
        expect(vector.z).toBe(3);
      });

  it('should has method sum, which sums the vector with another one',
      function () {
        var vector = new Vector3(1, 2, 3);
        expect(typeof vector.sumUpdate).toBe('function');
        var v2 = new Vector3(1, 1, 1);
        vector.sumUpdate(v2);
        expect(vector.x).toBe(2);
        expect(vector.y).toBe(3);
        expect(vector.z).toBe(4);
      });

  it('should has method for sum the current vector ' +
      'with another vector and return new vector', function () {
        var vector = new Vector3(1, 2, 3);
        expect(typeof vector.sum).toBe('function');
        var v = new Vector3(1, 1, 1);
        var v2 = vector.sum(v);
        expect(v2.x).toBe(2);
        expect(v2.y).toBe(3);
        expect(v2.z).toBe(4);
        expect(v2).not.toEqual(vector);
        expect(vector.x).toBe(1);
        expect(vector.y).toBe(2);
        expect(vector.z).toBe(3);
      });

  it('should has method substract, which substracts vector from ' +
      'the current one', function () {
        var vector = new Vector3(1, 2, 3);
        expect(typeof vector.substractUpdate).toBe('function');
        vector.substractUpdate(new Vector3(1, 2, 3));
        expect(vector.x).toBe(0);
        expect(vector.y).toBe(0);
        expect(vector.z).toBe(0);
      });

  it('should has method substract, which substracts vector ' +
      'from the current vector and returns a new vector',
      function () {
        var vector = new Vector3(1, 2, 3);
        expect(typeof vector.substract).toBe('function');
        var v2 = vector.substract(new Vector3(1, 2, 3));
        expect(v2.x).toBe(0);
        expect(v2.y).toBe(0);
        expect(v2.z).toBe(0);
        expect(vector.x).toBe(1);
        expect(vector.y).toBe(2);
        expect(vector.z).toBe(3);
      });

  it('should has method addScaledVector, which adds a scaled vector',
      function () {
        var v = new Vector3(1, 2, 3);
        expect(typeof v.addScaledVector).toBe('function');
        v.addScaledVector(new Vector3(2, 2, 2), 3);
        expect(v.x).toBe(7);
        expect(v.y).toBe(8);
        expect(v.z).toBe(9);
      });

  it('should has componentProduct method, which multiply ' +
      'given vector with new one and returns a third vector',
      function () {
        var v = new Vector3(1, 2, 3);
        expect(typeof v.componentProduct).toBe('function');
        var v2 = new Vector3(2, 3, 4);
        var v3 = v.componentProduct(v2);
        expect(v3.x).toBe(2);
        expect(v3.y).toBe(6);
        expect(v3.z).toBe(12);
        expect(v.x).toBe(1);
        expect(v.y).toBe(2);
        expect(v.z).toBe(3);
      });

//  it('should has componentProductUpdate, which multiplies ' +
//      'given vector annd
});
