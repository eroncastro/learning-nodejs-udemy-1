CREATE TABLE people (
  id int NOT NULL,
  PRIMARY KEY (id),
  firstname varchar(255),
  lastname varchar(255)
);

CREATE TABLE addresses (
  id int NOT NULL,
  PRIMARY KEY (id),
  address varchar(255)
);

CREATE TABLE people_addresses (
  person_id int NOT NULL,
  address_id int NOT NULL,
  PRIMARY KEY (person_id, address_id),
  FOREIGN KEY (person_id) REFERENCES people(id),
  FOREIGN KEY (address_id) REFERENCES addresses(id)
);

INSERT INTO people (id, firstname, lastname)
VALUES (1, 'John', 'Doe'), (2, 'Jane', 'Doe');

INSERT INTO addresses (id, address) VALUES (1, '555 Main St.');

INSERT INTO people_addresses (person_id, address_id)
VALUES (1, 1), (2, 1);

SELECT people.id, firstname, lastname, address
FROM people
INNER JOIN people_addresses ON people.id = people_addresses.person_id
INNER JOIN addresses ON addresses.id = people_addresses.address_id;
