/**Promise is Javascript object for asynchronous operation
1. 상태(프로세스가 무거운 작업을 수행중인지, 기능 수행이 완료되어 성공했는지 or 실패했는지)
   에 대한 이해가 중요
2. producer와 consumer의 차이점을 잘 이해

State : pending -> fulfilled or rejected
Producer vs Consumer
*/

/**1.Producer
when new Promise is created, the executor runs automatically.
Promise가 만들어진 순간 안의 내용이 실행됨.
*/
const promise = new Promise((resolve, reject)=>{
   //doing some heavy work(network, read files)
   console.log('doing something...');
   setTimeout(() => {
      resolve('\"성공적으로 작업 수행시 promise에서 보내는값\"'); // 작업이 성공적으로 수행됐다면 resolve 콜백 함수를 호출
      //reject(()=>Error('no network'));
   },2000);
});

/** 2. Consumers: then, catch, finally */

promise 
   .then((value)=>{ 
      console.log(value+"을 출력했습니다");
   })
// 수행이 정상적으로 된다면 값을 받아온다
//value 값에는 위의 promise가 잘 수행된다면 실행되는 콜백함수인 resolve가 보내주는
//값을 받아온다.
   .catch((error)=>{
      console.log('네트워크 연결에 실패했습니다.')
   })
   .finally(()=>{
      console.log('무조건 출력되는 finally 문장.')
   });

//3. Promise chaining

const fetchNumber = new Promise((resolve,reject)=>{
   setTimeout(()=>resolve(1), 1000);
});

fetchNumber
   .then(num => num*2)
   .then(num => num*3)
   .then(num=>{
      return new Promise((resolve,reject)=>{
         setTimeout(()=>resolve(num-1),1000);
      });
   })
   .then(num=>console.log(num));


//4. Error Handling


   const getHen = () => 
      new Promise((resolve,reject)=> {
      setTimeout(()=>resolve('chicken🐓'),1000);
      });
   const getEgg = hen => 
      // new Promise((resolve,reject)=> {
      // setTimeout(()=>resolve(`${hen} => egg🥚`,1000));
      // });
      new Promise((resolve,reject)=> {
      setTimeout(()=>reject(new Error(`Error! => egg🥚`)),1000);
      });

   const getFood = egg =>
      new Promise((resolve,reject)=> {
      setTimeout(()=>resolve(`${egg}=> Fried Egg🍳`,1000));
      });

   getHen()
      .then(hen => getEgg(hen)) // = .then(getEgg)
      .catch(error => {
         return '🍤';
      })
      .then(egg => getFood(egg)) // = .then(getFood)
      .then(meal => console.log(meal)) // = .then(console.log)
      
      .catch(console.log);
      

/**
   getHen()
      .then(getEgg)
      .then(getFood)
      .then(console.log);
*/
