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
import fs from "fs";
import {promisify} from "util";

// promisify our readFile
const readFile = promisify(fs.readFile);
// get current working directory where command is run
const cwd = process.cwd();

// self invoking async function
(async () => {
    try {
        const pkg = JSON.parse(await readFile(resolve(cwd, 'package.json'), "UTF-8"));
        const scripts = pkg.scripts;

        // check if scripts exists or not
        if (scripts === undefined || Object.keys(scripts).length === 0) {
            throw Error("no scripts are in package.json file")
        } else
            console.log(scripts)
    } catch (e) {
        // we will log any error directly on user terminal
        console.log(e);
    }
})();
