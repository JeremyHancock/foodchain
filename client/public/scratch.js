let entry = {
  product_name: "Apple",
  product_locations: ["powhatan", "hanover", "cumberland", "powhatan"],
  company_names: [
    "happy farms",
    "food dist., inc",
    "dist food, llc.",
    "Food Lion 021"
  ],
  link_createdAt: ["sunday", "wednesday", "thursday", "yesterday"]
};

console.log("product: " + entry.product_name);
console.log("itinerary");
console.log("-----------------");

console.log("origin: " + entry.company_names[0]);
console.log("location: " + entry.product_locations[0]);
console.log("on: " + entry.link_createdAt[0]);
console.log("-----------------");

let lastNames = entry.company_names.slice(1, entry.company_names.length);
let lastLocs = entry.product_locations.slice(1, entry.product_locations.length);;
let lastLinks = entry.link_createdAt.slice(1, entry.link_createdAt.length);

// console.log(lastNames);
// console.log(entry.company_names);

for (i = 0; i < lastLocs.length; i++) {
  console.log("stop: " + lastNames[i]);
  console.log("location: " + lastLocs[i]);
  console.log("on: " + lastLinks[i]);
  console.log("-----------------");
}

const name = entry.product_name;
const companies = entry.company_names.map(company => {
  // return <p> {company} </p>;
});

const locations = entry.product_locations.map(location => {
  // return <p> {location} </p>;
});

renderDom => {
  let newDiv = document.createElement("div");
  let newH = document.createElement("p");
  let prodText = document.createTextNode(
    `This ${name} was produced at ${entry.company_names[0]} in ${
      entry.product_locations[0]
    }`
  );
};
