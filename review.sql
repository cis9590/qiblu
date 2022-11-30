-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 30, 2022 at 12:17 AM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `qiblu`
--

-- --------------------------------------------------------

--
-- Table structure for table `review`
--

CREATE TABLE `review` (
  `id` int(11) NOT NULL,
  `yourName` varchar(255) NOT NULL,
  `number` bigint(10) NOT NULL,
  `tableNumber` int(20) NOT NULL,
  `date` date NOT NULL,
  `comment` varchar(500) NOT NULL,
  `file` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `review`
--

INSERT INTO `review` (`id`, `yourName`, `number`, `tableNumber`, `date`, `comment`, `file`) VALUES
(1, 'Klaus Amina', 2125047054, 1, '2022-11-28', 'we have the best burgers.. Also, we got cheese fries(it had a lot of cheese. I love it). I really enjoyed my burger.. I highly recommend this place if you around this neighborhood. I live it the Bronx. and actually I thinking to go back soon.. and the service was good as well\r\n', '\"C:\\Users\\Ylin\\OneDrive - The City University of New York\\Pictures\\P1.PNG\"'),
(2, 'Olly Sacagawea\r\n', 5058997256, 2, '2022-11-28', 'Came here for my long distance boyfriend’s graduation . I live in Maryland and I have to say this is the best italian resturant on the east coast. Absolutely amazing food and the owner is a hoot! The owner is so personable, always checked on us, and made sure our experience was amazing!!! We had pretty much everything on the menu. I am in love with this restaurant! I will be back!!!\r\n', ''),
(4, 'Munyaradzi Karp\r\n', 2395747811, 3, '2022-11-28', 'Food and service was absolutely amazing! The menu is a bit different from what I remember, so be ready for some changes. But I guess it\'s to be expected due to covid/seasonal menu changes. However everything we ordered was well worth it! Definitely recommend trying it once and will definitely be a returning customer.\r\n', '\"C:\\Users\\Ylin\\OneDrive\\Pictures\\p2.jpg\"'),
(6, 'Nadia Raj\r\n', 5059244696, 4, '2022-11-28', 'Good!!!', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `review`
--
ALTER TABLE `review`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `review`
--
ALTER TABLE `review`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
