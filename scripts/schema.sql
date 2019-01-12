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
  `id` INT NOT NULL,
  `user_name` VARCHAR(45) NOT NULL,
  `user_password` VARCHAR(45) NOT NULL,
  `company_name` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `phone_number` VARCHAR(45) NOT NULL,
  `website` VARCHAR(45) NULL,
  `location` VARCHAR(45) NOT NULL,
  `createdAt` VARCHAR(45) NULL,
  `updatedAt` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `foodchain_db`.`Products`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `foodchain_db`.`Products` ;

CREATE TABLE IF NOT EXISTS `foodchain_db`.`Products` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `Vendors_id` INT NOT NULL,
  `harvest_date` DATE NOT NULL,
  `chemicals_used` VARCHAR(45) NOT NULL,
  `certified_organic` TINYINT NOT NULL,
  `vendors_notes` VARCHAR(45) NOT NULL,
  `createdAt` VARCHAR(45) NULL,
  `updatedAt` VARCHAR(45) NULL,
  PRIMARY KEY (`id`, `Vendors_id`),
  INDEX `fk_Products_Vendors1_idx` (`Vendors_id` ASC) VISIBLE,
  CONSTRAINT `fk_Products_Vendors1`
    FOREIGN KEY (`Vendors_id`)
    REFERENCES `foodchain_db`.`Vendors` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `foodchain_db`.`Links`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `foodchain_db`.`Links` ;

CREATE TABLE IF NOT EXISTS `foodchain_db`.`Links` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `Products_id` INT NOT NULL,
  `Vendors_id` INT NOT NULL,
  `location` VARCHAR(45) NOT NULL,
  `code` VARCHAR(45) NOT NULL,
  `createdAt` VARCHAR(45) NULL,
  `updatedAt` VARCHAR(45) NULL,
  PRIMARY KEY (`id`, `Products_id`, `Vendors_id`),
  INDEX `fk_Links_Products1_idx` (`Products_id` ASC) VISIBLE,
  INDEX `fk_Links_Vendors1_idx` (`Vendors_id` ASC) VISIBLE,
  UNIQUE INDEX `code_UNIQUE` (`code` ASC) VISIBLE,
  CONSTRAINT `fk_Links_Products1`
    FOREIGN KEY (`Products_id`)
    REFERENCES `foodchain_db`.`Products` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Links_Vendors1`
    FOREIGN KEY (`Vendors_id`)
    REFERENCES `foodchain_db`.`Vendors` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `foodchain_db`.`Consumer`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `foodchain_db`.`Consumer` ;

CREATE TABLE IF NOT EXISTS `foodchain_db`.`Consumer` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_name` VARCHAR(45) NOT NULL,
  `user_password` VARCHAR(45) NOT NULL,
  `person_name` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `phone_number` VARCHAR(45) NOT NULL,
  `createdAt` VARCHAR(45) NULL,
  `updatedAt` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
