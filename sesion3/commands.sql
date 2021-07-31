-- Seleccionar todos los registros y columnas
-- de la tabla Producto
SELECT * FROM Producto;

-- Seleccionar los nombres de las categorias
SELECT Nombre FROM Categoria;

-- Obtener el producto mas caro de la tabla Producto
SELECT * FROM Producto
ORDER BY Precio DESC
LIMIT 1;

-- Obtener los productos cuyo precio esten entre 2 y 3
SELECT * FROM Producto
WHERE Precio BETWEEN 2 AND 3;

-- Insertar un nuevo producto (Zanahoria)
INSERT INTO Producto
(Nombre, Descripcion, Precio, SKU, idCategoria)
VALUES 
("Carrot", "Baby Carrots", 4.5, "VG002", 1);

-- Eliminar el producto con id 1
DELETE FROM Producto
WHERE idProducto = 1;

-- Actualizar el precio del producto cuyo id sea 2 
UPDATE Producto
SET Precio = 2.75
WHERE idProducto = 2;