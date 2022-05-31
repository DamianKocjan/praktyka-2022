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
        '123 Main St',
        'Anytown',
        '12345',
        'CA',
        'usa',
        '2018-01-01 00:00:00',
        '2018-01-01 00:00:00'
    );

INSERT INTO `UserRole` VALUES (1, 1, 1);

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
        '123 Main St',
        'Anytown',
        '12345',
        'CA',
        'usa',
        '2018-01-01 00:00:00',
        '2018-01-01 00:00:00'
    );

INSERT INTO
    `Manufacturer`
VALUES
    (
        1,
        'BMW',
        'German car manufacturer',
        '2018-01-01 00:00:00',
        '2018-01-01 00:00:00',
        '2018-01-01 00:00:00'
    );

INSERT INTO
    `Manufacturer`
VALUES
    (
        2,
        'Mercedes',
        'German car manufacturer',
        '2018-01-01 00:00:00',
        '2018-01-01 00:00:00',
        '2018-01-01 00:00:00'
    );

INSERT INTO
    `Manufacturer`
VALUES
    (
        3,
        'Toyota',
        'Japanese car manufacturer',
        '2018-01-01 00:00:00',
        '2018-01-01 00:00:00',
        '2018-01-01 00:00:00'
    );

INSERT INTO
    `Manufacturer`
VALUES
    (
        4,
        'Honda',
        'Japanese car manufacturer',
        '2018-01-01 00:00:00',
        '2018-01-01 00:00:00',
        '
        2018-01-01 00:00:00'
    );

INSERT INTO
    `Manufacturer`
VALUES
    (
        5,
        'Ford',
        'American car manufacturer',
        '2018-01-01 00:00:00',
        '2018-01-01 00:00:00',
        '2018-01-01 00:00:00'
    );

INSERT INTO
    `Vehicle`
VALUES
    (
        1,
        1,
        'BMW G42',
        'G42',
        'Coupe',
        'Atletyczne proporcje i sportowa dynamika jazdy: odkryj nowe BMW serii 2 Coupé. Dzięki szerszemu o 31 mm rozstawowi kół w porównaniu z poprzednim modelem oraz unikalnemu w tej klasie napędowi na tylne koła BMW serii 2 Coupé oferuje znacznie lepszą charakterystykę prowadzenia i bardzo zwinne właściwości jezdne. Gama mocnych silników zapewnia zarówno wydajność, jak i dynamiczną jazdę.',
        'new',
        '2022-01-01 00:00:00',
        0,
        3,
        5,
        'white',
        'metalic',
        135,
        2000,
        'benzyna',
        'TBD',
        1,
        'VIN-NUMBER',
        '2018-01-01 00:00:00',
        '2018-01-01 00:00:00'
    );

INSERT INTO
    `Vehicle`
VALUES
    (
        2,
        1,
        'BMW G42',
        'G42',
        'Coupe',
        'Atletyczne proporcje i sportowa dynamika jazdy: odkryj nowe BMW serii 2 Coupé. Dzięki szerszemu o 31 mm rozstawowi kół w porównaniu z poprzednim modelem oraz unikalnemu w tej klasie napędowi na tylne koła BMW serii 2 Coupé oferuje znacznie lepszą charakterystykę prowadzenia i bardzo zwinne właściwości jezdne. Gama mocnych silników zapewnia zarówno wydajność, jak i dynamiczną jazdę.',
        'new',
        '2022-01-01 00:00:00',
        0,
        3,
        5,
        'white',
        'metalic',
        135,
        2000,
        'benzyna',
        'TBD',
        1,
        'VIN-NUMBER',
        '2018-01-01 00:00:00',
        '2018-01-01 00:00:00'
    );

INSERT INTO
    `Service`
VALUES
    (
        1,
        1,
        2,
        1000.00,
        'pending',
        'Issue with engine',
        '2018-01-01 00:00:00',
        '2018-01-01 00:00:00'
    );

INSERT INTO
    `Sale`
VALUES
    (
        1,
        2,
        135000.00,
        'TBD',
        'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.',
        '2032-01-01 00:00:00',
        '2022-01-01 00:00:00',
        '2022-01-01 00:00:00'
    );

INSERT INTO
    `Order`
VALUES
    (
        1,
        1,
        1,
        '2022-05-01 00:00:00',
        'shipped',
        '2022-01-01 00:00:00',
        '2022-05-01 00:00:00'
    );