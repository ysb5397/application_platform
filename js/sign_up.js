window.onload = function() {
    setInterval(checkPw, 100);
}

function checkPw() {
    let pw = document.getElementById('sign--up--pw').value;
    let pwContainer = document.querySelector('.input--pw--container');

    let checkCondition;
    if (pw.length === 0) {
        pwContainer.classList.remove('warn', 'caution', 'safe');
    } else if (pw.length < 5) {
        checkCondition = pwContainer.classList.contains('warn');
        if (!checkCondition) {
            pwContainer.classList.remove('caution', 'safe');
            pwContainer.classList.toggle('warn');
        }
    } else if (pw.length < 9) {
        checkCondition = pwContainer.classList.contains('caution');
        if (!checkCondition) {
            pwContainer.classList.remove('warn', 'safe');
            pwContainer.classList.toggle('caution');
        }
    } else {
        checkCondition = pwContainer.classList.contains('safe');
        if(!checkCondition) {
            pwContainer.classList.remove('warn', 'caution');
            pwContainer.classList.toggle('safe');
        }
    }
}

let doc;
let isIdOkay = false;
function checkId() {
    document.getElementById('id--null').style.display = 'none';
    document.getElementById('duplicate').style.display = 'none';
    document.getElementById('success').style.display = 'none';
    document.getElementById('name--null').style.display = 'none';
    document.getElementById('pw--null').style.display = 'none';
    document.getElementById('repeat--pw--null').style.display = 'none';
    document.getElementById('pw--not--same').style.display = 'none';

    let id = document.getElementById("sign--up--id").value;
    console.log(id);

    doc = localStorage.getItem(id);
    doc = JSON.parse(doc);
    console.log(doc);

    if (doc === null) {
        if (id === '') {
            document.getElementById('id--null').style.display = 'flex';
            console.error('아이디값 누락 오류');
        } else {
            document.getElementById('success').style.display = 'flex';
            console.log('사용 가능한 아이디 입력됨 ✔');
            isIdOkay = true;
        }
    } else {
        if (id === doc.id) {
            document.getElementById('duplicate').style.display = 'flex';
            console.error('중복된 아이디 오류');
        } else if (id === '') {
            document.getElementById('id--null').style.display = 'flex';
            console.error('아이디값 누락 오류');
        }
    }
}

let isPwOkay = false;
function signUp() {
    document.getElementById('id--null').style.display = 'none';
    document.getElementById('duplicate').style.display = 'none';
    document.getElementById('success').style.display = 'none';
    document.getElementById('name--null').style.display = 'none';
    document.getElementById('pw--null').style.display = 'none';
    document.getElementById('repeat--pw--null').style.display = 'none';
    document.getElementById('pw--not--same').style.display = 'none';

    let id = document.getElementById('sign--up--id').value;
    if (id) {
        isIdOkay = true;
    } else {
        isIdOkay = false;
    }

    let name = document.getElementById('sign--up--name').value;
    console.log(name);

    let pw = document.getElementById('sign--up--pw').value;
    
    if (pw) {
        isPwOkay = true;
    } else {
        isPwOkay = false;
    }

    let pwCheck = document.getElementById('repeat--pw').value;

    if (!isIdOkay) {
        document.getElementById('id--null').style.display = 'flex';
        console.error('아이디값 누락 오류');
    } else if (name === '') {
        document.getElementById('name--null').style.display = 'flex';
        console.error('이름 비어있음');
    } else if (!isPwOkay) {
        document.getElementById('pw--null').style.display = 'flex';
        console.error('비밀번호값 누락 오류');
    } else if (pwCheck === '') {
        document.getElementById('repeat--pw--null').style.display = 'flex';
        console.error('비밀번호 재확인 누락');
    } else if (pw !== pwCheck) {
        document.getElementById('pw--not--same').style.display = 'flex';
        console.error('비밀번호가 일치하지 않습니다.');
    } else {
        doc = {
            id: id,
            name: name,
            pw: pw
        }
        console.log(doc);

        doc = JSON.stringify(doc);
        localStorage.setItem(id, doc);

        alert('회원가입 완료!');

        // 해당 파일 또는 링크로 이동 하는 코드
        window.location.href = "login.html";
    }
}
