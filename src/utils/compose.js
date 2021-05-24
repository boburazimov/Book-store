const compose = (...functions) => (component) => {
    return functions.reduceRight(
        (wrapped, f) => f(wrapped), component);
};

export default compose;