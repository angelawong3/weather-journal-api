DROP DATABASE IF EXISTS weather_journal_db;

CREATE DATABASE weather_journal_db;

USE weather_journal_db;

CREATE TABLE journals (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    image_url VARCHAR(255) NOT NULL,
    startDate DATE,
    endDate DATE
);

CREATE TABLE cities (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    journal_id INT,
    city_name VARCHAR(255) NOT NULL,
    temperature DECIMAL(8, 2) NOT NULL,
    humidity DECIMAL(8, 2) NOT NULL,
    windspeed DECIMAL(8, 2) NOT NULL,
    weather_description VARCHAR(255) NOT NULL,
    country_code VARCHAR(255) NOT NULL,
    FOREIGN KEY (journal_id)
    REFERENCES journals(id)
);