---
tags:
  - mate
  - 2Bach
layout: schoolPost.njk
title: Matrices
excerpt: En este bloque podrás encontrar apuntes sobre las matrices de 2º de bachillerato.
featuredImage: /assets/images/matrices.png
imageAlt: Matrices
---

# Matrices:
- Conjunto de números ordenados en filas y columnas.
- La dimensión de una matriz es su número de filas por su número de columnas.
- Los números se escriben en un gran paréntesis.
- Las matrices las nombramos con letras mayúsculas.


$$ A = \begin{pmatrix} 1 & 2 & 1 & 5 \\\\ 3 & 4 & -1 & 2 \\\\ 3 & 1 & 6 & 0 \end{pmatrix}_{3x4} $$

## Matriz fila:
- Matriz con una única fila.

$$ A = \begin{pmatrix} 2 & -1 & 0 & 3 \end{pmatrix}_{1\times 4} $$

## Matriz columna:
- Matriz que tiene únicamente una columna.
	
$$ B = \begin{pmatrix} 11 \\\\ 2 \\\\ -31 \end{pmatrix}_{3\times 1} $$

## Matriz cuadrada:
- A las matrices cuadradas de dimesión n x n se las suele llamar matrices de orden n.

$$ C = \begin{pmatrix} 2& -1& 3 \\\\ 0& -2& \pi \\\\ 3& 1& -2 \end{pmatrix} \rightarrow\mathrm{matriz} \ \mathrm{de} \ \mathrm{orden} \ \mathrm{3} $$
 
## Matriz diagonal:
- Todo 0 salvo la diagonal principal.

$$ E = \begin{pmatrix} 2& 0& 0 \\\\ 0& -1 & 0 \\\\ 0& 0& 3 \end{pmatrix}\_{3x3} F = \begin{pmatrix} 2 & 0 \\\\ 0 & 0 \end{pmatrix}_{2\times 2} $$
 
 ## Matriz escalar:
- Es una matriz diagonal pero con todos sus elementos de la diagonal principal iguales.
	
$$ G = \begin{pmatrix} 3 & 0 & 0 \\\\ 0& 3& 0 \\\\ 0 & 0 & 3 \end{pmatrix} $$

## Matriz identidad o unidad
- Es una matriz escalar con unos en la diagonal.
	
$$ \mathrm{Letra} \ \mathrm{reservada} \begin{cases} \mathrm{I}_2 = \begin{pmatrix} 1 & 0 \\\\ 0 & 1 \end{pmatrix} \\\\ \mathrm{I}_1 = \begin{pmatrix} 1 & 0 & 0 \\\\ 0& 1 & 0 \\\\ 0 & 0 & 1 \end{pmatrix} \end{cases}$$

- Es el elemento neutro de las matrices, es decir, el "1" de las matrices.
	
## Matriz nula:
$$ \mathrm{Letra} \ \mathrm{reservada} \begin{cases} \theta & = \begin{pmatrix} 0 & 0 & 0 \\\\ 0& 0& 0 \end{pmatrix} \\\\ & \\\\ \theta & = \begin{pmatrix} 0& 0 \\\\ 0& 0 \end{pmatrix} \end{cases} $$


-Todos sus elementos son cero.
	
	
## Matriz triangular
$$H = \begin{pmatrix} 2 & 1 & -1 \\\\ 0& 3& 4 \\\\ 0& 0 & 5 \end{pmatrix} \rightarrow \mathrm{T.superiror} $$


$$ J = \begin{pmatrix} 2 & 0 & 0 \\\\ 1& 1& 0 \\\\ 3& 1 & 5 \end{pmatrix} \rightarrow \mathrm{T.inferior} $$

## Matriz simétrica:
$$ K = \begin{pmatrix} 1 & 2 & 5 \\\\ 2& 3& -4 \\\\ 5& -4 & -1 \end{pmatrix} $$

## Matriz antisimétrica (Hemisimétrica):
- Es igual que la matriz simétrica pero los número simétricos tienen signos contrarios.

$$ L = \begin{pmatrix} 0 & -2 & -3 \\\\ 2& 0& 4 \\\\ 3& -4 & 0 \end{pmatrix} $$

## Matriz escalonada:
$$ M = \begin{pmatrix} 1 & 3 & -1 & 0 \\\\ 0 & 2 & 7 & 1 \\\\ 0 & 0 & 3 & 4 \end{pmatrix} $$

## Matriz traspuesta:
$$ \begin{matrix} B = \begin{pmatrix} 2 & 1 \\\\ -1 & 3 \end{pmatrix} \ \rightarrow A^{t} = \begin{pmatrix} 2 & -1 \\\\ 1& 3 \end{pmatrix} & \end{matrix} $$


