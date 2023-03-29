-- phpMyAdmin SQL Dump
-- version 4.9.11
-- https://www.phpmyadmin.net/
--
-- Host: frodo-db.id.domainesia.com:3306
-- Generation Time: Mar 28, 2023 at 09:28 AM
-- Server version: 10.6.11-MariaDB
-- PHP Version: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `kemena10_sikm`
--

-- --------------------------------------------------------

--
-- Table structure for table `data_surveys`
--

CREATE TABLE `data_surveys` (
  `id_survey` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `id_layanan` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `no_hp` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `gender` enum('Laki-laki','Perempuan') NOT NULL,
  `age` enum('Dibawah 20 Tahun','21 s/d 30 Tahun','31 s/d 40 Tahun','41 s/d 50 Tahun','Diatas 50 Tahun') NOT NULL DEFAULT '21 s/d 30 Tahun',
  `education` enum('SMP atau Sederajat','SMA atau Sederajat','Strata 1 (S1)','Strata 2 (S2)','Strata 3 (S3)') NOT NULL,
  `work` enum('PNS / TNI / POLRI','Pegawai Swasta','Wiraswasta','Tenaga Honor / Ahli / Kontrak','Pelajar / Mahasiswa','Lainnya') NOT NULL,
  `improvement` text NOT NULL,
  `feedback` text DEFAULT NULL,
  `answer_1` enum('1','2','3','4') DEFAULT NULL,
  `answer_2` enum('1','2','3','4') DEFAULT NULL,
  `answer_3` enum('1','2','3','4') DEFAULT NULL,
  `answer_4` enum('1','2','3','4') DEFAULT NULL,
  `answer_5` enum('1','2','3','4') DEFAULT NULL,
  `answer_6` enum('1','2','3','4') DEFAULT NULL,
  `answer_7` enum('1','2','3','4') DEFAULT NULL,
  `answer_8` enum('1','2','3','4') DEFAULT NULL,
  `answer_9` enum('1','2','3','4') DEFAULT NULL,
  `answer_10` enum('1','2','3','4') DEFAULT NULL,
  `answer_11` enum('1','2','3','4') DEFAULT NULL,
  `answer_12` enum('1','2','3','4') DEFAULT NULL,
  `answer_13` enum('1','2','3','4') DEFAULT NULL,
  `answer_14` enum('1','2','3','4') DEFAULT NULL,
  `answer_15` enum('1','2','3','4') DEFAULT NULL,
  `average` double(5,3) NOT NULL DEFAULT 0.000,
  `status` enum('submitted','approved','rejected') NOT NULL DEFAULT 'submitted'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `data_surveys`
--

INSERT INTO `data_surveys` (`id_survey`, `created_at`, `updated_at`, `id_layanan`, `name`, `no_hp`, `address`, `gender`, `age`, `education`, `work`, `improvement`, `feedback`, `answer_1`, `answer_2`, `answer_3`, `answer_4`, `answer_5`, `answer_6`, `answer_7`, `answer_8`, `answer_9`, `answer_10`, `answer_11`, `answer_12`, `answer_13`, `answer_14`, `answer_15`, `average`) VALUES
(1, '2023-05-20 22:02:20', '2023-03-20 22:02:20', 9, 'USRI', '085263136222', 'Limau Asam Kec. Bayang', 'Laki-laki', '41 s/d 50 Tahun', 'Strata 2 (S2)', 'PNS / TNI / POLRI', 'Tidak ada yang perlu diperbaiki', NULL, '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', 4.000),
(2, '2023-05-20 22:03:16', '2023-03-20 22:03:16', 1, 'Ketty Perry', '081372456565', 'LA', 'Perempuan', '31 s/d 40 Tahun', 'Strata 3 (S3)', 'PNS / TNI / POLRI', 'Tidak ada yang perlu diperbaiki', NULL, '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', 4.000),
(3, '2023-05-20 22:03:42', '2023-03-20 22:03:42', 1, 'Afnizon', '085374346605', 'Painan', 'Laki-laki', '41 s/d 50 Tahun', 'Strata 1 (S1)', 'PNS / TNI / POLRI', 'Tidak ada yang perlu diperbaiki', 'Aku sih YES', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', 4.000),
(4, '2023-03-20 22:06:37', '2023-03-20 22:06:37', 23, 'Jenny Black Pink', '082392359361', 'Korea', 'Perempuan', '21 s/d 30 Tahun', 'Strata 3 (S3)', 'Lainnya', 'Tidak ada yang perlu diperbaiki', NULL, '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', 4.000),
(5, '2023-03-20 23:08:27', '2023-03-20 23:08:27', 1, 'Mulu', '0882283601945', 'Salido', 'Laki-laki', '21 s/d 30 Tahun', 'Strata 1 (S1)', 'Tenaga Honor / Ahli / Kontrak', 'Profesionalisme SDM', 'Agar dalam pelayanan, memakai bahasa sopan dan umum, seperti memakai bahasa indonesia', '3', '3', '3', '2', '3', '3', '3', '3', '3', '2', '3', '3', '3', '3', '3', 2.867),
(6, '2023-03-20 23:11:43', '2023-03-20 23:11:43', 63, 'Abrar', '081363129227', 'Jl. Imam Bonjol No. 1 Painan', 'Laki-laki', 'Diatas 50 Tahun', 'Strata 2 (S2)', 'PNS / TNI / POLRI', 'Tidak ada yang perlu diperbaiki', NULL, '4', '4', '4', '3', '4', '4', '4', '3', '4', '4', '4', '4', '4', '4', '4', 3.867),
(7, '2023-08-21 00:06:12', '2023-03-21 00:06:12', 1, 'Yossef Yuda', '081261582843', 'Painan', 'Laki-laki', '41 s/d 50 Tahun', 'Strata 2 (S2)', 'PNS / TNI / POLRI', 'Tidak ada yang perlu diperbaiki', 'Sangat memuaskan', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', 4.000),
(8, '2023-08-21 00:21:04', '2023-03-21 00:21:04', 65, 'Betriadi', '082385959026', 'Painan', 'Laki-laki', '41 s/d 50 Tahun', 'Strata 1 (S1)', 'PNS / TNI / POLRI', 'Tidak ada yang perlu diperbaiki', NULL, '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', 4.000),
(9, '2023-08-21 00:59:19', '2023-03-21 00:59:19', 14, 'Mulu', '082173938801', 'Salido', 'Laki-laki', '21 s/d 30 Tahun', 'Strata 1 (S1)', 'Tenaga Honor / Ahli / Kontrak', 'Tidak ada yang perlu diperbaiki', NULL, '3', '3', '3', '4', '2', '3', '4', '3', '3', '3', '3', '2', '3', '4', '3', 3.067),
(10, '2023-03-21 01:01:20', '2023-03-21 01:01:20', 31, 'Jiso black pink', '082392359361', 'Painan', 'Perempuan', '21 s/d 30 Tahun', 'Strata 2 (S2)', 'Pelajar / Mahasiswa', 'Tidak ada yang perlu diperbaiki', NULL, '3', '4', '4', '4', '4', '3', '3', '4', '4', '4', '4', '4', '4', '4', '4', 3.800),
(11, '2023-03-21 01:19:13', '2023-03-21 01:19:13', 3, 'Sri Mulyani', '081266143326', 'Painan Utara', 'Perempuan', '41 s/d 50 Tahun', 'Strata 1 (S1)', 'PNS / TNI / POLRI', 'Tidak ada yang perlu diperbaiki', NULL, '4', '4', '4', '4', '3', '3', '3', '4', '4', '4', '3', '4', '4', '4', '4', 3.733),
(12, '2023-11-21 01:24:22', '2023-03-21 01:24:22', 29, 'Pramana Yuda Sayeti, S.Kom', '082298476941', 'as', 'Laki-laki', 'Dibawah 20 Tahun', 'Strata 1 (S1)', 'Tenaga Honor / Ahli / Kontrak', 'Tidak ada yang perlu diperbaiki', NULL, '2', '4', '1', '4', '4', '3', '4', '4', '4', '4', '1', '4', '4', '4', '4', 3.400),
(13, '2023-11-21 06:00:24', '2023-03-21 06:00:25', 64, 'Nita', '081363737381', 'Painan', 'Perempuan', '41 s/d 50 Tahun', 'Strata 1 (S1)', 'PNS / TNI / POLRI', 'Tidak ada yang perlu diperbaiki', NULL, '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', 4.000);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `data_surveys`
--
ALTER TABLE `data_surveys`
  ADD PRIMARY KEY (`id_survey`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `data_surveys`
--
ALTER TABLE `data_surveys`
  MODIFY `id_survey` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
