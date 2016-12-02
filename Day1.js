var l = "L5, R1, L5, L1, R5, R1, R1, L4, L1, L3, R2, R4, L4, L1, L1, R2, R4, R3, L1, R4, L4, L5, L4, R4, L5, R1, R5, L2, R1, R3, L2, L4, L4, R1, L192, R5, R1, R4, L5, L4, R5, L1, L1, R48, R5, R5, L2, R4, R4, R1, R3, L1, L4, L5, R1, L4, L2, L5, R5, L2, R74, R4, L1, R188, R5, L4, L2, R5, R2, L4, R4, R3, R3, R2, R1, L3, L2, L5, L5, L2, L1, R1, R5, R4, L3, R5, L1, L3, R4, L1, L3, L2, R1, R3, R2, R5, L3, L1, L1, R5, L4, L5, R5, R2, L5, R2, L1, L5, L3, L5, L5, L1, R1, L4, L3, L1, R2, R5, L1, L3, R4, R5, L4, L1, R5, L1, R5, R5, R5, R2, R1, R2, L5, L5, L5, R4, L5, L4, L4, R5, L2, R1, R5, L1, L5, R4, L3, R4, L2, R3, R3, R3, L2, L2, L2, L1, L4, R3, L4, L2, R2, R5, L1, R2".split(", ");

var dir = 0,
    coords = [],
    currentcoords = [0, 0],
    intersect = [];

function getPositive(n) {
    if (n < 0)
        n *= -1;
    return n;
}

function isBetween(n, o, p) {
    return ((n > o && n < p) || (n > p && n < o));
}

for (var x = 0; x < l.length; x++) {
    var i = l[x],
        direction = i[0],
        length = +i.slice(1);

    if (direction == "L") {
        dir--;

        if (dir < 0)
            dir = 3;
    }
    else {
        dir++;

        if (dir > 3)
            dir = 0;
    }

    switch (dir) {
        case 0:
            currentcoords[1] += length;
            break;
        case 1:
            currentcoords[0] += length;
            break;
        case 2:
            currentcoords[1] -= length;
            break;
        case 3:
            currentcoords[0] -= length;
            break;
    }

    coords.push(currentcoords.slice(0));
}

var v = currentcoords[0],
    h = currentcoords[1];

v = getPositive(v);
h = getPositive(h);

console.log("1: " + +(v + h));

for (var a = 0; a < coords.length; a++) {
    var a1 = coords[a],
        a2 = coords[a + 1] || coords[a - 1];

    for (var b = 0; b < coords.length && !intersect.length; b++) {
        var b1 = coords[b],
            b2 = coords[b + 1] || coords[b - 1];

        if (isBetween(a1[0], b1[0], b2[0]) && isBetween(b1[1], a1[1], a2[1])) {
            intersect = [a1[0], b1[1]];
        }
    }
}

v = intersect[0];
h = intersect[1];

v = getPositive(v);
h = getPositive(h);

console.log("2: " + +(v + h));
