//callback hell example

class Userstorage {
    loginUser(id, password) {
        return new Promise((resolve,reject)=>{
            setTimeout(() => {
                if (
                    (id === 'sheesoo21' && password === 'oracle') ||
                    (id === 'coder' && password === 'academy')
                ) {
                    resolve(id);
                } else {
                    reject(new Error('not found'));
                }
            }, 2000);
        })
    }

    getRoles(user) {
        return new Promise((resolve,reject)=>{
            setTimeout(() => {
                if (user === 'sheesoo21') {
                    resolve({ name: 'sheesoo21', role: 'admin' });
                } else {
                    reject(new Error('no access'));
                }
            }, 1000);
        })
    }
}

const userStorage = new Userstorage();
const id = prompt('아이디를 입력하세요');
const password = prompt('비밀번호를 입력하세요');

userStorage.loginUser(id,password)
    .then(userStorage.getRoles)
    .then(user=>{alert(`Hello ${user.name}, you have a ${user.role} role`);})
    .catch(console.log)



