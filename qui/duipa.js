const apply = (m, args, cast) => {
    // If cast is a function, apply it to each argument in args
    if (typeof cast === 'function') {
        args = args.map(arg => cast(arg));
    }
    
    // Use Function.prototype.apply to call the function m with the processed args
    return m.apply(null, args);
};

// Example usage:
const add = (a, b) => a + b;
const args = [2, '3'];
const cast = Number;

console.log(apply(add, args, cast)); // Output: 5
