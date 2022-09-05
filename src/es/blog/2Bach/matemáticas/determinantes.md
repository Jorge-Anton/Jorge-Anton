---
tags:
  - mate
  - 2Bach
layout: schoolPost.njk
title: Determinantes
excerpt: En este bloque podrás encontrar apuntes sobre los determinantes de 2º de bachillerato.
featuredImage: /assets/images/determinantes.png
imageAlt: Determinante
---

# Rango:
- El rango de una matriz es le orden del mayor subdeterminante (Menor) distinto de cero contenido en la matriz.
	

$$ A = \begin{pmatrix} 2 & 1 & -3 \\\\ 0 & 1 & 2\\\\ 1 & 1 & 4 \end{pmatrix}$$
$$\mathrm{Menor} \ \mathrm{de} \ \mathrm{orden} \ \mathrm{3}$$
$$ \begin{vmatrix} 2 & 1 & -3\\\\ 0 & 1 & 2\\\\ 1 & 1 & 4 \end{vmatrix} = 9 \cancel= 0 \rightarrow Rango(A)=3$$

# Propiedades de los determinantes:
## 1) Si una matriz tiene una fila o columna de ceros, su determinante vale 0
	
$$ \begin{vmatrix} 1 & 0 &2 \\\\ 3 & 0 & 5 \\\\ 2 & 0 & -1 \end{vmatrix} = 0 $$

## 2) Si una matriz tiene una fila o columnas iguales, su determinante es =.
	
$$ \begin{vmatrix} 1 & 2 &3 \\\\ -1 & 4 & 2 \\\\ 1 & 2 & 3 \end{vmatrix} = 0 $$

## 3) Si una matriz tiene dos filas o columnas proporcionales, su determinante es 0.
	
$$ \begin{vmatrix} 3 & 2 &6 \\\\ 5 & 4 & 10 \\\\ -1 & 2 & -2 \end{vmatrix} = 0 \rightarrow C_{3}=2C_{1} $$

## 4) Si una matriz tiene una fila o columna que sea una combinación lienal de las otras, su determinante es 0.
	
$$ \begin{vmatrix} 1 & 2 & 3 \\\\ 4& 5 & 6 \\\\ 5& 7 & 9 \end{vmatrix}= 0 \rightarrow F_{3}=2F_{2}-F_{1} $$

## 5) Si en una matriz permutamos dos filas o columnas su determinante varía únicamente en el signo.
	
$$ \begin{matrix} \begin{vmatrix} 2 & 1 & -3 \\\\ 1 & -1 & 2 \\\\ 1 & 1 & 2 \end{vmatrix} = -14 & & \begin{vmatrix} 1 & -1 & 2 \\\\ 2 & 1 & -3 \\\\ 1 & 1 & 2 \end{vmatrix} = 14 \end{matrix} $$

## 6) El determinante de una matriz es igual al de la matriz traspuesta.
	
$$ \begin{vmatrix} A \end{vmatrix}= \begin{vmatrix} A^{t} \end{vmatrix} $$

## 7)
$$ \begin{vmatrix} A^{-1} \end{vmatrix}= \frac{1}{\begin{vmatrix} A \end{vmatrix}} $$

## 8)
$$ \begin{vmatrix} AB \end{vmatrix} = \begin{vmatrix} A \end{vmatrix}\times \begin{vmatrix} B \end{vmatrix} $$

## 9)
$$ \begin{vmatrix} A^{n} \end{vmatrix}= \begin{vmatrix} A \end{vmatrix}^{n} $$

## 10) El determinante de una matriz triangular, es el producto de su diagonal.
	
$$ \begin{vmatrix} 1 & 2 & 1 \\\\ 0& -2 & 3 \\\\ 0 & 0 & 4 \end{vmatrix}= -8 $$

## 11) Si un número multiplicando a un determinante entra dentro, lo hace multiplicando únicamente a una fila o columna.
	
$$3 \cdot \begin{vmatrix} 1 & -1 \\\\ 2 & 3 \end{vmatrix} = \begin{vmatrix} 3 & -3 \\\\ 2 & 3 \end{vmatrix} $$ 
$$\begin{vmatrix} 1 & -1 \\\\ 6 & 9 \end{vmatrix}$$
$$\begin{vmatrix} 3 & -1 \\\\ 6 & 9 \end{vmatrix}$$

## 12) Para sacar números de factor común en un determinante tenemos que hacerlo fila a fila o columna a columna.
	
$$ \begin{vmatrix} 10 & -20 & 30 \\\\ 100 & 10 & 50 \\\\ 60 & 30 & 20 \end{vmatrix} = 10\begin{vmatrix} 10 & -2 & 30 \\\\ 100 & 1 & 50 \\\\ 60 & 3 & 20 \end{vmatrix} = 10^{3} \begin{vmatrix} 1 & -2 & 3 \\\\ 10 & 1 & 5 \\\\ 6 & 3 & 2 \end{vmatrix} $$

## 13)
$$ \begin{vmatrix} KA \end{vmatrix}= K^{n}\begin{vmatrix} A \end{vmatrix} $$

$$ K \in \mathbb{R} \rightarrow n= \mathrm{el} \ \mathrm{orden} \ \mathrm{de} \ \mathrm{la} \ \mathrm{matriz.} $$