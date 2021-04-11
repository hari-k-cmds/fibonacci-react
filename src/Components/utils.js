export function fibonacci(num) {
    let arr = []
    if (!num) return arr;
    let n1 = 0, n2 = 1, nextTerm;
    arr.push(n2); // print 1
    nextTerm = n1 + n2;
    while (nextTerm <= num) {
      // print the next term
      arr.push(nextTerm);
      n1 = n2;
      n2 = nextTerm;
      nextTerm = n1 + n2;
    }
    return arr;
  }

export function findCompositeOrPrime(num) {
    var i;
    var count = 0;

    for (i = 1; i <= num; i++) {
      if (num % i === 0) 
        count++;
    }

    if (count === 2) return 'prime'
    else return 'comp'

  }

export function quicksort(array) {

    if (array.length <= 1) {
      return array;
    }

    var pivot = array[0];

    var left = [];
    var right = [];

    for (var i = 1; i < array.length; i++) {
      array[i] < pivot ? left.push(array[i]) : right.push(array[i]);
    }

    return quicksort(left).concat(pivot, quicksort(right));
  };
