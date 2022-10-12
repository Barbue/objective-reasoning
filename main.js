// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘

/* 
isAdmin
parameters: user object

user = {
    firstName: string
    lastName: string
    userRole: string
}
return boolean - true or false

(userRole === ADMIN)
*/

// isAdmin

let user1 = {
firstName: 'Eileen',
lastName: 'Smith',
userRole: 'REGULAR_USER'
}
let user2 = {
firstName: 'Lucien',
lastName: 'Gaudet',
userRole: 'ADMI'
}
let user3 = {
firstName: 'Romain',
lastName: 'Louviere',
userRole: 'ADMIN'
}

function isAdmin(user){
       if(user.userRole === 'ADMIN'){
        return true;
       }else{return false
       }
}
console.log(isAdmin(user3));



// 2. getEmail

let user = {
    firstName: 'David',
    lastName: 'Crochet',
  }
function getEmail(user1){
       let emailUser = user1.firstName + '.' + user1.lastName + '@codeimmersives.com'
    
       return emailUser.toLowerCase()
}
console.log(getEmail(user))


// 3. getPlaylistLength

let playList1 = { name: 'my jams',
songs: ['Vienna', 'Hey Ya!']}

let playList2 = { name: 'hits',
    songs: ['The Distance', 'Ruby Tuesday', 'Old Town Road (remix)']
}
let playList3 = {
    name: 'empty playlist',
    songs: []
}

function getPlaylistLength(playlist){

       return playlist.songs.length
}
console.log(getPlaylistLength(playList2));



// 4. getHardestHomeworks

/*
parameters: homework array
homework = {
    name: string
    averageScore: number
}

return type: string
*/

let homeWork1 = [{
    name: 'homework 1', averageScore: 99 },
  { name: 'homework 2', averageScore: 1 }
]

let homeWork2 = [
    { name: 'hip-hip-array', averageScore: 12 },
    { name: 'wait-i-object', averageScore: 200 },
    { name: 'objective-reasoning', averageScore: 25 }
]

let homeWork3 = []


function getHardestHomework(homeworkArray){

       if(homeworkArray.length === 0){
        return '';
    }  //error check
    
       let lowestHw = homeworkArray[0];  //hw object
       for(let i = 0; i < homeworkArray.length; i++){
       if(homeworkArray[i].averageScore < lowestHw.averageScore){
            lowestHw = homeworkArray[i];
       }
}
       return lowestHw.name;
    
}
console.log(getHardestHomework(homeWork1))







// 5. createPhonebook

/*
parameters: namesArray - strings
numbersArray - strings

return phonebook object

{
    string: string - in the following format:
    'name':'number'
}
*/


let names = ['Jimothy', 'Maria', 'Karl']

let nums = ['123-456-7890','000-000-0000','999-888-7766']


function createPhonebook(namesArray,numbersArray){

       let phonebook = {};
       for(let i = 0; i < namesArray.length;i++){
       phonebook[namesArray[i]] = numbersArray[i]
}

      return phonebook;
}
console.log(createPhonebook(names,nums))




































// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof isAdmin === 'undefined') {
    isAdmin = undefined;
}
if (typeof getEmail === 'undefined') {
    getEmail = undefined;
}
if (typeof getPlaylistLength === 'undefined') {
    getPlaylistLength = undefined;
}
if (typeof getHardestHomework === 'undefined') {
    getHardestHomework = undefined;
}
if (typeof createPhonebook === 'undefined') {
    createPhonebook = undefined;
}

module.exports = {
    isAdmin,
    getEmail,
    getPlaylistLength,
    getHardestHomework,
    createPhonebook
};