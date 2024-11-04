// STRING FINDING 


// INDEX OF

// index of method s ham koi b value denge string ki (HELLO WORLD) ab agar mjhe world ki string ka starting index chahaiye k mra world pure
 // line m kon s index pr h to mjhe woh starting index WORLD ka index return krega


//  JavaScript mein indexOf method ka istemal kisi string mein kisi khaas substring ya character ka pehla index hasil karne ke liye hota hai.
// Agar woh substring string mein nahi milta, to yeh -1 wapas karta hai.

// Wazahat:

// Istamal: string.indexOf(searchValue, startIndex)

// Arguments:

// searchValue: Yeh wo substring ya character hai jise aap dhoondh rahe hain.
// startIndex (optional): Yeh ek number hai jo batata hai ke dhoondhne ka amal kahan se shuru karna hai. Default value 0 hoti hai.
// Return Value:
// Yeh method pehla index wapas karta hai jahan searchValue paaya gaya. Agar nahi milta, to -1 wapas karta hai.

// Misal:

// javascript


// let text = "Hello, world!";
// let index1 = text.indexOf("o");       // 4 hasil karega (pehla 'o')
// let index2 = text.indexOf("l");       // 2 hasil karega (pehla 'l')
// let index3 = text.indexOf("world");   // 7 hasil karega
// let index4 = text.indexOf("x");       // -1 hasil karega (kya nahi milta)
// let index5 = text.indexOf("o", 5);    // 8 hasil karega (5 se shuru karke)

// Ahem Nukat:

// indexOf method case-sensitive hota hai, yani "H" aur "h" alag samjha jata hai.
// Aap is method ko kisi string mein kisi bhi character ya substring ko dhoondhne ke liye asani se istemal kar sakte hain.
// Agar aapko mazeed wazahat ya examples chahiyein, to zaroor poochain!









//  let str = "HELLO WORLD";
//  let index = str.indexOf ("WORLD");
//  console.log(index);

 // OUTPUT ............ 6



 
                 //////////////................../////////////////...................../////////////////// 




// let str = 'saylani mass IT training';
// let index1 = str.indexOf ('mass')
// console.log(index1);


 // OUTPUT ............ 8





                //////////////................../////////////////...................../////////////////// 



// let products = ['concealer' , ' foundation' ,  'mascara' , 'powder' , 'eyeliner'];

// let find = prompt('what do you want to buy' , products)

// let customer = products.indexOf('mascara')

// console.log(customer);


 // OUTPUT ............ 2



                 //////////////................../////////////////...................../////////////////// 



// let find2 = prompt('what do you want to buy' + '\n \n concealer \n foundation \n mascara \n powder \n eyeliner')


// if (find2 == find2){
//     document.write('here your \n' , find2 , '\n go to counter and pay')
// }else{
//     document.write('sorry maam we,re out of stalk')
// }


// mascara 

 // OUTPUT ............ here your mascara go to counter and pay



                 //////////////................../////////////////...................../////////////////// 



// let products = ['concealer' , ' foundation' ,  'mascara' , 'powder' , 'eyeliner'];

// let find2 = prompt('what do you want to buy' + '\n \n concealer \n foundation \n mascara \n powder \n eyeliner')

// for (let i = 0 ; i <=products.length ; i++){

// }if (find2 == products[i]){

//     document.write('here your product');

// }else{
//     ('were out of stalk')
// }



                 //////////////................../////////////////...................../////////////////// 
                 //////////////................../////////////////...................../////////////////// 
                 //////////////................../////////////////...................../////////////////// 
                 //////////////................../////////////////...................../////////////////// 





// charAT METHOD


// JavaScript mein charAt method string ke ek khaas index par maujood character ko hasil karne ke liye istemal hota hai.
// Yeh method string object ka part hai aur isay aise istemal kiya jata hai:

// Wazahat:

// Istamal: string.charAt(index)

// Argument: Yeh ek number (integer) argument leta hai jo index ki nishandahi karta hai. Yaad rahe ke index zero se shuru hota hai.
// Return Value: Yeh specified index par maujood character ko wapas karta hai. Agar index string ki lambai se zyada ho, to yeh khali string ("") wapas karega.

// Misal:

// javascript


