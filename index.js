// creates the prompt for the user on the website
const userInputString = prompt(
  "Please enter the flavors you want, separated by commas.",
  "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);

// create a function to hold all the logic
const orderOrganizer = (userOrder) => {
  // splits the input into an array
  const stringArray = userOrder.split(",");

  // declare an object to hold the key-value pairs to be displayed as a table
  const froyoOrder = {};

  //.forEach will loop through the stringArray one by one
  stringArray.forEach((flavor) => {
    // if flavor (each element in the array) is already in the froyo order, it will add one to the value of that key
    // .replace(/\s/g, "") will eliminate empty space outside the string, so it accounts for the commas in the input
    if (flavor.replace(/\s/g, "") in froyoOrder) {
      froyoOrder[flavor.replace(/\s/g, "")]++;
      // if flavor is not, it will add the flavor to the froyoOrder object with a value of 1
    } else {
      froyoOrder[flavor.replace(/\s/g, "")] = 1;
    }
  });
  //declare a variable to hold the console.table of the froyoOrder object, then return it
  let orderTable = console.table(froyoOrder);
  return orderTable;
};

orderOrganizer(userInputString);
