
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "troupe_code" INT
);

CREATE TABLE shakespeare_plays (
	"id" SERIAL PRIMARY KEY,
	"play"_code VARCHAR(100),
	"play_name" VARCHAR(100)
);

CREATE TABLE play_event(
	"id" SERIAL PRIMARY KEY,
	"play_id" INT REFERENCES "shakespeare_plays",
	"troupe_name" VARCHAR(255),
	"join_code" INT,
	"director_id" INT REFERENCES "user"
);

CREATE TABLE "play_roles" (
	"id" SERIAL PRIMARY KEY,
	"character" VARCHAR(255),
	"play_id" INT REFERENCES shakespeare_plays,
	"total_words" INT 
);

CREATE TABLE "user_roles" (
	"id" SERIAL PRIMARY KEY,
	"role_id" INT REFERENCES "play_roles",
	"actor_id" INT REFERENCES "user"
);


INSERT INTO shakespeare_plays (play_code, play_name)
VALUES ('AWW', 'All''s Well That Ends Well'),
('Ant', 'Antony and Cleopatra'),
('AYL', 'As You Like It'),
('Err', 'The Comedy of Errors'),
('Cor', 'Coriolanus'),
('Cym', 'Cymbeline'),
('Ham', 'Hamlet'),
('1H4', 'Henry IV, Part 1'),
('2H4', 'Henry IV, Part 2'),
('H5', 'Henry V'),
('1H6', 'Henry VI, Part 1'),
('2H6', 'Henry VI, Part 2'),
('3H6', 'Henry VI, Part 3'),
('H8', 'Henry VIII'),
('JC', 'Julius Caesar'),
('Jn', 'King John'),
('Lr', 'King Lear'),
('LLL', 'Love''s Labor''s Lost'),
('Mac', 'Macbeth'),
('MM', 'Measure for Measure'),
('MV', 'The Merchant of Venice'),
('Wiv', 'The Merry Wives of Windsor'),
('MND', 'A Midsummer Night''s Dream'),
('Ado', 'Much Ado About Nothing'),
('Oth', 'Othello'),
('Per', 'Pericles'),
('R2', 'Richard II'),
('R3', 'Richard III'),
('Rom', 'Romeo and Juliet'),
('Shr', 'The Taming of the Shrew'),
('Tmp', 'The Tempest'),
('Tim', 'Timon of Athens'),
('Tit', 'Titus Andronicus'),
('Tro', 'Troilus and Cressida'),
('TN', 'Twelfth Night'),
('TGV', 'Two Gentlemen of Verona'),
('TNK', 'Two Noble Kinsmen'),
('WT', 'The Winter''s Tale');
