console.log("task a");

const team = {
    teamname :"McLaren",
    base : "Woking",
    principal : "Andreas Seidl"
};

console.log(JSON.stringify(team, null, 4));

team.drivers = [ 
    { name: "Daniel Ricciardo", dob: new Date(1989, 8, 1) },
    { name: "Lando Norris", dob: new Date(1999, 10, 13) }
];

team.drivers[0].points = [25, 18, 0, 25];
team.drivers[1].points = [12, 10, 25, 8];

console.log(JSON.stringify(team, null, 4));

console.log(team.drivers[0].name + ", " + team.drivers[0].dob.toDateString('MMMM ,yyyy'));


team.totalpoints = function () {
    let points = 0;
    for (let d in this.drivers) {
        for (let p in this.drivers[d].points) {
            points += this.drivers[d].points[p]; ;
        }
    }
    return points;
};

console.log("Points: " + team.totalpoints());

team.drivers[0].points.push(25);
team.drivers[1].points.push(10);

console.log("Points: " + team.totalpoints());

let {teamname, base} = team;

console.log(teamname, base);

//let second = team.drivers[1];

//let {drivers} = team;
//let [,lando] = drivers;

//let {drivers:[,lando]} = team;
let {drivers:[,lando]} = team;

console.log(lando);

//let {points} = lando;
//let [disqualified,...counted] = points

let {points:[disqualified,...counted]} = lando

//let countedpoints = counted.reduce((a, b) => a + b, 0)

let countedpoints = 0;
for (let p in counted) {
    countedpoints += counted[p]; ;
}

console.log(countedpoints);


console.log("task b");

let myarray = [1,3,1,7,9];

// basic array operations

console.log(myarray);
console.log(myarray[1]);
console.log(myarray.length);

myarray.sort();
console.log(myarray);

let index = myarray.findIndex(x => x==7);
console.log(index);

index = myarray.indexOf(7);
console.log(index);

myarray.reverse();
console.log(myarray);

myarray.pop();
console.log(myarray);

index = myarray.findIndex(x => x==9);
myarray.splice(index,1);
console.log(myarray);

// filter, map and reduce

myarray = [1,3,1,7,9];
console.log(myarray);

let filtered = myarray.filter(x => x<6);
console.log(filtered);
console.log(myarray);
console.log(myarray.filter(x => x == 1));

let squared = myarray.map(x => x * x);
console.log(squared);

let add3 = myarray.map(x => x + 3);
console.log(add3);

let pairs = myarray.map(x => [x, String.fromCharCode(x + 64)]);
console.log(pairs);

let sumoflist = myarray.reduce((x,y) => x + y);
console.log(sumoflist);

let productoflist = myarray.reduce((x,y) => x * y);
console.log(productoflist);

let maxoflist = myarray.reduce((x,y) => Math.max(x,y));
console.log(maxoflist);

let flat = myarray.flatMap(x => [x, String.fromCharCode(x + 64)]);
console.log(flat);

// challenge

let coordinates = [[0,1], [3,4], [-5,12], [2,2]];

function distance(x1, y1, x2, y2){
  return Math.sqrt(Math.pow(x2-x1,2) + Math.pow(y2-y1, 2));
}

let distances = coordinates.map(([x,y]) => distance(0,0,x,y));
console.log(distances);

let average = distances.reduce((x,y) => x + y)/distances.length;
console.log(average);
