// Function that receives a function and calls it
const receivesAFunction = (callback) => {
    callback();
};

// Function that returns a named function
const returnsANamedFunction = () => {
    return function namedFunction() {
        console.log("I am a named function");
    };
};

// Function that returns an anonymous function
const returnsAnAnonymousFunction = () => {
    return () => console.log("I am an anonymous function");
};

// Export functions (for testing)
module.exports = { receivesAFunction, returnsANamedFunction, returnsAnAnonymousFunction };
