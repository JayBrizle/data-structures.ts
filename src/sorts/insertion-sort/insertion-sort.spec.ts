import { numArray } from "../num-array";

/**
 * Sorting algorithm that works similar to the way you sort playing cards in your hands.
 * Iterate from arr[1] to arr[n] over the array.
 * Compare the current element arr[i] to its predecessor arr[j - 1].
 * If the current element is smaller than its predecessor,
 *    proceed to comparing it to the elements before it, while j >= 0 && arr[j] > current element, swap values, j--.
 * Set arr[j + 1] to the current element value (Nothing may have actually been updated)
 */
export const insertionSort = (list: number[]) => {
  for (let i = 1; i < list.length; i++) {
    const currentIdxValue = list[i];
    let j = i - 1;
    while (j >= 0 && list[j] > currentIdxValue) {
      list[j + 1] = list[j];
      j--;
    }

    list[j + 1] = currentIdxValue;
  }
};

describe("Insertion Sort", () => {
  let toSort = [4, 7, 1, 8, 2];

  beforeEach(() => {
    toSort = numArray;
  });

  it("should work", () => {
    insertionSort(toSort);
    expect(true).toBe(true);
    expect(toSort[0]).toBe(1);
    expect(toSort[1]).toBe(2);
    expect(toSort[2]).toBe(4);
    expect(toSort[3]).toBe(7);
    expect(toSort[4]).toBe(8);
  });
});
