-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 31-12-2020 a las 11:45:22
-- Versión del servidor: 10.1.47-MariaDB-0+deb9u1
-- Versión de PHP: 7.4.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `teatro`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `obra`
--

CREATE TABLE `obra` (
  `id` int(11) NOT NULL,
  `cod_obra` varchar(100) NOT NULL,
  `nombre` varchar(250) NOT NULL,
  `descripcion` text NOT NULL,
  `fecha_obra` date NOT NULL,
  `aforo` int(11) NOT NULL,
  `disponible` int(11) NOT NULL,
  `sala` varchar(250) NOT NULL,
  `img` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `obra`
--

INSERT INTO `obra` (`id`, `cod_obra`, `nombre`, `descripcion`, `fecha_obra`, `aforo`, `disponible`, `sala`, `img`) VALUES
(1, '1', 'Avengers', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas enim nisl, fringilla pellentesque leo vel, tincidunt tempor erat. Nullam eget posuere dui. Maecenas condimentum ex et erat venenatis, eu elementum mi condimentum. Ut sit amet tortor in sem ullamcorper pulvinar. Phasellus et pulvinar arcu. Aenean in porttitor urna. Curabitur bibendum turpis in massa luctus tristique ac a nisi. Nam viverra ultricies augue eu lacinia. Nulla vitae metus nulla. Ut a venenatis nibh, vel aliquam nulla.  Sed mattis neque eget urna convallis, et posuere elit dapibus. Donec ornare euismod enim eget posuere. Aenean vulputate nulla sed lectus tempus malesuada. Sed luctus ullamcorper quam et posuere. Sed ornare a arcu ac tristique. Donec pharetra, libero at porttitor iaculis, nisi leo auctor tellus, quis porta enim nibh in odio. Nullam ante eros, porttitor et ante at, venenatis aliquam magna.', '2020-12-31', 10, 10, 'Principal', 'assets/images/archivos/obras/avengers.jpg'),
(2, '2', 'ThunderCats', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas enim nisl, fringilla pellentesque leo vel, tincidunt tempor erat. Nullam eget posuere dui. Maecenas condimentum ex et erat venenatis, eu elementum mi condimentum. Ut sit amet tortor in sem ullamcorper pulvinar. Phasellus et pulvinar arcu. Aenean in porttitor urna. Curabitur bibendum turpis in massa luctus tristique ac a nisi. Nam viverra ultricies augue eu lacinia. Nulla vitae metus nulla. Ut a venenatis nibh, vel aliquam nulla.  Sed mattis neque eget urna convallis, et posuere elit dapibus. Donec ornare euismod enim eget posuere. Aenean vulputate nulla sed lectus tempus malesuada. Sed luctus ullamcorper quam et posuere. Sed ornare a arcu ac tristique. Donec pharetra, libero at porttitor iaculis, nisi leo auctor tellus, quis porta enim nibh in odio. Nullam ante eros, porttitor et ante at, venenatis aliquam magna.', '2020-12-31', 12, 3, 'Secundaria', 'assets/images/archivos/obras/thundercats.jpg'),
(3, '3', 'Punisher', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas enim nisl, fringilla pellentesque leo vel, tincidunt tempor erat. Nullam eget posuere dui. Maecenas condimentum ex et erat venenatis, eu elementum mi condimentum. Ut sit amet tortor in sem ullamcorper pulvinar. Phasellus et pulvinar arcu. Aenean in porttitor urna. Curabitur bibendum turpis in massa luctus tristique ac a nisi. Nam viverra ultricies augue eu lacinia. Nulla vitae metus nulla. Ut a venenatis nibh, vel aliquam nulla.  Sed mattis neque eget urna convallis, et posuere elit dapibus. Donec ornare euismod enim eget posuere. Aenean vulputate nulla sed lectus tempus malesuada. Sed luctus ullamcorper quam et posuere. Sed ornare a arcu ac tristique. Donec pharetra, libero at porttitor iaculis, nisi leo auctor tellus, quis porta enim nibh in odio. Nullam ante eros, porttitor et ante at, venenatis aliquam magna.', '2020-12-31', 10, 4, 'Coliseo', 'assets/images/archivos/obras/punisher.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombres_apellidos` varchar(250) NOT NULL,
  `correo` varchar(250) NOT NULL,
  `codigo` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombres_apellidos`, `correo`, `codigo`) VALUES
(1, 'Gianni Santucci', 'gianni.d.santucc@gmail.com', '1');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ventas`
--

CREATE TABLE `ventas` (
  `numero_venta` int(11) NOT NULL,
  `cod_obra` varchar(250) NOT NULL,
  `comprador` int(11) NOT NULL,
  `fecha_compra` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `ventas`
--

INSERT INTO `ventas` (`numero_venta`, `cod_obra`, `comprador`, `fecha_compra`) VALUES
(26, '3', 1, '2020-12-31'),
(27, '2', 1, '2020-12-31'),
(28, '2', 1, '2020-12-31'),
(29, '3', 1, '2020-12-31'),
(30, '2', 1, '2020-12-31'),
(31, '2', 1, '2020-12-31'),
(32, '2', 1, '2020-12-31'),
(33, '2', 1, '2020-12-31'),
(34, '2', 1, '2020-12-31');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `obra`
--
ALTER TABLE `obra`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `ventas`
--
ALTER TABLE `ventas`
  ADD PRIMARY KEY (`numero_venta`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `obra`
--
ALTER TABLE `obra`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `ventas`
--
ALTER TABLE `ventas`
  MODIFY `numero_venta` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
