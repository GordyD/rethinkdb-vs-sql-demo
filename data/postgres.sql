CREATE SEQUENCE character_id_seq;
CREATE TABLE characters (
     id smallint NOT NULL DEFAULT nextval('character_id_seq'),
     name varchar(50) NOT NULL,
     max_strength int NULL,
     created timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
     PRIMARY KEY (id)
);

CREATE SEQUENCE species_id_seq;
CREATE TABLE species (
    id smallint NOT NULL DEFAULT nextval('species_id_seq'),
    name varchar(50) NOT NULL,
    created timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
);

CREATE TABLE character_species (
    character_id int NOT NULL,
    species_id int NOT NULL,
    PRIMARY KEY (character_id, species_id)
);

ALTER TABLE character_species 
ADD CONSTRAINT character_fk_idx
FOREIGN KEY (character_id) REFERENCES characters(id) 
ON UPDATE CASCADE
ON DELETE CASCADE;

ALTER TABLE character_species 
ADD CONSTRAINT species_fk_idx
FOREIGN KEY (species_id) REFERENCES species(id) 
ON UPDATE CASCADE
ON DELETE CASCADE;

INSERT INTO characters (name, max_strength)
    VALUES
        ('Goku', 1000000),
        ('Gohan', 700000),
        ('Vegata', 900000),
        ('Piccolo', 800000),
        ('Android 16', 920000),
        ('Bulma', null),
        ('Trunks', 650000);
        
INSERT INTO species (name)
    VALUES
        ('Saiyan'),
        ('Human'),
        ('Nemek');

INSERT INTO character_species (character_id, species_id)
    VALUES
        (1,1),
        (2,1),
        (2,2),
        (3,1),
        (4,3),
        (6,2),
        (7,1),
        (7,2);

SELECT c.* 
FROM characters c
INNER JOIN character_species cs ON c.id = cs.characterId
INNER JOIN species s ON cs.species_id = s.id
WHERE maxStrength > 700000
AND s.name = 'Saiyan'
ORDER BY maxStrength DESC;

SELECT c.*, group_concat(s.name) as species 
FROM characters c 
LEFT JOIN character_species cs ON c.id = cs.character_id 
LEFT JOIN species s ON cs.species_id = s.id
GROUP BY c.id
ORDER BY species;

SELECT s.name, group_concat(c.name) as characters
FROM characters c 
LEFT JOIN character_species cs ON c.id = cs.character_id 
LEFT JOIN species s ON cs.species_id = s.id
GROUP BY s.id;

UPDATE characters 
SET max_strength = 2500000
WHERE name = 'Goku';

ALTER TABLE characters 
ADD COLUMN age int NULL;

UPDATE characters
SET age = 50
WHERE name = 'Goku';

DELETE FROM characters
WHERE name = 'Goku';