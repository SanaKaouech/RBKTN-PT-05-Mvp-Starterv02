-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema animals
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema animals
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `animals` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `animals` ;

-- -----------------------------------------------------
-- Table `animals`.`animal`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `animals`.`animal` (
  `idanimal` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `race` VARCHAR(255) NOT NULL,
  `age` INT NOT NULL,
  `price` INT NOT NULL,
  `image` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`idanimal`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
