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



let password = 'mysecretpaswword';

let firstChar = password.charAt(0);

if(firstChar == password){
    
    document.write("verified")
}else{
    document.write("password must be start with latter")
}