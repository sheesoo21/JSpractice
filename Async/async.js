// async & await
// clear style of using promise

//1.async
/**function fetchUser(){
    return new Promise((resolve,reject)=>{
        resolve ('sheesoo21');
    });
}
*/
//async 라는 키워드를 함수앞에 쓰면 코드블록이 자동으로 프로미스로 바뀐다
async function fetchUser(){
    return 'sheesoo21';
}



const user = fetchUser();
user.then(console.log)
console.log(user);

//2. await ✨✨

function delay(ms){
    return new Promise(resolve => setTimeout(resolve,ms));
}
// const example = new Promise((resolve,reject)=>{resolve('method'), reject('method2')}
async function getApple(){
    await delay(1000);
    return '🍎';
}
async function getBanana(){
    await delay(1000);
    return '🍌';
}

//delay(1000).then(getApple).then(getBanana);

async function pickFruits(){
    const apple = await getApple();
    const banana = await getBanana();
    return `${apple} + ${banana}`;
}

pickFruits().then(console.log);
console.log(pickFruits());