$$ \begin{matrix} B = \begin{pmatrix} 2 & -1 & 3 \\\\ 4& 5 & -1 \end{pmatrix} \rightarrow B^{t} = \begin{pmatrix} 2 & 4 \\\\ -1& 5 \\\\ 3& -1 \end{pmatrix}& \end{matrix} $$


## Matriz inversa:
$$ A^{-1} = \frac{Adj(A^{t})}{|A|} $$
- Para calcular la matriz adjunta de la traspuesta, hay que quitar para cada número la fila y la columna a la que pertenecen y con los números restantes se calcula el determinante cuyo resultado irá en la posición de dicho número.
- Al colocar el número resultante del determinate habra que seguir la siguiente regla de signos:
$$\begin{vmatrix} + & - &+ \\\\ -& + & - \\\\ + & - & + \\\\ \end{vmatrix}$$

### Matriz inversa 2x2:
$$A^t = \begin{pmatrix} 2 & 7 \\\\ 4 & 3 \\\\ \end{pmatrix}$$
- Se intercambian los números de la diagonal principal
$$Adj(A^t) = \begin{pmatrix} 3 & 7 \\\\ 4 & 2 \\\\ \end{pmatrix}$$
- Se cambian los signos de la diagonal secundaria:
$$Adj(A^t) = \begin{pmatrix} 3 & -7 \\\\ -4 & 2 \\\\ \end{pmatrix}$$
- Por último se divide entre el determinate de A:
$$A^{-1} = \begin{pmatrix} -\frac{3}{22} & \frac{7}{22} \\\\ \frac{4}{22} & -\frac{2}{22} \\\\ \end{pmatrix}$$

# Operaciones con matrices:

## Suma
$$ \begin{pmatrix} 2 & -2 & 0 \\\\ 3& 1 & 1 \end{pmatrix} + \begin{pmatrix} -1 & 2 & 4 \\\\ 2& 2 & 2 \end{pmatrix} = \begin{pmatrix} 1 & 0 & 4 \\\\ 5& 3 & 3 \end{pmatrix} $$

<br/>

$$ \begin{pmatrix} 3 & 4 \\\\ -5 & 1 \end{pmatrix} - \begin{pmatrix} 2 & 1 \\\\ 0& -2 \end{pmatrix} = \begin{pmatrix} 1 & 3 \\\\ -5& 3 \end{pmatrix} $$

<br/>

$$ \begin{pmatrix} 2 & 1 \\\\ -1&3 \end{pmatrix} - \begin{pmatrix} 1 &2 \\\\ 0&1 \\\\ 4&2 \end{pmatrix} = \mathrm{No} \ \mathrm{se} \ \mathrm{puede} \ \mathrm{hacer.} $$ <br/>

- Solo se pueden sumar matrices si tienen la misma dimesión.
	

## Producto por un número:
$$ 3 \times \begin{pmatrix} 2 &1 & -1 \\\\ 3& -4 & 2 \end{pmatrix}= \begin{pmatrix} 6 & 3 & -3 \\\\ 9& -12 & 6 \end{pmatrix} $$

## Producto de dos matrices:

$$ \begin{pmatrix} 2 &1 & 3 \\\\ -1& 2 & 4 \end{pmatrix}\_{2\times 3} \times \begin{pmatrix} 0 & 3 & -1 \\\\ -3 & 1 & 2 \\\\ 4 & 2 & 1 \end{pmatrix}\_{3\times 3}= \begin{pmatrix} 9 & 13 & 3 \\\\ 10& 7 & 9 \end{pmatrix}_{2\times 3} $$

- Se puede hacer el producto porque la segunda dimensión de la primera matriz es igual a la dimensión de la segunda 3=3. 
	

$$ \begin{pmatrix} 0 & 3 & -1 \\\\ -3& 1 & 2 \\\\ 4 & 2 & 1 \end{pmatrix}\_{3\times 3} \times \begin{pmatrix} 2 & 1 &3 \\\\ -1& 2 & 4 \end{pmatrix}_{2\times 3} \rightarrow \mathrm{No} \ \mathrm{se} \ \mathrm{puede} \ \mathrm{hacer.} $$ 

- No se puede hacer el producto porque la segunda dimensión de la primera matriz NO es igual a la dimensión de la segunda 3≠2.
	
### Consecuencias de la NO conmutatividad del producto:
- Las identidades notables no existen en matrices.
	
## Potencia de matrices:
$$ \begin{pmatrix} 2 & -1 \\\\ 3& 2 \end{pmatrix}^{2} = \begin{pmatrix} 2 & -1 \\\\ 3 &2 \end{pmatrix} \times \begin{pmatrix} 2 & -1 \\\\ 3&2 \end{pmatrix} = \begin{pmatrix} 1 & -4 \\\\ 12&1 \end{pmatrix} $$
