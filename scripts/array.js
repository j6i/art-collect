function populate(proj, arr){
    let n = new Array(proj.supply).fill().map(x => Math.round(Math.random() * proj.max)).filter((item, idx, self) => self.indexOf(item) == idx);
    for (i = 0; i < n.length; i++){
      arr.push(proj.name + " #" + n[i]);
    }
}
function Proj(name, supply, max){
    this.name = name;
    this.supply = supply;
    this.max = max;
}
function Collection(one, two, three, four, five, six, seven, eight){
    this.one = one;
    this.two = two;
    this.three = three;
    this.four = four;
    this.five = five;
    this.six = six;
    this.seven = seven;
    this.eight = eight;
}
function collect(data){
    let maxCol = 7779;
    var all = new Array(maxCol);
    let i = 0;
    let n1 = new Array(16 * maxCol).fill().map(x => Math.round(Math.random() * (8 * maxCol))).filter((item, idx, self) => self.indexOf(item) == idx);
    while (i < (16 * maxCol)){
        all.push(new Collection(data[n1[i]], data[n1[i + 1]], data[n1[i + 2]], data[n1[i + 3]], data[n1[i + 4]], data[n1[i + 5]], data[n1[i + 6]], data[n1[i + 7]]));
        i += 8;
    }
    return all;
}
async function main() {
    maxArt = 8 * 7779;
    var god = [
        "Rock 79",
        "Twin Flames #3. Kui & Chiru Murage",
        "Twin Flames #30. Kiarah and Kayah Agudo",
        "DEAFBEEF Series 0: Synth Poems - Token 6",
        "DEAFBEEF Series 1: Angular - Token 130",
        "DEAFBEEF Series 2: Transmission - Token 143",
        "DEAFBEEF Series 3: Entropy - Token 146",
        "DEAFBEEF Series 4: Glitchbox - Token 201",
        "DEAFBEEF Series 5: Advection - Token 219",
        "Parallel Masterpiece // Alpha // Ashes to Ashes",
        "Parallel Masterpiece // Alpha // Cytokinesis",
        "CRYPTO IS BULLSHIT",
        "GIGACHAD #42/100",
        "GIGACHAD #69/100",
        "THE COMPLETE MF COLLECTION",
        "A Cube",
        "The Pixel",
        "The Lucky",
        "Death of Narcissus"
    ];
    var demiGod = [
        new Proj("Chromie Squiggle", 91, 9175),
        new Proj("Singularity", 10, 1024),
        new Proj("Fidenza", 10, 999),
        new Proj("Archetype", 10, 600),
        new Proj("dino pals", 10, 100),
        new Proj("sail-o-bots", 10, 750),
        new Proj("Ringers", 10, 1000),
        new Proj("Unigrids", 10, 421),
        new Proj("Elevated Deconstruction", 2, 200),
        new Proj("Ecumenopolis", 6, 676),
        new Proj("Subscapes", 7, 650),
        new Proj("The Eternal Pump", 2, 50),
        new Proj("Portal", 2, 10),
        new Proj("View Card", 2, 41),
        new Proj("CryptoPunk", 200, 10000),
        new Proj("Autoglyph", 2, 512),
        new Proj("Bored Ape Yacht Club", 300, 10000),
        new Proj("Mutant Ape Yacht Club", 300, 15054),
        new Proj("Pudgy Penguin", 600, 8888),
        new Proj("Cool Cat", 600, 10000),
        new Proj("0N1", 600, 7777),
        new Proj("FVCK_CRYSTAL//", 42, 4169),
        new Proj("Cypher", 11, 1024),
        new Proj("Scribbled Boundaries", 10, 1024),
        new Proj("Creature", 600, 9999)
    ];
    var mid = [
        new Proj("CyberKongz VX", 2000, 13061),
        new Proj("Meebit", 2000, 20000),
        new Proj("BASTARD GAN PUNKS V2", 2000, 11304),
        new Proj("Stoner Cat", 2000, 10420),
        new Proj("Visitor", 2000, 10001),
        new Proj("Wicked Cranium", 2000, 10762),
        new Proj("MoonCat", 1000, 25600),
        new Proj("DystoPunk V2", 1000, 2077),
        new Proj("Agent", 2000, 9999),
        new Proj("EVOL", 2000, 8888),
        new Proj("Bomb", 2000, 25000),
        new Proj("CryptoSerg", 600, 1104),

    ];
    var low = [
        new Proj("Lonely Alien", 4500, 10001),
        new Proj("BullsOnTheBlock", 5000, 10000),
        new Proj("Party Penguin", 5000, 10000),
        new Proj("Alien Boy", 5000, 10000),
        new Proj("Animeta", 4000, 10101),
        new Proj("Lazy Lion", 5000, 10080),
        new Proj("Goon", 5000, 9696),
        new Proj("Star Sailor Siblings", 4000, 10100),
        new Proj("Phunk", 5000, 10000),
        new Proj("Chad", 5000, 9886),
        new Proj("Incognito", 4000, 9995)

    ];
    const data = [];
    let sum = 0;
    for (i = 0; i < god.length; i++){
        data.push(god[i]);
    }
    for (j = 0; j < demiGod.length; j++){
        populate(demiGod[j], data);
    }
    for (j = 0; j < mid.length; j++){
        populate(mid[j], data);
    }
    for (j = 0; j < low.length; j++){
        populate(low[j], data);
    }
    sum = data.length;
    var all = collect(data);
    for (i = 0; i < all.length; i++){
        console.log(all[i]);
    }
}



main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });