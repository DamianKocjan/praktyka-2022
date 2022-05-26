INSERT INTO
    `Role`
VALUES
    (
        1,
        'admin',
        'Administrator',
        '2018-01-01 00:00:00',
        '2018-01-01 00:00:00'
    );

INSERT INTO
    `Address`
VALUES
    (
        1,
        '123 Main St',
        'Anytown',
        '12345',
        'CA',
        'USA',
        1,
        '2018-01-01 00:00:00',
        '2018-01-01 00:00:00'
    );

INSERT INTO
    `User`
VALUES
    (
        1,
        'johndoe@example.com',
        -- Password secret42
        '$2b$10$EpRnTzVlqHNP0.fUbXUwSOyuiXe/QLSUG6xNekdHgTGmrpHEfIoxm',
        '',
        'john',
        'doe',
        '2018-01-01 00:00:00',
        1,
        '2018-01-01 00:00:00',
        '2018-01-01 00:00:00'
    );

INSERT INTO `UserRole` VALUES (1, 1, 1);

INSERT INTO
    `Address`
VALUES
    (
        2,
        '123 Main St',
        'Anytown',
        '12345',
        'CA',
        'USA',
        1,
        '2018-01-01 00:00:00',
        '2018-01-01 00:00:00'
    );

INSERT INTO
    `User`
VALUES
    (
        2,
        'jamesdoe@example.com',
        -- Password secret42
        '$2b$10$EpRnTzVlqHNP0.fUbXUwSOyuiXe/QLSUG6xNekdHgTGmrpHEfIoxm',
        '1',
        'james',
        'doe',
        '2018-01-01 00:00:00',
        2,
        '2018-01-01 00:00:00',
        '2018-01-01 00:00:00'
    );