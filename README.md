# Testing for Mutations, brought to you by the letter `Proxy`

First of all, need a break from studying, check me out. This is solely suppsed
to be interesting and shold  not cause anyone stress. Please relax But i think
this is one way you could check if an object has been mutated.

So a proxy, is essentially a way that you can take a javascript object, and
essentially hook into any of its methods. you could change the default behaviour
of that bbjects methods, but we can do that already with good ol' monkey
patching.

> Note: if you try the following code pls be ready to type `killall node` in a
> separate terminal. general rule of thumb, don't ever monkey patch!

```js 
Array.prototype.push = function(el) {
  console.log("bahahaha, gotchaaa, don't push be")
};
const arr = [1,2,3,4]
arr.push(5)
```

But now with a proxy, we can keep methods as they are (not break them) but still
collect useful data. If this sounds foreign to you. this is how
chai.spies is working. it replaces a certain function (of your choosing), runs
that function when called but also collects meta data (like # times called
what object it was called on, etc...,)

So just read through the test file, try it out. if you're feeling up to it,
check ut the results you'ld get if you reverse an array, using your own method
that doesn't mutate the the array, and also the built in version. exciting
times!...
