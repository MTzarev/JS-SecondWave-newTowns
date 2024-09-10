function newTowns(arr) {

    for (let line of arr) {
        line = line.split(` | `);
        let townObj = {};
        townObj.name = line[0];
        townObj.latitude = line[1];
        townObj.longitude = line[2];

        console.log(townObj);
    }
}
newTowns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']);
