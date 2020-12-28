// var person = {"height":174,"job":"programmer","name" : "heesoo"}
            
            
// console.log(person);
// strpson = JSON.stringify(person);
// console.log(strpson);
// jpson = JSON.parse(strpson);
// console.log(jpson);


/**
 * 콜백 지옥 방지 promise 문법
 * setTimeout(비동기함수)
 * 성공이면 resolve, 실패면 reject
 */

//  async function sqltest (customerid, password){
//      const query = 'select * from customers where id=?, password=?'
//      const data = await conn.execute(query, [customerid, password])
     /** 결과값
      * data = rows: [{
      *     id:
      *     password:
      *     nickname:
      * },
      * {
      *     id:
      *     password:
      *     nickname:
      * }]
      */
//  }
// var myFirstPromise = new Promise((resolve,reject)=>{
//     setTimeout(function(){
//         resolve("Success!");
//     },250);
// });
// myFirstPromise.then((successMessage)=>{
//     console.log("YAY! "+successMessage);
// });

// var mySecondPromise = new Promise((resolve,reject)=>{
//     setTimeout(function(){
//     reject("FAIL!");},250);
// });
// mySecondPromise.catch((error)=>{
//     console.log("NO!"+error);
// });

// var myThirdPromise = new Promise((resolve,reject)=>{
//     setTimeout(function(){
//     reject("FAIL!");},250);
// });    
// myThirdPromise.then((error)=>{
//     console.log("NO!"+error);
// });
    
/**
function resolveAfter2Seconds(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve('resolved');
        },2000);
    });
}

async function asyncCall(){
    console.log('calling');
    const result = resolveAfter2Seconds().then((response)=>{
        console.log(response)
    });
    console.log(result);
    //expected output:'resolved'
}

asyncCall();
 */
 // 2초대기
 var resolveAfter2Seconds = function(){
     console.log("starting slow promise");
     return new Promise((resolve)=>{
         setTimeout(function(){
             resolve(20);
             console.log("slow promise is done");
         },2000);
     });
 };
 // 1초 대기
 var resolveAfter1Second = function(){
     console.log("starting fast promise")
     return new Promise((resolve)=>{
         setTimeout(function(){
             resolve(10);
             console.log("fast promise is done");
         },1000);
     });
 };
 // 시퀀스 시작
 var sequentialStart = async function(){
     console.log("==SEQUENTIAL START==");
     const slow = await resolveAfter2Seconds();
     console.log(slow);

     const fast = await resolveAfter1Second();
     console.log(fast);
    };
 var concurrentStart = async function(){
     console.log("==CONCURRENT START with await==");
     const slow = resolveAfter2Seconds();
     const fast = resolveAfter1Second();
     console.log(await slow);
     console.log(await fast);
    };

    var stillConcurrent = function(){
        console.log("CONCURRENT START with Promise.all==");
        Promise.all([resolveAfter2Seconds(),resolveAfter1Second()]).then((messages)=>{
            console.log(messages[0]); // slow
            console.log(messages[1]); // fast
        });
    };

    var parallel = function(){
        console.log("==PARALLEL with Promise.then==");
        resolveAfter2Seconds().then((message)=>console.log(message));
        resolveAfter1Second().then((message)=>console.log(message));
    };

    //sequentialStart();
    concurrentStart();