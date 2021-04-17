/**
 * Time O(n^2)
 * Space O(n)
 */

export const selectionSort = (list: Array<number>) => {
  function swap(currentSmallestIdx: number, newSmallestIdx: number) {
    let temp = list[currentSmallestIdx];
    list[currentSmallestIdx] = list[newSmallestIdx];
    list[newSmallestIdx] = temp;
  }

  let currentMinIdx;
  for (let i = 0; i < list.length; i++) {
    currentMinIdx = i;
    // Inner loop will repeat 1+2+3...+n times = n(n-1)/2 = (n^2/2-n)/2
    // i + 1 is giving us the sort of sub array to work on
    // Index values before should already be in their proper place at this time
    // Going all the way through, checking each value compared to list[currentMinIdx]
    for (let j = i + 1; j < list.length; j++) {
      const currentJvalue = list[j];
      const currentMinValue = list[currentMinIdx];
      if (currentJvalue < currentMinValue) {
        currentMinIdx = j;
      }
    }

    swap(i, currentMinIdx);
  }
};

describe('Selection Sort', () => {
  let list = [4, 7, 1, 8, 2];
  let toSort = [4, 7, 1, 8, 2];

  beforeEach(() => {
    toSort = list;
  });

  it('should work have lowest item at index 0', () => {
    selectionSort(toSort);
    expect(toSort[0]).toBe(1);
  });

  it('should work have high item at last index', () => {
    selectionSort(toSort);
    expect(toSort[toSort.length - 1]).toBe(8);
  });
});
