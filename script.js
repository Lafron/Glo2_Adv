"use strict"

const sliteFunc = function (string, length) {
    return string.substring(0, length) + "...";
}

const strFunc = function (arg) {
    typeof arg != "string"
        ? (
            console.log("Not string")
        ) : (
            console.log("Argument is string"),
            arg = arg.trim(),
            arg = arg.length > 30
                ? sliteFunc(arg, 30)
                : arg
            )
    return arg;
};

console.log(strFunc("                aaabbbcccdddeeefffjjjlllQQQMMMWWW           "));