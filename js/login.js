let doc;
function logIn() {
    let id = document.getElementById('userid').value;
    let pw = document.getElementById('password').value;

    if (id === null) {
        alert('아이디는 필수 입력값입니다.');
        return;
    } else if (pw === null) {
        alert('비밀번호는 필수 입력값입니다.');
        return;
    }

    doc = localStorage.getItem(id);
    doc = JSON.parse(doc);

    console.log(doc);

    if (doc === null || id !== doc.id || pw !== doc.pw) {
        alert("일치하는 회원 정보가 없습니다.");
        console.error("회원가입을 먼저 진행해주세요.");
    } else {
        alert("로그인 성공");
        console.log("로그인 성공");
        window.location.href = "list.html";
    }   
}