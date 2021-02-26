CREATE TABLE `compraventa`.`usuarios` ( `id` INT NOT NULL AUTO_INCREMENT , `usuario` VARCHAR(20) NOT NULL , `email` VARCHAR(100) NOT NULL , `password` VARCHAR(255) NOT NULL , PRIMARY KEY (`id`), UNIQUE `usuarios_email` (`email`)) ENGINE = InnoDB;

CREATE TABLE `compraventa`.`productos` ( `id` INT NOT NULL , `usuario_id` INT NOT NULL , `producto` VARCHAR(50) NOT NULL , `precio` INT NOT NULL , PRIMARY KEY (`id`)) ENGINE = InnoDB;

ALTER TABLE `productos` ADD CONSTRAINT `fk_usuario_id` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios`(`id`) ON DELETE CASCADE ON UPDATE RESTRICT;