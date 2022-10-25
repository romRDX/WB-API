-- CREATE USER
CREATE TABLE WB_USER
    (ID NUMERIC,
     NAME VARCHAR(255),
     CONSTRAINT WB_USER_PK PRIMARY KEY (ID));

-- CREATE SKILLS
CREATE TABLE WB_SKILLS
    (ID NUMERIC,
     NAME VARCHAR(255),
     CONSTRAINT WB_SKILLS_PK PRIMARY KEY (ID));

-- CREATE TRAITS
CREATE TABLE WB_TRAITS
    (ID NUMERIC,
     NAME VARCHAR(255),
     CONSTRAINT WB_TRAITS_PK PRIMARY KEY (ID));

-- CREATE ITEMS
CREATE TABLE WB_ITEMS
    (ID NUMERIC,
     NAME VARCHAR(255),
     CONSTRAINT WB_ITEMS_PK PRIMARY KEY (ID));

-- CREATE CHARACTERS
CREATE TABLE WB_CHARACTERS
    (ID NUMERIC,
     NAME VARCHAR(255),
     CONSTRAINT WB_CHARACTERS_PK PRIMARY KEY (ID));

ALTER TABLE WB_CHARACTERS
    ADD CONSTRAINT FK_CHARACTER_USER
    FOREIGN KEY (USER)
    REFERENCES WB_USER (ID);

--

INSERT INTO wb_player_characters (id, name, user)
-- id name user_id
ALTER TABLE wb_player_characters ADD special_skill_id NUMERIC;
ALTER TABLE wb_player_characters DROP COLUMN class;
INSERT INTO wb_player_characters (id, name, user_id, level, portrait, model, special_skill_id, class_id, race_id, atributes, skills_id, traits_id, itens_id) VALUES (1, 'Mufasa', 1, 1, 'https://ibb.co/k8nhS1z', 'https://ibb.co/k8nhS1z', 1, 1, 1, '{STR: 5, DEX: 4, CON: 4, INT: 1, TOU: 2, AGI: 3}', '[1,2,3]', '[1,2,3]', '[1,2,3]');

UPDATE wb_player_characters SET atributes = '{"STR": 5, "DEX": 4, "CON": 4, "INT": 1, "TOU": 2, "AGI": 3}' WHERE id = 1;

UPDATE wb_player_characters SET atributes = '{"STR": 290, "DEX": 340, "CON": 230, "INT": 360, "TOU": 230, "AGI": 350}' WHERE id = 1;

UPDATE wb_player_characters SET traits_id = '[1,2,3,0]' WHERE id = 1;

SELECT * FROM wb_player_characters WHERE id = 1;