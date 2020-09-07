const fs = require("fs");
const { setFlagsFromString } = require("v8");
const dir = "./commands/";

module.exports = (prefix) => {
    var commands = {};

    const scripts = fs.readdirSync(dir);
    scripts.forEach(script=>{
        commands[prefix+script.split(".")[0]] = require("../"+dir+script);
    });

    return commands;
}