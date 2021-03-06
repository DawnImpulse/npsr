#!/usr/bin/env node
"use strict";
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
    Saksham - 2019 03 04 - master - adding local .bin folder to path
*/
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = require("path");
var fs_1 = __importStar(require("fs"));
var util_1 = require("util");
var child_process_1 = require("child_process");
// promisify our readFile
var readFile = util_1.promisify(fs_1.default.readFile);
// reading npsr package.json file
var pckjson = JSON.parse(fs_1.readFileSync(path_1.resolve(__dirname, "..", "package.json"), 'utf-8'));
// get current working directory where command is run
var cwd = process.cwd();
// parsing arguments in args
var args = [];
process.argv.forEach(function (el, i) {
    if (i > 1)
        // we only adding the args passed by user only
        args.push(el.toLowerCase());
});
// various color codes without using libraries
var reset = "\x1b[0m";
var red = "\x1b[31m";
var green = "\x1b[32m";
var yellow = "\x1b[33m";
var cyan = "\x1b[36m";
var white = "\x1b[37m";
// self invoking async function
(function () { return __awaiter(void 0, void 0, void 0, function () {
    var arg, _a, pkg, _b, _c, scripts, keys, check, e_1;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _d.trys.push([0, 7, , 8]);
                if (!(args[0] === undefined)) return [3 /*break*/, 1];
                help();
                return [3 /*break*/, 6];
            case 1:
                arg = args[0];
                _a = arg;
                switch (_a) {
                    case "-h": return [3 /*break*/, 2];
                    case "-v": return [3 /*break*/, 3];
                }
                return [3 /*break*/, 4];
            case 2:
                {
                    help();
                    return [3 /*break*/, 6];
                }
                _d.label = 3;
            case 3:
                {
                    console.log(cyan + "Version : " + pckjson.version + reset);
                    return [3 /*break*/, 6];
                }
                _d.label = 4;
            case 4:
                _c = (_b = JSON).parse;
                return [4 /*yield*/, readFile(path_1.resolve(cwd, 'package.json'), "UTF-8")];
            case 5:
                pkg = _c.apply(_b, [_d.sent()]);
                scripts = pkg.scripts;
                // check if scripts exists or not
                if (scripts === undefined || Object.keys(scripts).length === 0) {
                    throw Error("no scripts are in package.json file");
                }
                else {
                    keys = Object.keys(scripts);
                    check = keys.includes(arg);
                    if (!check)
                        // script not exists, throw error
                        throw Error("given script " + arg + " not exists");
                    else
                        command(scripts[arg]);
                }
                _d.label = 6;
            case 6: return [3 /*break*/, 8];
            case 7:
                e_1 = _d.sent();
                // we will log any error directly on user terminal
                console.log(red + e_1 + reset);
                return [3 /*break*/, 8];
            case 8: return [2 /*return*/];
        }
    });
}); })();
/**
 * spawn a new process
 */
function command(cmd) {
    var env = process.env;
    // resolving path
    var path = resolveInternalPath(process.env.PATH);
    env["PATH"] = path;
    console.log(white + "Running command " + cyan + cmd + reset);
    // running command
    var child = child_process_1.spawn(cmd, {
        cwd: cwd,
        stdio: 'inherit',
        shell: true,
        env: env
    });
    child.on('exit', function (code) {
        return;
    });
    child.on('error', function (err) {
        console.log(red + err + reset);
        return;
    });
}
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
/**
 * resolve bin path & return updated PATH
 *
 * @param path
 * @return path
 */
function resolveInternalPath(path) {
    try {
        var bin = path_1.resolve(cwd, "node_modules", ".bin");
        return path += ";" + bin;
    }
    catch (e) {
        return path;
    }
}
