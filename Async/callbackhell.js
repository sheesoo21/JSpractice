//callback hell example

class Userstorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if (
                (id === 'sheesoo21' && password === 'oracle') ||
                (id === 'coder' && password === 'academy')
            ) {
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if (user === 'sheesoo21') {
                onSuccess({ name: 'sheesoo21', role: 'admin' });
            } else {
                onError(new Error('no access'));
            }
        }, 1000);
    }
}

const userStorage = new Userstorage();
const id = prompt('아이디를 입력하세요');
const password = prompt('비밀번호를 입력하세요');
userStorage.loginUser(
    id,
    password,
    user => {
        userStorage.getRoles(
            user,
            userWithRole => {
                alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
                //여기서 작은따옴표가 아니라 백틱(`)을 쓴것에 주의하자.
                //${something} 표현은 변수나 연산 등을 삽입할때 쓰는 구문이다.
            },
            error => {
                console.log('error!')
            })
        },
 
    
    error => {
    console.log(error)
    }
);
