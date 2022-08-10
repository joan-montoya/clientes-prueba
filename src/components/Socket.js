import React, { Component } from "react";
import io from "socket.io-client";

let socket = io("//localhost:5000");

export default socket;
