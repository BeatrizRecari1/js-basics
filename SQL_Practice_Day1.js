// 2. Create a table of 3 of your favorite television shows, including the name of the show, favorite actor/actress, where it plays (netflix, cable, etc.), and the genre.
//- Run a query to print all of the show names.

CREATE TABLE tv_shows (
    show_id CHAR (3)
    show VARCHAR(40),
    favorite_actor_name VARCHAR(50),
    platform_name VARCHAR(40),
    genre VARCHAR(40)
);

INSERT INTO tv_shows values ("1", "Emily in Paris", "Emily Collins", "Netflix", "Romance");
INSERT INTO tv_shows values ("2", "Homeland", "Leonardo DiCaprio", "cable", "Drama");
INSERT INTO tv_shows values ("3", "Jack Ryan", "Brad Pitt", "Hulu", "Action");

// 3. Create a table of your favorite actor/actress from each tv show chosen. Include his or her first name, last name, tv show, and name of character played.
// -Run a query to print the character names.

CREATE TABLE favorite_actor (
    first_name VARCHAR (50),
    last_name VARCHAR (50),
    tv_show VARCHAR (50),
    character_name VARCHAR (50)
);

INSERT INTO favorite_actor values ("Emily", "Collins", "Emily in Paris", "Emily");
INSERT INTO favorite_actor values ("Leonardo", "DiCaprio", "HomeLand", "Jack");
INSERT INTO favorite_actor values ("Brad", "Pitt", "Jack Ryan", "Jack");