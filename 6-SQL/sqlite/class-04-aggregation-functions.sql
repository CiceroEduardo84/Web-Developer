SELECT * FROM orders;

SELECT * FROM orders ORDER BY pais;
SELECT * FROM orders ORDER BY pais DESC;

SELECT DISTINCT pais FROM orders ORDER BY pais;
SELECT DISTINCT segmento FROM orders ORDER BY segmento;

SELECT * FROM orders WHERE pais LIKE 'Brazil';
SELECT * FROM orders WHERE pais LIKE '%au';
SELECT * FROM orders WHERE pais LIKE 'au%';
SELECT * FROM orders WHERE pais LIKE '%tau%';

SELECT * FROM orders WHERE regiao LIKE '_ar%';

SELECT * FROM orders 
WHERE pais 
IN ('Brazil', 'Argentina');

SELECT * FROM orders 
WHERE total_vendas 
BETWEEN 500 AND 1000;

SELECT
    COUNT(*) AS QTD,
    ROUND(SUM(total_vendas), 2) AS total,
    MIN(total_vendas),
    MAX(total_vendas),
    AVG(total_vendas)
FROM orders 
WHERE pais = 'Brazil';

SELECT 
    pais, 
    ROUND(SUM(total_vendas)) AS Total
FROM orders 
GROUP BY pais
ORDER BY Total DESC;

SELECT id_pedido, COUNT(id_pedido) 
FROM orders 
GROUP BY id_pedido;

SELECT COUNT(id_cliente) 
FROM orders 
GROUP BY id_cliente;

SELECT * FROM orders 
WHERE id_pedido = 'AG-2014-6650';