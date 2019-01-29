-- MySQL Workbench Forward Engineering

-- SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
-- SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
-- SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema ff0nx9pedx1sxoln
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `ff0nx9pedx1sxoln` ;

-- -----------------------------------------------------
-- Schema ff0nx9pedx1sxoln
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `ff0nx9pedx1sxoln`;
USE `ff0nx9pedx1sxoln` ;

-- -----------------------------------------------------
-- Table `ff0nx9pedx1sxoln`.`Vendors`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `ff0nx9pedx1sxoln`.`Vendors` ;

CREATE TABLE IF NOT EXISTS `ff0nx9pedx1sxoln`.`Vendors` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_name` VARCHAR(45) NOT NULL,
  `user_password` VARCHAR(45) NOT NULL,
  `company_name` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `phone_number` VARCHAR(45) NOT NULL,
  `website` VARCHAR(200) NULL,
  `location` VARCHAR(45) NOT NULL,
  `createdAt` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` DATETIME DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `user_name_UNIQUE` (`user_name` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ff0nx9pedx1sxoln`.`Products`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `ff0nx9pedx1sxoln`.`Products` ;

CREATE TABLE IF NOT EXISTS `ff0nx9pedx1sxoln`.`Products` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `product_name` VARCHAR(100) NOT NULL,
  `vendor_id` INT NOT NULL,
  `harvest_date` VARCHAR(45) NOT NULL,
  `chemicals_used` VARCHAR(200) NOT NULL,
  `certified_organic` TINYINT NOT NULL,
  `vendor_notes` VARCHAR(200) NOT NULL,
  `createdAt` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` DATETIME DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`, `vendor_id`),
  INDEX `fk_Products_Vendors1_idx` (`vendor_id` ASC),
  CONSTRAINT `fk_Products_Vendors1`
    FOREIGN KEY (`vendor_id`)
    REFERENCES `ff0nx9pedx1sxoln`.`Vendors` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ff0nx9pedx1sxoln`.`Codes`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `ff0nx9pedx1sxoln`.`Codes` ;

-- -----------------------------------------------------
-- Table `ff0nx9pedx1sxoln`.`Links`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `ff0nx9pedx1sxoln`.`Links` ;

CREATE TABLE IF NOT EXISTS `ff0nx9pedx1sxoln`.`Links` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `product_id` INT NOT NULL,
  `vendor_id` INT NOT NULL,
  `location` VARCHAR(45) NOT NULL,
  `link_date` VARCHAR(45) NOT NULL,
  `createdAt` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` DATETIME DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`, `product_id`, `vendor_id`),
  INDEX `fk_Links_Products1_idx` (`product_id` ASC),
  INDEX `fk_Links_Vendors1_idx` (`vendor_id` ASC),
  CONSTRAINT `fk_Links_Products1`
    FOREIGN KEY (`product_id`)
    REFERENCES `ff0nx9pedx1sxoln`.`Products` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Links_Vendors1`
    FOREIGN KEY (`vendor_id`)
    REFERENCES `ff0nx9pedx1sxoln`.`Vendors` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ff0nx9pedx1sxoln`.`Consumers`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `ff0nx9pedx1sxoln`.`Consumers` ;

CREATE TABLE IF NOT EXISTS `ff0nx9pedx1sxoln`.`Consumers` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_name` VARCHAR(45) NOT NULL,
  `user_password` VARCHAR(45) NOT NULL,
  `person_name` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `phone_number` VARCHAR(45) NOT NULL,
  `createdAt` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` DATETIME DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `user_name_UNIQUE` (`user_name` ASC))
ENGINE = InnoDB;


-- SET SQL_MODE=@OLD_SQL_MODE;
-- SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
-- SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
