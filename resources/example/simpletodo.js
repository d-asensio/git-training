/**
 * Implementation of a very simple first in first out queue.
 */
class SimpleFIFO {

  /**
   * Initializes the queue with the given init elements (if any).
   *
   * @param initElements
   */
  constructor(initElements = []) {
    this.queue = initElements
  }

  /**
   * Adds the given element to the queue.
   *
   * @param element
   */
  addElement(element) {
    this.queue.push(element)
  }

  /**
   * Returns the last element added to the list.∫
   *
   * @returns element
   */
  getElement() {
    return this.queue.pop()
  }
}