const mongoose = require("mongoose");
const Chat = require("./models/chat.js");
main()
.then(() => {
  console.log("connection successful");

})
.catch((err) => {
  console.log(err);
})


async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp')
}


let allChats = [
  {
    from:"ganesh",
    to: "abhishak",
    msg:"chala ga ghum na",
    created_at: new Date(),
  },
  {
    from:  "shivyanshi",
    to: "ganesh",
    msg : "hi kal call kyu nhi kiyaa thaa",
    created_at: new Date(),
  },
  {
    from: "ganesh",
    to: "swati",
    msg: "di paisa bhejo na kuch",
    created_at : new Date(),
  } ,
   {
    from:"ganesh",
    to: "abhishak",
    msg:"kuch khaya ga",
    created_at: new Date(),
  },
  {
    from:  "shivyanshi",
    to: "ganesh",
    msg : "kya kar rha haa ji",
    created_at: new Date(),
  },
  {
    from: "ganesh",
    to: "swati",
    msg: "kya kar rhi hai",
    created_at : new Date(),
  } 
];

Chat.insertMany(allChats);