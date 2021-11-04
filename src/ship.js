class Ship {
  constructor(length) {
    this.length = length;
    this.hits = [];
  }

  isHit(number) {
    // isHit from GameBoard, loop through the array hits. if reaches de maximum, call isSunk, if the hits array it's smaller than the length of the boat, its not sunk
    if (!this.hits.includes(number)){
      this.hits.push(number);
    }
    return this.hits
  }

  isSunk() {
      if (this.hits.length === this.length){
        return true;
      }
  }
}


export { Ship }
// eslint-disable-next-line import/prefer-default-export

// module.exports = Ship;
