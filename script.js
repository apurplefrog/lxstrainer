const scrambles = {
    UFR: {
        reg: [
            "U2 R U R2 U' R' U R",
            "U R U2 R2 U' R' U R",
            "U' R U R U' R2 U' R2 U R2",
            "U2 R D' R U R' D R'",
            "U R' U2 R U2 R",
            "R' U' R U' R U2 R",
            "R' U2 R2 U R' U R2 U R'",
            "R U' R2 U' R U R U2 R U R'",
            "R2 U' R2 U2 R2 U R2",
            "R U' R' U R U' R2 U' R U R",
            "U' R' U' R U' R' U R2 U R",
            "R U' R2 U2 R U2 R2 U' R'",
            "R U2 R' U R' U2 R U2 R2 U' R'",
            "U2 R' U' R U R2 U R' U R U' R'",
            "R U' R' U R U2 R2 U' R U R",
            "R U R' U R' U' R U R2 U R'",
            "U2 R U R' U R' U' R2 U R",
            "U R U2 R' U R' U' R2 U R",
            "U2 R' U2 R U2 R U' R U R'",
            "R U' R' U R' U' R U R",
            "U' R U R' U R' U' R U' R U2 R",
            "U2 R U R2 U' R U R2 U' R'",
            "U R U2 R' U2 R' U2 R2 U2 R",
            "U R' U' R U' R U R' U' R U2 R",
            "U' R U' R' U R U' R' U R' U' R U R"
        ], f2l: [
            "U2 R2 U2 R' U' R U' R2",
            "U2 R U R' U R U' R'",
            "U R U2 R' U R U' R'",
            "R U2 R' U' R U R'",
            "U R U' R' U R U' R' U R U' R'"
        ]
    }, RFU: {
        reg: [
            "U' S' R U R' U R U R' S",
            "R U R' S R2 S' R2",
            "U R' U' R2 U' R' U R U' R' U R U R",
            "R' U' R U R U' R U R'",
            "R' U' R U D' R U' R' D R",
            "R' U2 R U2 R U2 R U R'",
            "U' R' U2 R U R U R",
            "U' R' U R U2 R2 U2 R' U' R",
            "U' R' U2 R' U R U R",
            "U' R' U' R U R",
            "U' R' U2 R2 U R' U R2 U' R'",
            "U2 R' U' R U R U2 R U R'",
            "U' R U' R2 U2 R U R U R",
            "U2 R' U' R U R2 U' R' U' R U R'",
            "U' R U' R2 U' R U R",
            "R' U2 R2 U2 R2 U' R'",
            "U2 R U' R' U R' U2 R U2 R2 U' R'",
            "R U R' S' U2 S",
            "U R' U' R2 U' R' U2 R2 U' R'",
            "U' R U2 R2 U' R U R",
            "U2 R' U2 R' U2 R2 U R'",
            "U' R U R2 U2 R U R U R",
            "R U R' U' S' U2 S",
            "U2 R' U2 R U R U' R' U R U R",
            "U' R U R2 U' R U R"
        ], f2l: [
            "R2 D R' U2 R D' R' U R'",
            "U2 R U' R' U' R U R'",
            "R U R'",
            "U' R U' R' U R U R'",
            "U' R U2 R' U R U R'"
        ]
    }, FUR: {
        reg: [
            "U' R U2 R' U R' U' R U R2 U' R'",
            "U' R U R' U R' U' R U R2 U' R'",
            "R' U' R U R2 U' R'",
            "D' R' D R2 U' R2 D' R D",
            "U' R' U2 R U R' U' R U2 R",
            "U' R' U' R U R U' R U' R' U R U' R'",
            "U' R U R' U2 R' U' R2 U R",
            "U2 R' U2 R2 U2 R",
            "U' R D' R U' R' D R'",
            "S R2' S' R2 U R U' R'",
            "U R' U' R U' R U R U R",
            "U' R U2 R' U R' U' R' U R",
            "U R' U' R2 U R",
            "U' R' U' R' U' R U2 R",
            "U2 R U R' U' R' U' R U R",
            "U R' U' R U R U R U R'",
            "U2 S R2' S' R3 U2' R'",
            "U' R U R' U R' U' R' U R",
            "U' R U' R' U2 R' U' R2 U R",
            "U R' U' R U D' R U R' D R",
            "R' U' R2 U' R' U R U R",
            "U' R U2 R' U2 R' U' R2 U R",
            "R' D' R2 U R U' R2 D",
            "R' U' R' U R",
            "R U2 R2 U2 R U2 R"
        ], f2l: [
            "R U R' U2 R U' R' U R U' R'",
            "U' R U2 R' U2 R U' R'",
            "U' R U R' U2 R U' R'",
            "U R U' R'",
            "U' R U' R' U2 R U' R'"
        ]
    }, DFR: {
        reg: [
            "U R U' R2 U' R U R U' R U R'",
            "U S R2' S' R2",
            "U R U' D' R U' R' U D R'",
            "U2 R U2 R' U R D' R U' R' D R'",
            "U2 R U R' U2 R D' R U' R' D R'",
            "U R' U' R' U R U R U R'",
            "R U' R' U R U R' U R' U' R U R"
        ], f2l: [
            "U2 F' R U R' U' R' F R"
        ]
    }, RDF: {
        reg: [
            "U R' U' R U R U' R' U' R U R",
            "U' R U2 R' U R' U' R U R",
            "R' U' R U R U' R U' R' U R U R'",
            "U' R' U' R U R2 U R'",
            "U2 R' U2 R U2 R2 U R'",
            "R' U2 R' U2 R2 U' R'",
            "R U2 R' U R U2 R2 U' R U R"
        ], f2l: [
            "R U R' U' R U R'",
            "R U' R' U R U2 R' U R U' R'"
        ]
    }, FRD: {
        reg: [
            "R U' R2 U' R' U R",
            "R U R2 U2 R U2 R",
            "R U' R2 D' R2 U R U' R2 D",
            "R U' R2 U' R U R2 U' R'",
            "U' R' D' R U R' U' D R2 U R",
            "U' R U' R' U R' U' R2 U R",
            "R U R' U' R U' R' U R' U' R U R"
        ], f2l: [
            "U' R U' R' U R U' R'",
            "R U' R' U' R U R' U2 R U' R'"
        ]
    }
}

