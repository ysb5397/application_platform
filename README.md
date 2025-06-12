![image](https://github.com/user-attachments/assets/4dbfb326-005a-4f5f-9dd0-44b4358d7bf2)
![image](https://github.com/user-attachments/assets/28863b65-fb6d-4e4d-9e0a-345266b3ffe0)
![image](https://github.com/user-attachments/assets/f634c77d-e45f-44c2-8efa-8c99ea3b858a)
![image](https://github.com/user-attachments/assets/5fc94532-3389-47aa-804e-45f46e17be98)

-- 데이터베이스 생성 및 사용
CREATE DATABASE IF NOT EXISTS application_platform;
USE application_platform;

-- 기존 테이블 삭제
DROP TABLE platform;
DROP TABLE application;
DROP TABLE users;

-- users 테이블 생성
CREATE TABLE users (
    user_pk INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    user_id VARCHAR(50) NOT NULL UNIQUE,
    user_name VARCHAR(5) NOT NULL UNIQUE,
    user_pw VARCHAR(50) NOT NULL
);

-- users 테이블에 샘플 데이터 삽입
INSERT INTO users (user_id, user_name, user_pw) VALUES
('apple123', '김철수', 'password123'),
('blueSky', '이영희', 'qwerty456'),
('mintTea22', '박민수', 'abcde789'),
('sunflower', '정다은', 'securepass1'),
('happyDays', '한지훈', 'mypassword!@');

-- application 테이블 생성 (birth_date 로 수정)
CREATE TABLE application (
    application_pk INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(50) NOT NULL,
    name VARCHAR(5) NOT NULL,
    email VARCHAR(50) NOT NULL,
    birth_date INT(8) NOT NULL,
    call_number VARCHAR(13) NOT NULL UNIQUE,
    address VARCHAR(50) NOT NULL,
    job VARCHAR(50),
    skill VARCHAR(50),
    career ENUM('신입', '경력') NOT NULL,
    FOREIGN KEY (name) REFERENCES users(user_name)
);

-- application 테이블에 샘플 데이터 삽입  
-- users 테이블의 user_name 값과 일치하도록 수정
INSERT INTO application (title, name, email, birth_date, call_number, address, job, skill, career)
VALUES
('Software_Engineer_20250609', '김철수', 'chulsoo.kim@example.com', 19920315, '1023456789', '서울시 강남구', '백엔드 개발자', 'Java, Spring, MySQL', '신입'),
('Data_Analyst_20250609', '이영희', 'younghee.lee@example.com', 19900822, '1098765432', '부산시 해운대구', '데이터 분석가', 'Python, R, SQL', '경력'),
('Web_Developer_20250609', '박민수', 'minsu.park@example.com', 19951130, '1011121314', '인천시 연수구', '프론트엔드 개발자', 'HTML, CSS, JavaScript', '경력'),
('System_Admin_20250609', '정다은', 'daeun.jung@example.com', 19870801, '1099887766', '대구시 중구', '시스템 엔지니어', 'Linux, Bash, AWS', '경력'),
('AI_Researcher_20250609', '한지훈', 'jihun.han@example.com', 19951018, '1055512345', '대전시 서구', '머신러닝 엔지니어', 'Python, TensorFlow, NLP', '신입');

-- platform 테이블 생성
CREATE TABLE platform (
    platform_pk INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(5) NOT NULL,  -- FK 참조 대상의 길이에 맞춤 (users.user_name)
    title VARCHAR(50) NOT NULL,
    career ENUM('신입', '경력') NOT NULL,
    address VARCHAR(50) NOT NULL,
    skill VARCHAR(50),
    FOREIGN KEY (name) REFERENCES users(user_name)
    -- application 테이블과의 추가 FK는 참조 컬럼이 유니크하지 않으므로 제거함.
);

-- platform 테이블에 샘플 데이터 삽입  
-- application의 title 형식과 별개로, 사용자의 이름 값을 FK로 넣어야 하므로 users의 user_name 사용.
INSERT INTO platform (name, title, career, address, skill) VALUES
('김철수', 'Software_Engineer_20250612', '신입', '서울시 강남구', 'Java, Spring'),
('이영희', 'Data_Analyst_20250612', '경력', '부산시 해운대구', 'Photoshop, Illustrator'),
('박민수', 'Web_Developer_20250612', '신입', '대전시 서구', 'Python, SQL'),
('정다은', 'System_Admin_20250612', '경력', '인천시 연수구', 'UX/UI, Figma'),
('한지훈', 'AI_Researcher_20250612', '신입', '대구시 중구', 'Network Security, Ethical Hacking');
