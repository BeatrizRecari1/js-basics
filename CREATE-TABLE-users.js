CREATE TABLE users (
    ID INT Primary Key NOT NULL auto_increment,

    Store_ID CHAR(10),
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    gender VARCHAR(20),
    email VARCHAR(50),
    birthday CHAR(10),
    phone VARCHAR(20)
); 

INSERT INTO users values("1","bcc91", "Jiho", "Sohn", "m", "email@email.com", "1976/06/07", "410-410-4101");
INSERT INTO users values("2", "bcc95", "Brid", "gette","f", "beransus@gmail.com", "1987/04/21", "786-863-7342");
INSERT INTO users values("3", "bcc93", "Natalie", "Gulbis","f", "ng@hotmail.com", "1985/03/19", "563-913-2408");



SELECT * FROM users;

SELECT COUNT(EMAIL) FROM users; 

SELECT DISTINCT email FROM users;

SELECT DISTINCT count(email) FROM users;

SELECT first_name,  last_name, email FROM users;

SELECT * FROM users WHERE gender="m";

SELECT * FROM users WHERE id>="3";

UPDATE users SET first_name = "Jonathan" WHERE Store_ID="bcc92";

SELECT * FROM USERS;

UPDATE users SET first_name = "Jonathan" WHERE Store_Id="bcc91";

\c 

DELETE FROM users WHERE Store_ID="bcc93";

SELECT * FROM users ORDER BY birthday;

start transaction;
rollback;
commit;

EXIT;