// let text = "Hello";

// let firstCharacter = text.charAt(0); // 'H' hasil karega
// let secondCharacter = text.charAt(1); // 'e' hasil karega
// let lastCharacter = text.charAt(4);    // 'o' hasil karega
// let outOfBounds = text.charAt(10);     // '' (khali string) hasil karega

// Ahem Nukat:

// Hamesha yaad rahe ke index 0 se shuru hota hai.
// Agar aap negative index ya index jo string ki lambai se zyada hai use karte hain, to yeh khali string wapas karega.
// Agar aapko mazeed wazahat ya examples chahiyein, to zaroor poochain!



                //////////////................../////////////////...................../////////////////// 


// let str = "hello world";

// let char = str.charAt(6)

// console.log(char);

// output ............. w



                //////////////................../////////////////...................../////////////////// 



// let password = 'mysecretpaswword';

// if(isNaN(password.charAt(0))){

//     document.write("<br>" , "password verified!" , "<br>")
// }

// else{
//     document.write("<br>" , "password must start with a latter", "<br>")
// }



                //////////////................../////////////////...................../////////////////// 



// let str = "hello world javascript";
// console.log(str);
// console.log(str.indexOf('world'));


// OUTPUT ............ 6



                //////////////................../////////////////...................../////////////////// 



// jab hmre pas ek jse ek ya ek s zyadah same words honge to woh last ka detect kr k uska ndex dega hmen 


// let str = "hello world javascript world";
// console.log(str);
// console.log(str.indexOf('world'));


// OUTPUT ............ 23



                //////////////................../////////////////...................../////////////////// 




// TO STRING ...................


// let num = 56 ;
// console.log(num);
// console.log(num.toString());


// output hamara 56 hi rhega lkn backand pr wh as a string kam k rha hga 




                //////////////................../////////////////...................../////////////////// 




// let bool = false

// console.log(bool);

// console.log(bool.toString());


// OUTPUT .............. false false



                //////////////................../////////////////...................../////////////////// 


// let fruit = [ " apple" , "banana" , "cherry"];

// console.log(fruit);

// console.log(fruit.toString());


// OUTPUT .................. 
// (3) [' apple', 'banana', 'cherry']
// main.js:258  apple,banana,cherry




                //////////////................../////////////////...................../////////////////// 




// let veggies = [ "potato" , "tomato"];
// let fruits = ["banana" , "water melon"];
// let packageFruit = ["nuggets", "fries"];

// document.write(vaggies + fruits + packageFruit)//////////////////

// let shopList = fruits.concat(veggies,packageFruit)

// console.log(shopList);

// console.log(fruits); //////////////////////


// OUTPUT ............

// 0"banana"
// 1"water melon"
// 2"potato"
// 3"tomato"
// 4"nuggets"
// 5"fries"
// length 6


                //////////////................../////////////////...................../////////////////// 



// let greet = "Assalam u alaikum"
// let name = prompt['what is your name'];
// let gender = prompt['what is your gender']

// gender = gender.toLowerCase();

// // let arr = greet.concat(name)

// if (gender =="female"){
//     document.write("ma'am" , arr )
// } else if (gender == "male" ) {
//     document.write(greet.concat , "sir" , arr)
// }

// change 




                //////////////................../////////////////...................../////////////////// 



// MUTABLE ...........................................


// let vehicle = [ "car" , "cycle" , "airplane"]

// console.log(vehicle);

// vehicle[0] = "bus"

// 0"bus"
// 1"cycle"
// 2"airplane"
// length 3


// console.log(vehicle);

// 0"bus"
// 1"cycle"
// 2 "airplane"
// length 3



// IMMUTABLE .............................................................................................



// let language = "javascript";
// language [0] = 'g'
// console.log(language);


// yahan change nh hga qk yh immutable 





// REPLACE ...................................................................................................




// let str = 'javascript'

// console.log(str.replace("java" , "gava"));


// OUTPUT ............... gavascript



                //////////////................../////////////////...................../////////////////// 





// REPLACE ALL ...................................



// let str = "hello world war II  , welcome to our world war II"


// console.log(str.replaceAll('world war ' , 'second world war'));



// oOUTPUT ................................... hello second world warII  , welcome to our second world warII
