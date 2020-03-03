#!/usr/bin/env node

/*

ISC License

Copyright 2020, Saksham (DawnImpulse)

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted,
provided that the above copyright notice and this permission notice appear in all copies.
THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS,
WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE
OR PERFORMANCE OF THIS SOFTWARE.

------------------------

@info - main entry point

@author Saksham
@note Last Branch Update - master
     
@note Created on 2020-03-03 by Saksham
@note Updates :

*/

import {resolve} from "path"
import fs, {readFileSync} from "fs";
import {promisify} from "util";

// promisify our readFile
const readFile = promisify(fs.readFile);

// reading npsr package.json file
const pckjson = JSON.parse(readFileSync(resolve(__dirname, "..", "package.json"), 'utf-8'));

// get current working directory where command is run
const cwd = process.cwd();

// parsing arguments in args
const args = [];
process.argv.forEach((el, i) => {
    if (i > 1)
        // we only adding the args passed by user only
        args.push(el.toLowerCase())
});

// various color codes without using libraries
const reset = "\x1b[0m";
const red = "\x1b[31m";
const green = "\x1b[32m";
const yellow = "\x1b[33m";
const blue = "\x1b[34m";
const magenta = "\x1b[35m";
const cyan = "\x1b[36m";
const white = "\x1b[37m";

// self invoking async function
(async () => {
    try {
        // check if there are any arguments
        if (args[0] === undefined)
            help();
        else {
            const arg = args[0];
            switch (arg) {
                // help menu
                case "-h" : {
                    help();
                    break
                }
                // version of npsr
                case "-v": {
                    console.log(cyan + "Version : " + pckjson.version + reset);
                    break
                }
                // anything else will be matched for script
                default: {
                    // get cwd package.json file
                    const pkg = JSON.parse(await readFile(resolve(cwd, 'package.json'), "UTF-8"));
                    // extract scripts property
                    const scripts = pkg.scripts;

                    // check if scripts exists or not
                    if (scripts === undefined || Object.keys(scripts).length === 0) {
                        throw Error("no scripts are in package.json file")
                    } else {
                        // find & run the script
                        const keys = Object.keys(scripts);
                        const check = keys.includes(arg);
                        if (!check)
                            // script not exists, throw error
                            throw Error(`given script ${arg} not exists`)
                    }
                }
            }
        }
    } catch (e) {
        // we will log any error directly on user terminal
        console.log(red + e + reset);
    }
})();

/**
 * used to display help menu
 */
function help() {
    console.log("");
    console.log(cyan + " option " + yellow + "|" + cyan + " description" + reset);
    console.log("");
    console.log(" * " + yellow + "|" + reset + " script name " + green + "e.g ns build " + reset);
    console.log(" -h " + yellow + "|" + reset + " used to display all available options ");
    console.log(" -v " + yellow + "|" + reset + " version of `npsr` package ");
}
