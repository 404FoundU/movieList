export const cs = (...services) =>
    gather(services, {})
;

const gather = (services, prev) => {
    if (services.length === 0) {
        throw `next() is called in the last service`;
    }
    const [first, ...last] = services;
    const [name, fn] = Array.isArray(first) ? first : [null, first];

    return fn(prev, (ret) => gather(last, name ? {...prev, [name]: ret} : prev));
};
