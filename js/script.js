let user1 = { 
    name: prompt("please enter the first person's name") , 
    age: +prompt("please enter the age of him" )
}
let user2 = { 
    name: prompt("please enter the second person's name") , 
    age: +prompt("please enter the age of him 2" )
}
let str = "older than"
let str2 = "and "
let str3 = "are the same age" 
if( user1.age > user2.age ){
    user1.name = user1.name +" "
    result = user1.name + str + user2.name
    alert( result )
}else if(user1.age == user2.age ){
    user1.name = user1.name +"  "
    result = user1.name + str2 + user2.name +str3
    alert( result )
}else{
    user2.name = user2.name +"  "
    result = user2.name + user1.name + str
    alert( result )
}