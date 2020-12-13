const chai = require("chai");
const spies = require("chai-spies");
chai.use(spies);

// assertion style included with chai
const { expect } = chai;

const {mutatingMap, myMap, originalMap} = require("../problems/mutation");


function myCustomSpyOn(arr){
    
  return new Proxy(arr, detectMutationHandler);
  //note: that we don't actually need the proxy, we just wanna set it up and
  //then check out the handler see linwa 61 through 63
}

const detectMutationHandler = {
  //they
  didNotMutate: true,// we'll expect this to still be  true, after our act step
  mutations: 0, //this is cool, check out what its value is if you use the built-in map
  set: function (target, name, value, receiver) {
    this.mutations++;
    this.didNotMutate = false
    //this handler is triggered, if anything on the arr is set (mutated)
    
    //PER mdn: (note proxy = detectMutationHandler)
    //Property assignment: proxy[foo] = bar and proxy.foo = bar
    // Inherited property assignment: Object.create(proxy)[foo] = bar

    // stuff you could play with?
    // console.log(
    //   'target',target,
    //   'name', name,
    //   'value', value,
    //   'receiver',receiver)

    //following line is necessary for the set method to continue to work as normal
    return value;
  },
};


describe("setting up a proxy", () => {
  it("should not mutate the array", () => {
    const arr = ["one", "two", "three"];

    const spy = myCustomSpyOn(arr)
    // mutatingMap(spy, (str) => str.toUpperCase());
    // myMap(spy, (str) => str.toUpperCase());
    // originalMap(spy, (str) => str.toUpperCase());
    
    const {mutations, didNotMutate} = detectMutationHandler
    console.log(didNotMutate ? 'yippee skippee, no mutatins!!!!' : `your original array: [${arr.join(', ')}] has been mutated ${mutations} times`)
    expect(didNotMutate).to.be.true
    expect(mutations).to.equal(0)
  });
  
});
