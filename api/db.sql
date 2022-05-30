CREATE TABLE `Vehicle` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `manufacturerId` INT NOT NULL,
    `name` varchar(255) NOT NULL,
    `model` varchar(255) NOT NULL,
    `type` varchar(255) NOT NULL,
    `description` TEXT,
    `condition` varchar(255) NOT NULL,
    `productionYear` TIMESTAMP NOT NULL,
    `mileage` DECIMAL(10, 2) NOT NULL DEFAULT 0,
    `doorsNumber` INT(2) NOT NULL,
    `numberOfSeats` INT(2) NOT NULL,
    `color` varchar(255) NOT NULL,
    `lacquer` varchar(255) NOT NULL,
    `enginePower` DECIMAL(5, 2) NOT NULL,
    `engineCapacity` DECIMAL(3, 2) NOT NULL,
    `fuelType` varchar(255) NOT NULL,
    `transmission` varchar(255) NOT NULL,
    `testDriveable` BOOLEAN NOT NULL DEFAULT 1,
    `VIN` varchar(255) NOT NULL,
    `createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updatedAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`)
);

CREATE TABLE `Service` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `vehicleId` INT NOT NULL,
    `userId` INT NOT NULL,
    `cost` DECIMAL NOT NULL,
    `status` varchar(255) NOT NULL,
    `description` TEXT,
    `createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updatedAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`)
);

CREATE TABLE `Sale` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `vehicleId` INT NOT NULL,
    `cost` DECIMAL NOT NULL,
    `status` varchar(255) NOT NULL,
    `description` TEXT,
    `guarantee` TIMESTAMP NOT NULL,
    `createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updatedAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`)
);

CREATE TABLE `Order` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `saleId` INT NOT NULL,
    `userId` INT NOT NULL,
    `deliveredAt` TIMESTAMP NOT NULL,
    `status` varchar(255) NOT NULL,
    `createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updatedAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`)
);

CREATE TABLE `User` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `email` varchar(255) NOT NULL UNIQUE,
    `passwordHashed` varchar(4096) NOT NULL,
    `phoneNumber` INT(9) NOT NULL UNIQUE,
    `firstName` varchar(255) NOT NULL,
    `lastName` varchar(255) NOT NULL,
    `dateOfBirth` TIMESTAMP NOT NULL,
    `createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updatedAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`)
);

CREATE TABLE `Role` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `name` varchar(255) NOT NULL UNIQUE,
    `description` TEXT,
    `createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updatedAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`)
);

CREATE TABLE `UserRole` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `userId` INT NOT NULL,
    `roleId` INT NOT NULL,
    PRIMARY KEY (`id`)
);

CREATE TABLE `Manufacturer` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `name` varchar(255) NOT NULL,
    `description` TEXT,
    `yearOfEstablishment` TIMESTAMP NOT NULL,
    `createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updatedAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`)
);

CREATE TABLE `Address` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `street` varchar(255) NOT NULL,
    `city` varchar(255) NOT NULL,
    `zip` varchar(255) NOT NULL,
    `state` varchar(255) NOT NULL,
    `country` varchar(255) NOT NULL,
    `isSelected` BOOLEAN NOT NULL DEFAULT 1,
    `userId` INT NOT NULL,
    `createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updatedAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`)
);

-- CREATE TABLE `Session` (

--     `id` INT NOT NULL AUTO_INCREMENT,

--     `expiresAt` TIMESTAMP NOT NULL,

--     `createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

--     `updatedAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

--     `userId` INT NOT NULL,

--     PRIMARY KEY (`id`)

-- );

ALTER TABLE
    `Vehicle`
ADD
    CONSTRAINT `Vehicle_fk0` FOREIGN KEY (`manufacturerId`) REFERENCES `Manufacturer`(`id`);

ALTER TABLE
    `Service`
ADD
    CONSTRAINT `Service_fk0` FOREIGN KEY (`vehicleId`) REFERENCES `Vehicle`(`id`);

ALTER TABLE
    `Service`
ADD
    CONSTRAINT `Service_fk1` FOREIGN KEY (`userId`) REFERENCES `User`(`id`);

ALTER TABLE
    `Sale`
ADD
    CONSTRAINT `Sale_fk0` FOREIGN KEY (`vehicleId`) REFERENCES `Vehicle`(`id`);

ALTER TABLE
    `Order`
ADD
    CONSTRAINT `Order_fk0` FOREIGN KEY (`saleId`) REFERENCES `Sale`(`id`);

ALTER TABLE
    `Order`
ADD
    CONSTRAINT `Order_fk1` FOREIGN KEY (`userId`) REFERENCES `User`(`id`);

ALTER TABLE
    `Address`
ADD
    CONSTRAINT `Address_fk0` FOREIGN KEY (`userId`) REFERENCES `User`(`id`);

-- ALTER TABLE

--     `Session`

-- ADD

--     CONSTRAINT `Session_fk0` FOREIGN KEY (`userId`) REFERENCES `User`(`id`);

ALTER TABLE
    `UserRole`
ADD
    CONSTRAINT `UserRole_fk0` FOREIGN KEY (`userId`) REFERENCES `User`(`id`);

ALTER TABLE
    `UserRole`
ADD
    CONSTRAINT `UserRole_fk1` FOREIGN KEY (`roleId`) REFERENCES `Role`(`id`);