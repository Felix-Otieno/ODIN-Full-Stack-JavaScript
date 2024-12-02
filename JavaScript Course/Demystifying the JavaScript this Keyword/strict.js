"use strict";

function show() {
    console.log(this === undefined);
}

show();