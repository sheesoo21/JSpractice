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
    await delay(2000);
    
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

//3. useful APIs 
function pickAllFruits(){
    return Promise.all([getApple(), getBanana()]).then(fruits=>
        fruits.join(' + '));
} //Promise안에 내장된 all이라는 API는 프로미스들의 배열을 인수로 받는데
//이렇게 보내진 프로미스들을 동시에 병렬실행한다.
//.join은 전달받은 인수(배열)을 String 타입으로 묶는 기능을 한다.

pickAllFruits().then(console.log);

function pickOnlyOne(){
    return Promise.race([getApple(), getBanana()]);
} //promise안에 내장된 race라는 api는 배열로 전달된 프로미스들 중
//가장 먼저 결과값을 반환하는 것을 단 하나만 리턴하는 기능을 한다.
pickOnlyOne().then(console.log);

