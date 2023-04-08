BEGIN;

DROP TABLE IF EXISTS notes, tags;

CREATE TABLE
    notes (
        id SERIAL PRIMARY KEY,
        title VARCHAR(250) NOT NULL,
        content TEXT NOT NULL,
        created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
    );

CREATE TABLE
    tags(
        id SERIAL PRIMARY KEY,
        name VARCHAR(250),
        note_id INTEGER,
        created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (note_id) REFERENCES notes(id) ON UPDATE CASCADE ON DELETE CASCADE
    );

INSERT INTO
    notes(title, content)
VALUES (
        'note1',
        'this is the body for note1'
    ), (
        'note2',
        'this is the body for note1'
    ), (
        'note3',
        'this is the body for note1'
    );

INSERT INTO
    tags(name, note_id)
VALUES ('work', 1), ('health', 3), ('study', 2);

COMMIT;

-- C:/Users/Amal/Desktop/G13/month2/week6/Note-App-db/src/database/config/build.sql