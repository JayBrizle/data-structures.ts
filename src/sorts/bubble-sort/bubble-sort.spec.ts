/**
 * Works by repeatedly swapping the adjacent elements if they are in wrong order.
 * Time O(n^2)
 * Space O(n)
 */

export const bubbleSort = (list: Array<number>) => {
  const n = list.length;
  const outerBounds = n - 1;
  for (let i = 0; i < outerBounds; i++) {
    // Starting at the end and working back is the key factor here different selectionSort
    const currentInnerBound = n - i - 1;
    for (let j = 0; j < currentInnerBound; j++) {
      const currentJ = list[j];
      const currentJplus1 = list[j + 1];
      if (currentJ > currentJplus1) {
        const temp = currentJ;
        list[j] = currentJplus1;
        list[j + 1] = temp;
      }
    }
  }
};

describe('Bubble Sort', () => {
  let list = [4, 7, 1, 8, 2];
  let toSort = [4, 7, 1, 8, 2];

  beforeEach(() => {
    toSort = list;
  });

  it('should work', () => {
    bubbleSort(toSort);
    expect(toSort[0]).toBe(1);
    expect(toSort[1]).toBe(2);
    expect(toSort[2]).toBe(4);
    expect(toSort[3]).toBe(7);
    expect(toSort[4]).toBe(8);
  });
});
