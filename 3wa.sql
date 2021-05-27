-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : jeu. 27 mai 2021 à 10:10
-- Version du serveur :  10.4.11-MariaDB
-- Version de PHP : 7.4.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `3wa`
--

-- --------------------------------------------------------

--
-- Structure de la table `order`
--

CREATE TABLE `order` (
  `id` int(11) NOT NULL,
  `totalAmount` double NOT NULL,
  `dateCreation` datetime NOT NULL,
  `user_id` int(11) NOT NULL,
  `status` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `orderdetails`
--

CREATE TABLE `orderdetails` (
  `id` int(11) NOT NULL,
  `order_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `total_price` double NOT NULL,
  `quantity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(60) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `price` double DEFAULT NULL,
  `url` varchar(260) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `dateCreation` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `products`
--

INSERT INTO `products` (`id`, `name`, `description`, `price`, `url`, `quantity`, `dateCreation`) VALUES
(3, 'Nike Air Max 96 II Denim QS', 'Une inspiration Varsity pour ce pack de Air Max 96 II', 170, 'https://www.sneakers.fr/wp-content/uploads/2021/05/Nike-Air-Max-96-II-Denim-6.jpeg', 5, '2021-05-27 09:59:33'),
(4, 'Nike SB Blazer Court x Daan Van Der Linden - Baroque Brown', 'Cette Nike SB Blazer Court x Daan Van Der Linden Baroque Brown appartient à la collection Summer 2021.', 69, 'https://media3.fenom.com/69719-product_xl/xnike-sb-blazer-court-x-daan-van-der-linden-baroque-brown.jpg.pagespeed.ic.5hzmtk7Gcq.jpg', 9, '2021-05-27 09:59:33'),
(5, 'Converse Jack Purcell OX Todd Snyder - Obsidian/Egret', 'Cette Converse Jack Purcell OX Todd Snyder Obsidian/Egret est une édition limitée de la collection Summer 2021.', 99, 'https://media1.fenom.com/70117-product_xl/converse-jack-purcell-ox-todd-snyder-obsidianegret.jpg', 6, '2021-05-27 10:02:48'),
(6, 'Jordan Air Jordan 3 Retro - Georgetown', 'Cette Jordan Air Jordan 3 Retro Midnight Navy s\'inspire du célèbre coloris de l\'équipe universitaire des Georgetown Hoays. Cette sneaker est issue de la collection Spring 2021.', 190, 'https://media1.fenom.com/68387-product_xl/jordan-air-jordan-3-retro-georgetown.jpg', 11, '2021-05-27 10:02:48');

-- --------------------------------------------------------

--
-- Structure de la table `prospect`
--

CREATE TABLE `prospect` (
  `id` int(11) NOT NULL,
  `email` varchar(90) NOT NULL,
  `dateCreation` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `firstname` varchar(60) DEFAULT NULL,
  `lastname` varchar(60) DEFAULT NULL,
  `email` varchar(90) DEFAULT NULL,
  `password` varchar(120) DEFAULT NULL,
  `role` varchar(15) DEFAULT NULL,
  `address` varchar(60) DEFAULT NULL,
  `zip` int(5) DEFAULT NULL,
  `city` varchar(40) DEFAULT NULL,
  `phone` varchar(15) DEFAULT NULL,
  `dateCreation` datetime DEFAULT NULL,
  `connexion` datetime DEFAULT NULL,
  `validate` varchar(90) DEFAULT NULL,
  `key_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `firstname`, `lastname`, `email`, `password`, `role`, `address`, `zip`, `city`, `phone`, `dateCreation`, `connexion`, `validate`, `key_id`) VALUES
(10, 'Bapt', 'Smith', 'toto@toto.com', '$2b$10$GGJc.eyXpg/rAn/51hHyPeVG/ukfdAX03AiKVIH4SWWP3LwZOMKju', 'user', '2 rue', NULL, 'Los Angeles', '08080808', '2021-05-26 10:19:44', NULL, 'no', 9),
(11, 'sdf', 'sdf', 'sdf@sdf.com', '$2b$10$QUq4kX.dNiGEte2mb.FvLejZ.cNsVZKkNgjcpYArfUkWvCcXbWz12', 'user', 'dsf', NULL, 'sdf', '08080808', '2021-05-26 10:24:30', NULL, 'no', 0);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `order`
--
ALTER TABLE `order`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `orderdetails`
--
ALTER TABLE `orderdetails`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `prospect`
--
ALTER TABLE `prospect`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `order`
--
ALTER TABLE `order`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `orderdetails`
--
ALTER TABLE `orderdetails`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT pour la table `prospect`
--
ALTER TABLE `prospect`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
