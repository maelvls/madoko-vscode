"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var plist = require('plist');
var watch = require('glob-watcher');
var path = require('path');

var dir = "syntaxes/";
var input = path.join(dir, "madoko.JSON-tmLanguage");
var output = path.join(dir, "madoko.tmLanguage");

var update = function() {
    try {
        fs.writeFileSync(output, plist.build(JSON.parse(fs.readFileSync(input, "utf8"))));
    } catch (e) {
        console.error("   error: "+e);
    }
}
var watchMode = false
process.argv.forEach((val, index) => {
    if (val === "-w") {
        console.log("Watching " + input);
        watchMode = true
    }
});

if (watchMode) {
    // Raw chokidar instance
    var watcher = watch([input]);
    // Listen for the 'change' event to get `path`/`stat`
    // No async completion available because this is the raw chokidar instance
    watcher.on('change', function (path, stat) {
        // `path` is the path of the changed file
        // `stat` is an `fs.Stat` object (not always available)
        console.log(input + " -> " + output);
        update()
    });
} else {
    update()
}