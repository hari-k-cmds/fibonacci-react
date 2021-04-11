import {fibonacci,findCompositeOrPrime, quicksort} from './../utils';

describe('fibonacci tests', () => {
    it('should return fibonacci result', () => {
      expect(fibonacci(1)).toStrictEqual([1, 1]);
      expect(fibonacci(10)).toStrictEqual([ 1, 1, 2,3,5, 8]);
    })
    it('should return empty array', () => {
        expect(fibonacci(undefined)).toStrictEqual([]);
        expect(fibonacci(null)).toStrictEqual([])
    })
  })

  describe('findCompositeOrPrime tests', () => {
    it('should return Composite Or Prime result', () => {
      expect(findCompositeOrPrime(1)).toBe('comp');
      expect(findCompositeOrPrime(2)).toBe('prime');
      expect(findCompositeOrPrime(3)).toBe('prime');
      expect(findCompositeOrPrime(5)).toBe('prime');
      expect(findCompositeOrPrime(55)).toBe('comp');
      expect(findCompositeOrPrime(555)).toBe('comp');
      expect(findCompositeOrPrime(1000)).toBe('comp');
      expect(findCompositeOrPrime(1597)).toBe('prime');

    })
  })

  describe('quicksort tests', () => {
    it('should return sorted array', () => {
      expect(quicksort([1,1])).toStrictEqual([1, 1]);
      expect(quicksort([5,8,1,2,1,3])).toStrictEqual([ 1, 1, 2,3,5, 8]);
    })
    it('should return empty array', () => {
        expect(quicksort([])).toStrictEqual([]);
    })
  })