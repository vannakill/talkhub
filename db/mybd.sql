CREATE DATABASE  IF NOT EXISTS `mydb` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `mydb`;
-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: mydb
-- ------------------------------------------------------
-- Server version	8.0.36

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `comments`
--

DROP TABLE IF EXISTS `comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comments` (
  `id` int NOT NULL AUTO_INCREMENT,
  `desc` varchar(200) NOT NULL,
  `createdat` datetime DEFAULT NULL,
  `userId` int NOT NULL,
  `postId` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `postId_idx` (`postId`),
  KEY `CommentUserId` (`userId`),
  CONSTRAINT `CommentUserId` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `postId` FOREIGN KEY (`postId`) REFERENCES `post` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=54 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comments`
--

LOCK TABLES `comments` WRITE;
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
INSERT INTO `comments` VALUES (46,'123','2024-06-25 02:33:31',6,4),(53,'Привет','2024-06-25 08:15:03',15,14);
/*!40000 ALTER TABLE `comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `post`
--

DROP TABLE IF EXISTS `post`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `post` (
  `id` int NOT NULL AUTO_INCREMENT,
  `Title` varchar(200) NOT NULL,
  `desc` varchar(1000) DEFAULT NULL,
  `userId` int NOT NULL,
  `img` varchar(200) DEFAULT NULL,
  `createdat` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `userId_idx` (`userId`),
  CONSTRAINT `userId` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `post`
--

LOCK TABLES `post` WRITE;
/*!40000 ALTER TABLE `post` DISABLE KEYS */;
INSERT INTO `post` VALUES (2,'Семейное','<p>Сессия, я не спала несколько дней, все, что выучено вылетело из головы. Препод был непреклонен - ставлю 2 и на осень. А так как стипендия нужна была кровь из носу, решила, что нечего терять и сказала: \"Без тройки не уйду\". Короче, просидела в аудитории 18 часов, а когда утром, он пришел, открыл кабинет, а там на стуле сижу я, выгляжу как восставший из ада, он попросил мою зачётку и заржал, сказав, что я вторая настолько шизанутая на его практике. Пришла домой, рассказала маме, и... узнала, кто был первой.</p>',1,'','2024-06-25 00:37:12'),(3,'Опасные места','',1,'17192651780631719209545164338528.webp','2024-06-25 00:39:38'),(4,'Концерт Димы Билана в Минске','<p>16 ноября в Минск-арене&nbsp;Дима Билан представит&nbsp;для белорусских поклонников&nbsp;свое новое шоу «Невозможное возможно». </p><p>Программа&nbsp;выступления&nbsp;артиста&nbsp;в Минске&nbsp;включает в себя известные хиты: «Невозможное возможно», «Держи», «Молния», «Такси», «Я просто люблю тебя», «Белые розы», «Болен тобой», «Не молчи», «N1 Fan», «Как хотел я», «Неделимые», «Океан», «На берегу неба», «Never let you», «Believe» и другие&nbsp;свежие музыкальные треки.</p>',1,'171926540454376472d34efb5ddee4f0b043e3d91959c.jpg','2024-06-25 00:43:24'),(6,'Немного хрустящего арбуза','<iframe class=\"ql-video\" frameborder=\"0\" allowfullscreen=\"true\" src=\"https://cs13.pikabu.ru/video/2024/06/23/171912033221874550_d65518d7_480x852.mp4\"></iframe><p><br></p>',1,'','2024-06-25 00:47:08'),(7,'Выход на пенсию по стажу','<p>После института пришёл работать в организацию, да так и остался до сих пор. Заглядывал в кадры, не пора ли на пенсию по стажу? Махали руками, смеялись: идите работать, вам ещё не скоро. Что-то червячок сомнения грыз. Пошёл к юристу. Та полистала бумаги и говорит: \"А чего вы тут сидите? Бегите в Пенсионный фонд заявление на пенсию писать. \" Оказалось, что служба в Советской армии 1985 1987входит в медицинский стаж, что работа в С М П Твери в студенческие годы легко подтверждается запросом в ок БСМП Твери. В итоге я заскочил в последний вагон перед повышением пенсионного возраста. А слушал бы своих кадровиков, без пенсии в 11 000 остался)))</p>',1,'','2024-06-25 00:48:20'),(8,'Хотелось бы','',1,'17192657547431719210249160785416.jpg','2024-06-25 00:49:14'),(14,'ФОТОФАКТ: Одному из старейших городов Беларуси Витебску исполняется 1050 лет ','<p>25 июня, Витебск /Корр. БЕЛТА/. Витебск возник у слияния двух рек - Западной Двины, несущей свои воды в Балтийское море, и Витьбы, которая и дала название городу. Его богатая история, насчитывает десятки веков. За это время Витебск повидал на своем веку множество разных событий, но только во время Великой Отечественной войны он был разрушен более, чем на 90%. Тогда были уничтожены целые кварталы города, многие промышленные предприятия, известные памятники архитектуры. Однако благодаря героическим усилиям жителей Беларуси город был вновь восстановлен.</p>',6,'1719286452962000023_1719261683_643439_big.jpg','2024-06-25 06:34:12'),(16,'Привет Мир','',15,'1719292526637shutterstock_1375463840.2e16d0ba.fill-1200x630.jpg','2024-06-25 08:15:26');
/*!40000 ALTER TABLE `post` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(45) NOT NULL,
  `password` varchar(64) NOT NULL,
  `email` varchar(100) NOT NULL,
  `profilePicture` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'admin','$2a$10$Ag0dpxGWy//PpxTESFGxNebIzIO.XOJyBBVj/8wLkfgkWSE4Z/fpG','admin',NULL),(6,'vannakill','$2a$10$z5k5qVlna0epfi2m/ZckVe/J87xoDttg8PuKJmkowJKphVfxnO/4O','',NULL),(10,'123','$2a$10$KEDM6t6oYFAiLplY65e0b.a5MhQfBWo9BuER2K8/S8RnM8XPDKmJy','123',NULL),(11,'adbmdasss','$2a$10$qxcnwUloOfRNJec8lKdLEeCzvHiJRcVtuRmrb2K3VU25sSdX4eU7W','asdaagfdmfs',NULL),(14,'phalorin','$2a$10$v5SKUINfLtxkfgJDfEAjNuJRkpP10QwVi2MuDtJWyIpoQqV6c54Rq','',NULL),(15,'Евгений','$2a$10$qjFqzjXsoo9JpeC5Txk08eWSJCfdSjrL981itDvSjog0Z4OzUhzrC','',NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-12-01  3:40:59
