-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema foodchain_db
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `foodchain_db` ;

-- -----------------------------------------------------
-- Schema foodchain_db
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `foodchain_db` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `foodchain_db` ;

-- -----------------------------------------------------
-- Table `foodchain_db`.`Vendors`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `foodchain_db`.`Vendors` ;

CREATE TABLE IF NOT EXISTS `foodchain_db`.`Vendors` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_name` VARCHAR(45) NOT NULL,
  `user_password` VARCHAR(45) NOT NULL,
  `company_name` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `phone_number` VARCHAR(45) NOT NULL,
  `website` VARCHAR(45) NULL,
  `location` VARCHAR(45) NOT NULL,
  `createdAt` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` DATETIME DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `user_name_UNIQUE` (`user_name` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `foodchain_db`.`Products`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `foodchain_db`.`Products` ;

CREATE TABLE IF NOT EXISTS `foodchain_db`.`Products` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `vendor_id` INT NOT NULL,
  `harvest_date` DATE NOT NULL,
  `chemicals_used` VARCHAR(45) NOT NULL,
  `certified_organic` TINYINT NOT NULL,
  `vendor_notes` VARCHAR(45) NOT NULL,
  `createdAt` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` DATETIME DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`, `vendor_id`),
  INDEX `fk_Products_Vendors1_idx` (`vendor_id` ASC) VISIBLE,
  CONSTRAINT `fk_Products_Vendors1`
    FOREIGN KEY (`vendor_id`)
    REFERENCES `foodchain_db`.`Vendors` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `foodchain_db`.`Codes`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `foodchain_db`.`Codes` ;

CREATE TABLE IF NOT EXISTS `foodchain_db`.`Codes` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `code_value` VARCHAR(200) NOT NULL,
  `createdAt` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` DATETIME DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`, `code_value`),
    UNIQUE INDEX `code_value_UNIQUE` (`code_value` ASC) VISIBLE)

ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `foodchain_db`.`Links`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `foodchain_db`.`Links` ;

CREATE TABLE IF NOT EXISTS `foodchain_db`.`Links` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `product_id` INT NOT NULL,
  `vendor_id` INT NOT NULL,
  `code_value` VARCHAR(45),
  `location` VARCHAR(45) NOT NULL,
  `createdAt` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` DATETIME DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`, `product_id`, `vendor_id`, `code_value`),
  INDEX `fk_Links_Products1_idx` (`product_id` ASC) VISIBLE,
  INDEX `fk_Links_Vendors1_idx` (`vendor_id` ASC) VISIBLE,
  INDEX `fk_Links_Codes1_idx` (`code_value` ASC) VISIBLE,
  CONSTRAINT `fk_Links_Products1`
    FOREIGN KEY (`product_id`)
    REFERENCES `foodchain_db`.`Products` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Links_Vendors1`
    FOREIGN KEY (`vendor_id`)
    REFERENCES `foodchain_db`.`Vendors` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Links_Codes1`
    FOREIGN KEY (`code_value`)
    REFERENCES `foodchain_db`.`Codes` (`code_value`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `foodchain_db`.`Consumers`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `foodchain_db`.`Consumers` ;

CREATE TABLE IF NOT EXISTS `foodchain_db`.`Consumers` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_name` VARCHAR(45) NOT NULL,
  `user_password` VARCHAR(45) NOT NULL,
  `person_name` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `phone_number` VARCHAR(45) NOT NULL,
  `createdAt` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` DATETIME DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `user_name_UNIQUE` (`user_name` ASC) VISIBLE)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