function generateNewScramble() {
    document.getElementById("solution").innerHTML = "";

    let scramble = document.getElementById("scramble");
    let newScramble = "x2 y ";

    let allowsUFR = document.getElementById("allowsUFR").checked;
    let allowsRFU = document.getElementById("allowsRFU").checked;
    let allowsFUR = document.getElementById("allowsFUR").checked;
    let allowsDFR = document.getElementById("allowsDFR").checked;
    let allowsRDF = document.getElementById("allowsRDF").checked;
    let allowsFRD = document.getElementById("allowsFRD").checked;
    let allowsF2L = document.getElementById("allowsF2L").checked;

    let scrambleOptions = [];
    if (allowsUFR) {
        for (let i = 0; i < scrambles.UFR.reg.length; i++) {
            scrambleOptions.push(scrambles.UFR.reg[i]);
        }
        if (allowsF2L) {
            for (let i = 0; i < scrambles.UFR.f2l.length; i++) {
                scrambleOptions.push(scrambles.UFR.f2l[i]);
            }
        }
    }
    if (allowsRFU) {
        for (let i = 0; i < scrambles.RFU.reg.length; i++) {
            scrambleOptions.push(scrambles.RFU.reg[i]);
        }
        if (allowsF2L) {
            for (let i = 0; i < scrambles.RFU.f2l.length; i++) {
                scrambleOptions.push(scrambles.RFU.f2l[i]);
            }
        }
    }
    if (allowsFUR) {
        for (let i = 0; i < scrambles.FUR.reg.length; i++) {
            scrambleOptions.push(scrambles.FUR.reg[i]);
        }
        if (allowsF2L) {
            for (let i = 0; i < scrambles.FUR.f2l.length; i++) {
                scrambleOptions.push(scrambles.FUR.f2l[i]);
            }
        }
    }
    if (allowsDFR) {
        for (let i = 0; i < scrambles.DFR.reg.length; i++) {
            scrambleOptions.push(scrambles.DFR.reg[i]);
        }
        if (allowsF2L) {
            for (let i = 0; i < scrambles.DFR.f2l.length; i++) {
                scrambleOptions.push(scrambles.DFR.f2l[i]);
            }
        }
    }
    if (allowsRDF) {
        for (let i = 0; i < scrambles.RDF.reg.length; i++) {
            scrambleOptions.push(scrambles.RDF.reg[i]);
        }
        if (allowsF2L) {
            for (let i = 0; i < scrambles.RDF.f2l.length; i++) {
                scrambleOptions.push(scrambles.RDF.f2l[i]);
            }
        }
    }
    if (allowsFRD) {
        for (let i = 0; i < scrambles.FRD.reg.length; i++) {
            scrambleOptions.push(scrambles.FRD.reg[i]);
        }
        if (allowsF2L) {
            for (let i = 0; i < scrambles.FRD.f2l.length; i++) {
                scrambleOptions.push(scrambles.FRD.f2l[i]);
            }
        }
    }

    finalScramble = scrambleOptions[Math.floor(Math.random()*scrambleOptions.length)];
    console.log("Scramble: " + finalScramble + "\nInverted Scramble: " + invertScramble(finalScramble));
    scramble.scramble = newScramble + invertScramble(finalScramble);
    document.getElementById("scramble-text").innerHTML = invertScramble(finalScramble);
}

function invertScramble(scramble) {
    scramble = scramble.split(' ').reverse();
    for (let i = 0; i < scramble.length; i++) {
        if (scramble[i][scramble[i].length - 1] === '\'') {
            scramble[i] = scramble[i].slice(0, -1);
        } else if (scramble[i][scramble[i].length - 1] !== '2') {
            scramble[i] += '\'';
        }
    }

    return scramble.join(' ');
}

function revealSolution() {
    try {
        document.getElementById("solution").innerHTML = finalScramble;
    } catch (error) {
        console.log("Cannot reveal solution before scramble is selected");
    }
}
