const msg = "Hello world!" // simple string
console.log(msg); 
console.log("datatype=====>>>", typeof msg);
console.log("substring======>>>>>>", msg.substring(0, 5)) // only hello will be display
console.log("chatAt=====>>>>", msg.charAt(0)) // identify what charater is in the 0 position
console.log("rouppercase=====>>>>", msg.toUpperCase()) // convert it to uppercase
console.log("tolowercase=====>>>>", msg.toLowerCase()) // convert it to lowercase
console.log("replace=====>>>>", msg.replace("world", "universe")) // convert world to universe
console.log("inludes=====>>>>", msg.includes("Hello")) // tell that is Hello includes or not
console.log("indexOf=====>>>>", msg.indexOf("H")) // tell the index number of H


const trim = "      Hammad      "
console.log("original string====>>>>", trim);
console.log("trim====>>>>", trim.trim());

const str = new String("Hammad") // it creates an object
console.log(str); 
console.log("datatype=====>>>>>>>", typeof str); 
console.log(`${str[0]}${str[1]}${str[2]}${str[3]}${str[4]}${str[5]}`);


