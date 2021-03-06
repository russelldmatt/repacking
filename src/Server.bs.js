// Generated by BUCKLESCRIPT VERSION 3.0.0, PLEASE EDIT WITH CARE
'use strict';

var Http = require("http");
var Path = require("path");
var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Printf = require("bs-platform/lib/js/printf.js");
var Express = require("express");
var Server$BsSocket = require("bs-socket/src/Server.bs.js");

var Path$1 = /* module */[];

var Express$1 = /* module */[];

var Http$1 = /* module */[];

var app = Express();

var http = Http.Server(app);

console.log(__dirname);

app.use(Express.static(Path.join(__dirname, "..")));

app.get("/", (function (_, res) {
        res.sendFile(Path.join(__dirname, "index.html"), /* () */0);
        return /* () */0;
      }));

var Server = Server$BsSocket.Make(/* Message-Repacking */[]);

var io = Curry._1(Server[/* createWithHttp */0], http);

Curry._2(Server[/* onConnect */15], io, (function (socket) {
        return Curry._2(Server[/* Socket */14][/* on */3], socket, (function (message) {
                      console.log("message from client:" + message);
                      return /* () */0;
                    }));
      }));

http.listen(3000, (function () {
        return Curry._1(Printf.printf(/* Format */[
                        /* String_literal */Block.__(11, [
                            "listening on *:",
                            /* Int */Block.__(4, [
                                /* Int_d */0,
                                /* No_padding */0,
                                /* No_precision */0,
                                /* Char_literal */Block.__(12, [
                                    /* "\n" */10,
                                    /* End_of_format */0
                                  ])
                              ])
                          ]),
                        "listening on *:%d\n"
                      ]), 3000);
      }));

var port = 3000;

exports.Path = Path$1;
exports.Express = Express$1;
exports.Http = Http$1;
exports.app = app;
exports.http = http;
exports.Server = Server;
exports.io = io;
exports.port = port;
/* app Not a pure module */
