-- phpMyAdmin SQL Dump
-- version 4.9.11
-- https://www.phpmyadmin.net/
--
-- Host: frodo-db.id.domainesia.com:3306
-- Generation Time: Feb 28, 2023 at 09:03 AM
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
-- Database: `kemena10_ptsp`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `jabatan` varchar(100) DEFAULT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `block` enum('no','yes') NOT NULL DEFAULT 'no',
  `status` enum('inactive','active') NOT NULL DEFAULT 'active',
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_by` varchar(255) NOT NULL DEFAULT '',
  `updated_by` varchar(255) NOT NULL DEFAULT '',
  `id_unit_pengolah` int(10) UNSIGNED DEFAULT NULL,
  `plain_password` varchar(255) DEFAULT NULL,
  `profile_photo_url` text DEFAULT NULL,
  `no_hp` varchar(255) DEFAULT NULL,
  `last_login_at` datetime DEFAULT NULL,
  `last_login_ip` varchar(255) DEFAULT NULL,
  `bod` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `jabatan`, `username`, `email`, `email_verified_at`, `password`, `block`, `status`, `remember_token`, `created_at`, `updated_at`, `deleted_at`, `created_by`, `updated_by`, `id_unit_pengolah`, `plain_password`, `profile_photo_url`, `no_hp`, `last_login_at`, `last_login_ip`, `bod`) VALUES
(1, 'Pramana Yuda Sayeti, S.Kom', 'Ahli Pertama - Pranata Komputer', '199407292022031002', '199407292022031002@kemenag.go.id', NULL, '$2y$10$BFURRKEfmxLGtmB7S33QlOnYZL46xUmz3vLpLuAvx9mf.VJEyfEX6', 'no', 'active', 'pKHKral6spvMiTOHGrArWlv2Qv14RFgVZqRnpelbOFZEnn8NyrBJDYpfamjz', NULL, '2023-02-27 07:19:29', NULL, '', '', NULL, NULL, 'https://res.cloudinary.com/kemenagpessel/image/upload/v1667786088/profile_picture_pegawai/atjjpt61vhopw5kicwrh.jpg', '082298476941', '2023-02-27 14:19:29', '36.69.10.177', '1994-07-29'),
(2, 'H. Abrar Munanda, M.Ag', 'Kepala Kantor', '197105141995031001', 'abrar.munanda@kemenag.go.id', NULL, '$2y$10$cB7rfnwiVk1xssCiyX3pj.H.0S1Zz.5V0RfBIHaN72WUYxUPOZ8Ra', 'no', 'active', NULL, NULL, '2023-02-27 08:11:01', NULL, '', '', NULL, 'abrar140571', 'https://res.cloudinary.com/kemenagpessel/image/upload/v1668069321/profile_picture_pegawai/vzdtzbeikfhtmnfk6js6.jpg', '081363129227', '2023-02-27 15:11:01', '182.4.71.148', NULL),
(3, 'Yossef Yuda, S.HI, MA', 'Kepala Sub Bagian Tata Usaha', '198008042005011007', '198008042005011007@kemenag.go.id', NULL, '$2y$10$A7YEG9pCL4Ch1RH/XxlR/OFrUcG75BFVk/Ehu0L1BfGr6gc8VndL6', 'no', 'active', 'mIpmofG3QpK31jN2MJ9t16agL9zf3ljsTyCxMwClmAnhRW5HbUXKIByZJUlG', NULL, '2023-02-27 23:57:14', NULL, '', '', NULL, 'yossefyuda', 'https://res.cloudinary.com/kemenagpessel/image/upload/v1667789303/profile_picture_pegawai/jbpypsx7ys0idmawqdvj.jpg', '081261582843', '2023-02-28 06:57:14', '36.69.10.171', NULL),
(4, 'Sudirman, S.Ag', 'Kepala Seksi Pondok Pesantren', '197202112003121003', '197202112003121003@kemenag.go.id', NULL, '$2y$10$Afu.M3crr8j1PCQSAvalauQs/oGWs3k.wNkVqGhvUIprKwsJdZVvi', 'no', 'active', 'aRFImvKhMw1N3IAv7tkKyi0EPLU70JE2TmxiQWsLqSlCGGGHB3IPyBEWUNn6', NULL, '2023-02-27 02:12:14', NULL, '', '', NULL, 'sudirman123', 'https://res.cloudinary.com/kemenagpessel/image/upload/v1671080056/profile_picture_pegawai/Screen_Shot_2022-12-15_at_11.53.45_AM_nvkabm.png', '081266092956', '2023-02-27 09:12:14', '182.1.63.96', NULL),
(5, 'Masrizal, S.Ag, M.Pd', 'Kepala Seksi Pendidikan Agama Islam', '197202051997031003', '197202051997031003@kemenag.go.id', NULL, '$2y$10$juPRh9lAkG2N7rMw5aiAd.gtXDIvpa94levb/FgY/jftRWQPOEPlS', 'no', 'active', 'ExSmdCv8azsFuFJU08fA4P9qva4L5oAPJLDfqy1QYY8EZxSP43LPrZkKpimb', NULL, '2023-02-23 07:04:47', NULL, '', '', NULL, NULL, 'https://res.cloudinary.com/kemenagpessel/image/upload/v1671079980/profile_picture_pegawai/Screen_Shot_2022-12-15_at_11.52.38_AM_kliau1.png', '081266585533', '2023-02-23 14:04:47', '182.4.68.206', NULL),
(6, 'Drs. Firdaus', 'Kepala Seksi Bimbingan Masyarakat Islam', '196706191994031004', '196706191994031004@kemenag.go.id', NULL, '$2y$10$QgBmAhuZENJh3WZiBdtrQOoIQNiFZG.LuNGfbYDpSnOlm9xalvLGu', 'no', 'active', NULL, NULL, '2023-02-16 06:19:54', NULL, '', '', NULL, '1967061976', 'https://res.cloudinary.com/kemenagpessel/image/upload/v1671079881/profile_picture_pegawai/Screen_Shot_2022-12-15_at_11.51.05_AM_cutzrm.png', '08126149068', '2023-02-16 13:19:54', '36.69.11.27', NULL),
(7, 'Sumardi, S.Ag, M.Pd', 'Kepala Seksi Pendidikan Madrasah', '197107051998031013', 'sumardi@kemenag.go.id', NULL, '$2y$10$jfti2TU399b6KUGbO5Q/QeoNE9G6DTzCO6YPKTvDdvvKrSQXEPTA.', 'no', 'active', NULL, NULL, '2023-02-27 01:33:54', NULL, '', '', NULL, 'sumardi71', 'https://res.cloudinary.com/kemenagpessel/image/upload/v1668754031/profile_picture_pegawai/hstjiublqdbasb4afp6w.jpg', '082288409817', '2023-02-27 08:33:54', '36.69.10.177', NULL),
(8, 'Betriadi, S.HI', 'Kepala Seksi Penyelenggara Haji dan Umrah', '198106122008011013', '198106122008011013@kemenag.go.id', NULL, '$2y$10$ui/XK9EYdz3ksrSD7lZBkuIdE7fPfTMU3CLVkJ6GObi7cbnup8GlC', 'no', 'active', 'Ug1jXSNfi1WBkvQPbhHmGE9UYsfdTHyYPNfGMsTEMj1htHhWSkFbE2BfgnCX', NULL, '2023-02-24 08:03:32', NULL, '', '', NULL, '160315', 'https://res.cloudinary.com/kemenagpessel/image/upload/v1667807946/profile_picture_pegawai/aj8ntqm9ptivdve0lokw.jpg', '082385959026', '2023-02-24 15:03:32', '182.4.71.204', NULL),
(9, 'Gustiwarni, S.Ag', 'Kepala Seksi Zakat dan Wakaf', '196906151996032002', '196906151996032002@kemenag.go.id', NULL, '$2y$10$0Zj.HMJ7LHxJqMYnopLPYuJChfdlClX1gAUduZSgIQLdbYVrTWs1a', 'no', 'active', 'bAxcDP1qhfGjOfbOUMgH7wh3uIsBGbDlJOSE9bIkPa6pBZeXZk3Kl2HSrlxo', NULL, '2023-02-08 07:19:48', NULL, '', '', NULL, 'gusmul', NULL, '081275811997', '2023-02-08 14:19:48', '182.4.70.41', NULL),
(10, 'Mardiyana, AMD, KKK', 'Petugas', 'mardiyana', 'mardiyana@kemenag.go.id', NULL, '$2y$10$JhhcNg7xl739NB2snLNV9.xakcDQGnxs9XwFSZnClPhK1Nr746DEa', 'no', 'active', 'kkwlfl99YeqSJGiUvyn680j7rirZoR8WtzegxwSWNbJzdNzjEhwMMyXnd51Z', NULL, '2023-02-27 00:58:34', NULL, '', '', NULL, 'salido28', 'https://res.cloudinary.com/kemenagpessel/image/upload/v1668586426/profile_picture_pegawai/zfljryw0xdbti8kntxu9.jpg', '082392359361', '2023-02-27 07:58:34', '36.69.10.177', NULL),
(11, 'Afrison, S.HI', 'Staf', '197901012007101004', '197901012007101004@kemenag.go.id', NULL, '$2y$10$CrAJiEciEVy6OYNVdnb3Nu8GHZrcd8xK2wSsCahdjwu4H4M8YpRxi', 'no', 'active', '76biFaWZ3FPzKJP7NDNEI5zOU2sLzLQ9SQQhBH43nJgNFcvkaLBsECwlNdsP', NULL, '2023-02-27 03:13:07', NULL, '', '', NULL, 'Solun41233', 'https://res.cloudinary.com/kemenagpessel/image/upload/v1668135412/profile_picture_pegawai/ug07xmk4pz4zalwn12ig.jpg', '082382120004', '2023-02-27 10:13:07', '36.69.10.177', NULL),
(12, 'Upik Mike, S.AP', 'Staf', '198505202014122005', '198505202014122005@kemenag.go.id', NULL, '$2y$10$W9J7/JOPXLje570aHdniUOloLtlupIlPRgA9oU4bhWuMiViC600i.', 'no', 'active', NULL, NULL, '2022-11-22 08:37:04', NULL, '', '', NULL, 'MIKE1985', 'https://res.cloudinary.com/kemenagpessel/image/upload/v1669106125/profile_picture_pegawai/haqlsrfxpvl0sz1pck40.jpg', '085365171049', '2022-11-22 15:37:04', '36.69.9.81', NULL),
(13, 'Anna Yoladevika, SH', 'Staf', '197505152005012003', '197505152005012003@kemenag.go.id', NULL, '$2y$10$RMx6zJe6.Oxscz993ecKPOtbkPZNU/jqf/ZyX16VMNnwk6PA5BVl2', 'no', 'active', NULL, NULL, '2022-11-21 03:28:16', NULL, '', '', NULL, 'tnzannadel123', 'https://res.cloudinary.com/kemenagpessel/image/upload/v1668501648/profile_picture_pegawai/rb8sb0zey97x85rrthla.jpg', '081276132848', '2022-11-21 10:28:16', '36.69.9.81', NULL),
(14, 'Sri Mulyani, SH', 'Staf', '198006222014112002', '198006222014112002@kemenag.go.id', NULL, '$2y$10$doN5RnvI9qnbgIflMeEfyO7tzra1L62c0G/NqyKKYHdvCGkLc6FNu', 'no', 'active', NULL, NULL, '2023-01-26 07:42:41', NULL, '', '', NULL, 'Nanny80', NULL, '081266143326', '2023-01-26 14:42:41', '36.69.13.215', NULL),
(15, 'Yunefri, S.Kom', 'Staf', '197406142007101001', '197406142007101001@kemenag.go.id', NULL, '$2y$10$.ksGGyubWedwoOnroc1bAehvimy6SSOfIVNhvHzVh4KuZ2WKv8Q36', 'no', 'active', NULL, NULL, '2022-11-15 04:59:43', NULL, '', '', NULL, 'yunefri', 'https://res.cloudinary.com/kemenagpessel/image/upload/v1668488369/profile_picture_pegawai/eep4gtnbfjj4ppqtkw15.jpg', '082169150899', '2022-11-15 11:57:43', '36.69.13.138', NULL),
(16, 'Del Junefri, SE', 'Staf', '197606082009121001', '197606082009121001@kemenag.go.id', NULL, '$2y$10$fJLhYdHUkpRXcZYhBcTTxuEhaOPD.T.Rfi76mVGHWr0TUB7EsqC3C', 'no', 'active', NULL, NULL, '2023-02-13 08:57:49', NULL, '', '', NULL, 'sabam1976', 'https://res.cloudinary.com/kemenagpessel/image/upload/v1668487869/profile_picture_pegawai/tvps0jmmx5ma0h7hg4j3.jpg', '081363389622', '2023-02-13 15:57:49', '182.4.68.52', NULL),
(17, 'Ramadhanera P Madya, SE', 'Staf', '198705122011012008', '198705122011012008@kemenag.go.id', NULL, '$2y$10$LO56ArYTOwF.UHIwKpU0XOaPXsXnSy0Sh1TUK9xuZhDiRUan80ZSK', 'no', 'active', 'H1awlId7qVkcwuNYhoIKYKvCupwzAzcVCNQmq1mwd5e9hR87fxhBWvDRsgz5', NULL, '2023-02-16 04:59:41', NULL, '', '', NULL, '@haera87', NULL, '081363107032', '2023-02-16 11:59:41', '2001:448a:1108:16bf:9418:1df2:9514:ded7', NULL),
(18, 'Nila Oksana, A. Ma', 'Staf', '198210132007102002', '198210132007102002@kemenag.go.id', NULL, '$2y$10$jUvE6bGw.CZtC3xekRbzHeS1b.GSH214qP/lojLqzC/DPvQ6vslPe', 'no', 'active', NULL, NULL, '2022-12-07 01:04:26', NULL, '', '', NULL, '299627', NULL, '082171854283', '2022-12-07 08:04:26', '2001:448a:1107:1d4c:8476:408c:c268:8691', NULL),
(19, 'Roni Hendra', 'Staf', '198212152005011002', '198212152005011002@kemenag.go.id', NULL, '$2y$10$JxcF9C.o4eS6mNhjH2KDDuHoVAogKjlW5UOvrl6ycW5wA.DegAvBq', 'no', 'active', NULL, NULL, '2022-10-19 20:48:25', NULL, '', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(20, 'Asriwansyah', 'Staf', '198204032005011001', '198204032005011001@kemenag.go.id', NULL, '$2y$10$iMsJoLxHoRde6ATfEsuDPOPJKHtG4AlBaui8rK7fRyDGuOdr7RFn6', 'no', 'active', NULL, NULL, '2022-10-19 20:48:25', NULL, '', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(21, 'Heru Syafri,A.Ma', 'Staf', '198212262005011004', '198212262005011004@kemenag.go.id', NULL, '$2y$10$Px7kTIj4dnDMuGkI5rJhKesUYy8GYfc4fIydUh2AgKFA5QTUXk792', 'no', 'active', NULL, NULL, '2023-02-16 05:00:24', NULL, '', '', NULL, '139004Yeyen', 'https://res.cloudinary.com/kemenagpessel/image/upload/v1667980179/profile_picture_pegawai/kok43zduz9jjjmlgxbfb.jpg', '082170172398', '2023-02-16 12:00:24', '182.4.68.204', NULL),
(22, 'Meiriza Lidya, S.S', 'Staf', 'meiriza', 'Meiriza@kemenag.go.id', NULL, '$2y$10$0lbtPdfoJJ/trP2iAux6quYMEdkmpVzoOG1KJKjCvRHaxE7Pi1fq.', 'no', 'active', '4w3NOhxbVIYuxZNROmn1OazvjzDRZZShpMry9KSCWS5qTz6nNfq4GPNYdLAq', NULL, '2023-02-06 06:18:40', NULL, '', '', NULL, 'meirizalidya', 'https://res.cloudinary.com/kemenagpessel/image/upload/v1668762684/profile_picture_pegawai/cgej2hwtmomc5lxlwjvm.jpg', '082388761707', '2023-02-06 13:18:40', '36.69.10.46', NULL),
(23, 'Fauzhi Abdhilah, S.Kom', 'Staf', 'Fauzhi', 'Fauzhi@kemenag.go.id', NULL, '$2y$10$PCNf26O5DGNoNgXduI6KEe74BSG3aHQ69jp19W2xAyhmaIvJH3MC2', 'no', 'active', 'ITXK2vBla56LxKi9DcXfBMSEP4Q0OZazuO7EC4LKgqNsVfQbk4kYzfeKZoVS', NULL, '2023-02-21 05:05:12', NULL, '', '', NULL, NULL, 'https://res.cloudinary.com/kemenagpessel/image/upload/v1672044600/profile_picture_pegawai/qres26nc2dsntgjggfsw.jpg', '085279649995', '2023-02-21 12:05:12', '182.4.69.91', NULL),
(24, 'Dewi Martaliza, S.AP', 'Staf', '197903062014122002', '197903062014122002@kemenag.go.id', NULL, '$2y$10$CudmLeto3aIvEb0c9wX6pued11Koe5TB7wCMmDMtb.9HB4YvYlg0q', 'no', 'active', '6fouso0Vvqr5HYE53t4lx6WDJpUu6u1OFHzUHMl1ZtNnGoeaUfRxlKeWWLNm', NULL, '2023-02-08 02:23:31', NULL, '', '', NULL, 'dewipenmad1979', NULL, '081378204100', '2023-02-08 09:23:31', '36.69.13.60', NULL),
(25, 'MARDANITA JALPIDA, S.S', 'Staf', '198003162007102002', '198003162007102002@kemenag.go.id', NULL, '$2y$10$pP5sUMX4D3pLLD.qtkfOBePKe5qkB9qh.Lc0srRkVKuVUDQj1lBaW', 'no', 'active', '5pLrlWHh1n90LGdcvLY0ZEeF3UU0gFO352KUEIYz9P26vbcRnhvciAs9njfG', NULL, '2023-02-24 08:13:47', NULL, '', '', NULL, '030709', NULL, '081363737381', '2023-02-24 15:13:47', '36.69.11.121', NULL),
(26, 'Liswarti, S.Th I', 'Staf', '198104122009012004', '198104122009012004@kemenag.go.id', NULL, '$2y$10$lg6X3PMOT6bfZPcRDUxTNO2C.tD/0oXdzGQeHCUTZHlLfWnEJRcbK', 'no', 'active', 'ht6Q7BpYcccC5p3qUQybmxXj3QthIvsOYeehZYLul7LRcSk20RpTaJDj9PeS', NULL, '2023-02-16 10:45:53', NULL, '', '', NULL, 'solitra', NULL, '08126730542', '2023-02-16 17:45:53', '2001:448a:110e:1ee2:81d5:1a02:2e52:263', NULL),
(27, 'Martinis, S.Th I', 'Staf', '197101152007102002', '197101152007102002@kemenag.go.id', NULL, '$2y$10$zDtFIMlxpFW4R4P1neuHn..JX9xrRKTAKggiX3kga3zRtFbu1jxhK', 'no', 'active', 'nllE8UlmT47W9FLWXrFxUSl1p7H8HPnrKbEyY2D0Bg67y7ACRjrBXM1cwcNN', NULL, '2023-02-24 02:24:34', NULL, '', '', NULL, 'martinis', NULL, '082284648216', '2023-02-24 09:24:34', '36.69.11.121', NULL),
(28, 'ENDRIZAL, S.Ag. MA', 'Staf', '197205062007101002', '197205062007101002@kemenag.go.id', NULL, '$2y$10$2Nzjc4pR8XM2M/HJ0jrLFeH0oHBiTlUHpSVWVE8911IhH0b30bci.', 'no', 'active', 'EVvpv5rwRtu7bDjUz9zlWdgzt6pfXvWgfQ9zFU5To15jqpj76bkeZrfSOs0k', NULL, '2023-02-28 01:48:51', NULL, '', '', NULL, 'UJANGGUCI', NULL, '082286361693', '2023-02-28 08:48:51', '36.69.10.171', NULL),
(29, 'Syafria Norawati, A.Ma', 'Staf', '198004142007102006', '198004142007102006@kemenag.go.id', NULL, '$2y$10$lX1whRSBqs/kfFbmHseMlesGcNuPKoHCiNr1JLQ7S5LC2kmwGogTW', 'no', 'active', NULL, NULL, '2022-12-16 07:32:17', NULL, '', '', NULL, NULL, NULL, '081266712835', '2022-12-16 14:32:17', '36.69.13.103', NULL),
(30, 'MARSEHARTI, S.Ag', 'Staf', '197208212000032003', '197208212000032003@kemenag.go.id', NULL, '$2y$10$jDjqgy1QSK/UsiR6GlvN4OIappD/Sr0raKFBwPnbI632TEsaz7ZXS', 'no', 'active', 'ywNnGpb2lahk6FzonseRF35KVvz0lsue47IQVni7NJJir4Yw0g9DNyDbCc2Y', NULL, '2023-02-17 13:13:43', NULL, '', '', NULL, 'marse123', 'https://res.cloudinary.com/kemenagpessel/image/upload/v1668133923/profile_picture_pegawai/ofappdn0966bxz5dwvza.jpg', '081367642590', '2023-02-17 20:13:43', '182.4.71.78', NULL),
(31, 'Efnurdawati, S.HI', 'Staf', '197809292005012003', '197809292005012003@kemenag.go.id', NULL, '$2y$10$tBu5F5EocOgSVerwHjCD5utF9kl/dFBLJRTW68RFu.sxety3q6UUu', 'no', 'active', NULL, NULL, '2023-02-16 08:18:21', NULL, '', '', NULL, 'efnurdawati', 'https://res.cloudinary.com/kemenagpessel/image/upload/v1668135634/profile_picture_pegawai/jgpvbhko8ltdxfrt3stq.jpg', '081363686080', '2023-02-16 15:18:21', '36.69.11.27', NULL),
(32, 'Afriyasni', 'Staf', '196508281989032001', '196508281989032001@kemenag.go.id', NULL, '$2y$10$ZfHci5Ng07m.1HlS.C4XYuR25Z42t/RUFWLI9gcTZnfpBmiOXE6Gu', 'no', 'active', 'CRWoymFU20LydnTjJGi27lF74fo0GKigiL73MfuTAgBRS1Q4TgFGarpNV0nr', NULL, '2023-02-23 03:31:31', NULL, '', '', NULL, 'afriyasni', NULL, '085265725671', '2023-02-23 10:31:31', '36.69.11.190', NULL),
(33, 'ERMANINGSIH ', 'Staf', '197706292007102008', '197706292007102008@kemenag.go.id', NULL, '$2y$10$Zpyt74ysW0rRysmV4.Zs8u94UOljh/3IqVPu01FisUIHar1gg.E/2', 'no', 'active', 'r2wHsJKeYnd8Ir01EZOxsOz8uu3epjgGWo7KwRj4ZJ2w9pVnkvFs34wKUTUE', NULL, '2023-02-14 01:28:36', NULL, '', '', NULL, 'muspiyarto', NULL, '081363857776', '2023-02-14 08:28:36', '36.69.10.162', NULL),
(34, 'NELDAFINA, A.Md', NULL, '197112252007102002', 'neldafina71@gmail.com', NULL, '$2y$10$R1nWDThl2DjFBGFoSF15Bu2VikVEnBWxTesKZmp4aPmlu0t/NuxqS', 'no', 'active', NULL, '2022-10-20 05:18:38', '2023-01-27 03:58:07', NULL, '', '', NULL, 'UmiHan71', 'https://res.cloudinary.com/kemenagpessel/image/upload/v1668487080/profile_picture_pegawai/qtfojkks76fcsgch5xgk.jpg', '082384691612', '2023-01-27 10:58:07', '2001:448a:1107:128c:9065:52ed:b413:46e3', NULL),
(35, 'SYARIFUDDIN ', 'Staf', '196503032014111003', '196503032014111003@kemenag.go.id', NULL, '$2y$10$881w6zAfpzrteR4baeqqOu3yBGQVwMeIDpNyOlI8AxvExepo5pR/2', 'no', 'active', NULL, '2022-10-22 05:13:50', '2022-10-22 05:13:48', NULL, '', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(36, 'YUSNETI', 'Staf', '196702121998032002', '196702121998032002@kemenag.go.id', NULL, '$2y$10$9DbRavrta4xkUfBC4eLv/eyVkYhdzdG286/dh1JLCx2s4TdmTDisa', 'no', 'active', NULL, '2022-10-22 05:13:50', '2022-10-22 05:13:49', NULL, '', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(37, 'ASRIL. M', 'Staf', '196807031989021001', '196807031989021001@kemenag.go.id', NULL, '$2y$10$nomH2OLKmGTCammWqSZMWO6xZMKjEwInmJ40RIKTJm4rahmRB9z0S', 'no', 'active', NULL, '2022-10-22 05:13:50', '2022-10-22 05:13:49', NULL, '', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(38, 'AFNIZON, S.A.P', 'Staf', '197610182009011004', 'afnizon@kemenag.go.id', NULL, '$2y$10$YM5syX6LsA70NlMVbgZ8peyppZJR6qklAr/n1k3dKE4DPgwh03G1S', 'no', 'active', NULL, '2022-10-22 05:13:50', '2022-11-22 01:26:27', NULL, '', '', NULL, 'adeoktavia', 'https://res.cloudinary.com/kemenagpessel/image/upload/v1667797799/profile_picture_pegawai/f9nk3d0eeye0tayxavrt.jpg', '085374346605', '2022-11-22 08:26:27', '203.78.120.128', NULL),
(39, 'KOKO NURHADI YANTO', 'Staf', '198305042014111002', '198305042014111002@kemenag.go.id', NULL, '$2y$10$6VeDQSM64CgE3ordbpdCj.3ZlupZ0nhOSKbbJ9.kF5ktQse9a.U/q', 'no', 'active', NULL, '2022-10-22 05:13:50', '2023-01-08 11:39:23', NULL, '', '', NULL, 'muh4mm4d', 'https://res.cloudinary.com/kemenagpessel/image/upload/v1667800138/profile_picture_pegawai/ivwfundyded835xdq2qa.jpg', '082374444468', '2023-01-08 18:39:23', '2001:448a:110d:1039:8cb1:5ea9:8515:5cdc', NULL),
(40, 'ZULKIFLI', 'Staf', '196410112014111002', '196410112014111002@kemenag.go.id', NULL, '$2y$10$rw.2joxtn9Tr0wNjvNC.je9oV/FQUuywSPS3MvFpTk1uIl3NURNNm', 'no', 'active', NULL, '2022-10-22 05:13:50', '2022-10-22 05:13:49', NULL, '', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(41, 'SARIFAH AINI, S.Th I', 'Staf', '198701032011012010', '198701032011012010@kemenag.go.id', NULL, '$2y$10$wWSHusRfIVybvwPk7hS0y.BzzG75Oa8VQEgjXXm3nuLtyu17/rz9e', 'no', 'active', 'F1GU7J1NWmp1dx48MxanQPyWp9pQXI2mzzhKElbhs9zRx2CYiZf663euPE8h', '2022-10-22 05:13:50', '2023-01-13 08:03:47', NULL, '', '', NULL, NULL, NULL, '085374356111', '2023-01-13 15:03:47', '36.69.12.147', NULL),
(42, 'DODY YUSRIYAL', 'Staf', '198406262007101003', '198406262007101003@kemenag.go.id', NULL, '$2y$10$51gfthqp8FMvPfxPlfcUXe2Csqfuu8maI1umLDrDN4D9Gu9RGrX52', 'no', 'active', NULL, '2022-10-22 05:13:50', '2022-11-21 02:52:42', NULL, '', '', NULL, 'b1asosenyo', NULL, '082384449554', '2022-11-21 09:52:42', '198.16.66.140', NULL),
(43, 'RICHO HARDIATNO, S.Pd', 'Staf', '198312122009011013', '198312122009011013@kemenag.go.id', NULL, '$2y$10$LbYdHrICFT4OLhrOfp6bZO8ROP0fYCeqO0oAQ1YIcqM36PeiIpoSu', 'no', 'active', 'SlUI986ag5cWKYnjTgdgYA8FWnwbdOMnlATSMs9etSMSxLQxWLPKe4Dade0c', '2022-10-22 05:13:50', '2022-12-13 03:05:22', NULL, '', '', NULL, 'gadisminang', 'https://res.cloudinary.com/kemenagpessel/image/upload/v1669970175/profile_picture_pegawai/jxcm4nj148u5k4czekcx.jpg', '082289337241', '2022-12-13 10:05:22', '36.69.8.134', NULL),
(44, 'USRI', 'Staf', '197505162014111001', '197505162014111001@kemenag.go.id', NULL, '$2y$10$63IkqLeWykSypCl0AvtCkeYlH6RyI0LE94WQ.BsE.Rf5LLl.QJ.ui', 'no', 'active', 'Gb9YBbEQtxq3GfodMmCr9hoS8axoqaJCrqZUhpTQrIYznHjDrPeAXgeliWNa', '2022-10-22 05:13:50', '2023-01-10 00:26:58', NULL, '', '', NULL, '12345678', 'https://res.cloudinary.com/kemenagpessel/image/upload/v1671079022/profile_picture_pegawai/tnzofinutnovp76wefa0.jpg', '085263136222', '2023-01-10 07:26:58', '36.69.12.147', NULL),
(45, 'H. JARMIL S.ThI', 'Staf', '198005152005011007', '198005152005011007@kemenag.go.id', NULL, '$2y$10$KmpLdNFOMWRGYqfemjvb4e5GTZmG5zN7cAwFaqgw3ilolEy4f1fJO', 'no', 'active', '1n7oyn5J7ufOipjXBkPT0JV5GWakeVRPX7bmQapXHfxEHM06UY6K6bhqN31W', '2022-10-22 05:13:50', '2023-02-16 05:38:24', NULL, '', '', NULL, 'Painan80', 'https://res.cloudinary.com/kemenagpessel/image/upload/v1671079309/profile_picture_pegawai/Screen_Shot_2022-12-15_at_11.40.16_AM_htzta5.png', '085263991850', '2023-02-16 12:38:24', '36.69.11.27', NULL),
(46, 'MUCHLIS, S.TP', 'Staf', '197603152005011006', '197603152005011006@kemenag.go.id', NULL, '$2y$10$UgVfbLqbVVQZGt7SZU6SOOa5GTGNCaJoQcAlge.Iuz2RBmnnQwHl.', 'no', 'active', NULL, '2022-10-22 05:13:50', '2022-10-22 05:13:50', NULL, '', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(47, 'M. Luthfi Al Paraby, S.Kom', NULL, 'luthfi', '1999mluthfi@gmail.com', NULL, '$2y$10$TgGBVcc3S6MrrJKCouRcs.4hMpYtfnkZyo4H5lJzxqDxKGHh6zUPu', 'no', 'active', NULL, '2022-11-21 01:08:36', '2023-02-22 02:40:34', NULL, '', '', NULL, 'Mla11041999', 'https://res.cloudinary.com/kemenagpessel/image/upload/v1669791614/profile_picture_pegawai/ji7qj8wmr86sfdekbox0.jpg', '082283601945', '2023-02-22 09:40:34', '36.69.10.23', NULL),
(48, 'Juni Hendri', NULL, 'junihendri', 'junihendri@gmail.com', NULL, '$2y$10$vYgY9LU3ZgWVaoBJG/U37.V64bDOeNPzIF7q/AmE//rMun0Zd0Zhm', 'no', 'active', 'VZgBLMEazJkDDUVQbFpeHSiox67fcNYLnJzQmX0W0lnOuJZzU4YiLR3dcDvF', '2022-12-15 04:25:55', '2022-12-22 08:57:16', NULL, '', '', NULL, 'junihendri1', NULL, '082384823442', '2022-12-22 15:56:06', '182.4.71.110', NULL),
(49, 'Hendri', NULL, 'hendri', 'hendri@kemenag.go.id', NULL, '$2y$10$OlNjlDeISyznzFw5qa7DAO2fJlHKVHBjhX0C1M4CQu8CCc.krIv7q', 'no', 'active', NULL, '2022-12-15 04:27:02', '2022-12-15 04:27:02', NULL, '', '', NULL, NULL, NULL, '082386652950', NULL, NULL, NULL),
(50, 'Pauzi Damra', NULL, 'pauzidamra', 'pauzidamra@kemenag.go.id', NULL, '$2y$10$txRldyRAHQmmXDs3/1fpwev.jUT.oQjZlzvBtx5eSWwVu58MFV9/6', 'no', 'active', NULL, '2022-12-15 04:28:11', '2022-12-15 04:28:11', NULL, '', '', NULL, NULL, NULL, '085210650753', NULL, NULL, NULL),
(51, 'Syahril', NULL, 'syahril', 'syahril@kemenag.go.id', NULL, '$2y$10$te8pTTNcRPyPtYFojUyjBOy.idh5kOlrJk4AyZA/Il/FFBFCkfCJK', 'no', 'active', NULL, '2022-12-15 04:29:00', '2022-12-15 04:29:00', NULL, '', '', NULL, NULL, NULL, '082389202281', NULL, NULL, NULL),
(52, 'Afrinozayenti', NULL, 'afrinozayenti', 'afrinozayenti@kemenag.go.id', NULL, '$2y$10$pY2mXg09TJ82o4qquHQIb.IjsVfPcMrwx7Znkq0MVR2JTuOqr4lWm', 'no', 'active', NULL, '2023-01-02 08:28:59', '2023-01-02 08:30:41', NULL, '', '', NULL, 'afrinozayenti123', 'https://res.cloudinary.com/kemenagpessel/image/upload/v1672648211/profile_picture_pegawai/qsrkmv368vaqgumswhas.png', '0282387254516', '2023-01-02 15:29:25', '36.69.10.135', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_username_unique` (`username`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
