-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 05, 2020 at 07:47 AM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `finalproject`
--

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `ID` int(11) NOT NULL,
  `date` date NOT NULL,
  `name` varchar(30) NOT NULL,
  `email` varchar(255) NOT NULL,
  `commentText` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `comments`
--

INSERT INTO `comments` (`ID`, `date`, `name`, `email`, `commentText`) VALUES
(1, '2020-04-04', 'gursewak Singh', 'hero@gmail.com', 'Is it working?'),
(2, '2020-04-04', 'g', 'h@gmail.com', 'THis is the second comment'),
(3, '2020-04-04', 'justin', 'j@ca.com', 'I am not justin bieber. '),
(4, '2020-04-05', 'gs', 'g@h.ca', 'nothing'),
(5, '2020-04-05', 'Shawn', 's@au.com', 'I am not mendes'),
(6, '2020-04-05', 'Shawn', 's@au.com', 'I am not mendes'),
(7, '2020-04-05', 'Shawn', 's@au.com', 'I am not mendes'),
(8, '2020-04-05', 'Shawn', 's@au.com', 'I am not mendes'),
(9, '2020-04-05', 'wefsadf', 'faf@ra.ca', 'sdfadsgfadsfg'),
(10, '2020-04-05', 'adfssdf', 'g@h.us', 'sdfadsfsdf'),
(11, '2020-04-05', 'justin ', 'j@in.com', 'I dont know.'),
(12, '2020-04-05', 'sdfasdf', 'hero@hotml.com', 'sdfgasgaer');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
