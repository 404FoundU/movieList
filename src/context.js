const {cs} = require("./chain-services");
const {createContext, createElement: h} = require("react");

const ctxPairs = {};

export const provideContext = (values, next) => cs(
    ...Object.keys(values).map((key) => {
        let r = ctxPairs[key];
        if (r == null) {
            r = createContext();
            ctxPairs[key] = r;
        }

        return (_, next) => h(r.Provider, {value: values[key]}, next());
    }),
    next,
);

export const consumeContext = (name) => {
    const ctxPair = ctxPairs[name];
    if (ctxPair == null) {
        throw `Can not find context ${name}`;
    }
    return [name, (_, next) => h(ctxPair.Consumer, {}, next)];
};
