// Typescripts has a special types that dont refer to a specific type

let u = true
// u = "String" // Error : type 'string' is not assignable to type 'boolean'
// Math.round(U) // Error: AArgument of type 'boolean' is not assignable to parameter of type 'number

let w: unknown = 1;
w = "string"; // no error
w = {
  runANonExistentMethod: () => {
    console.log("I think therefore I am");
  }
} as { runANonExistentMethod: () => void}
// How can we avoid the error for the code commented out below when we don't know the type?
// w.runANonExistentMethod(); // Error: Object is of type 'unknown'.
if(typeof w === 'object' && w !== null) {
  (w as { runANonExistentMethod: Function }).runANonExistentMethod();
}
// Although we have to cast multiple times we can do a check in the if to secure our type and have a safer casting 

// TYPE NEVER
// never effectively throws an error whenever it is defined.