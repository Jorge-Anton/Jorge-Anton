---
tags:
  - mate
  - 2Bach
layout: schoolPost.njk
title: Discusión de sistemas
excerpt: En este bloque podrás encontrar apuntes sobre discusión de sistemas de ecuaciones de 2º de bachillerato.
featuredImage: /assets/images/discusion-sistemas.png
imageAlt: Discusión sistemas
---

# Tipos de sistemas de ecuaciones:
- SCD (Sistema Compatible Determinado) si tiene una única solución, es decir, un valor para cada una de las incógnitas.
- SCI (Sistema Compatible Indeterminado) si tiene infinitas soluciones, las expresamos en función de un parámetro, habitualmente $\lambda$.
- SI (Sistema Incompatible) si no tiene soluciones. 

$$ \begin{cases} ax+by+cz = d \\\\ a\prime x+b\prime y+c\prime z=d\prime  \\\\ a\prime \prime x+b\prime \prime y+c\prime \prime z=d\prime \prime  \end{cases} $$

$$A = \begin{pmatrix} a & b & c \\\\ a\prime & b\prime & c\prime \\\\ a\prime\prime & b\prime\prime & c\prime\prime \\\\ \end{pmatrix} \hspace{20pt} A\prime= \begin{pmatrix} a & b & c & d \\\\ a\prime & b\prime & c\prime & d\prime\\\\ a\prime\prime & b\prime\prime & c\prime\prime & d\prime\prime \\\\ \end{pmatrix}$$

- SCD (Sistema Compatible Determinado) si Rango(A) = Rango(A\prime) = nº incógnitas.
- SCI (Sistema Compatible Indeterminado) si Rango(A) = Rango(A\prime) < nº incógnitas.
- SI (Sistema Incompatible) si Rango(A) < Rango(A\prime)

- Para estudiar el tipo de sistema hay que utilizar  [[Rangos]]

## Truco para calcular el Rango de A':
- Calculamos el determinate 3x3 usando las columnas completas del determinante 2x2 usado para ver el rango de A y la columna de términos independientes..
- Si este rango = 0 puede asegurar que el resto de menores 3x3 son también = 0.

# Cramer para resolver SCD:
$$\begin{cases} x-y+z=0 \\\\ x+y+3z=4 \\\\ 2x-2y-z=0 \end{cases}$$
- Sacamos las matrices del sistema:
$$A=\begin{pmatrix} 1& -1 & 1 \\\\ 1 & 1 & 3 \\\\ 2 & -2 & -1 \\\\ \end{pmatrix} \hspace{20pt}B=\begin{pmatrix} 0 \\\\ 4 \\\\ 0 \\\\ \end{pmatrix}$$

- Calculamos las incógnitas:
$$x= \frac{\begin{vmatrix} 0 & -1 & 1 \\\\ 4 & 1 & 3 \\\\ 0 & -2 & -1 \\\\ \end{vmatrix}}{|A|} = \frac{-12}{-6} = 2; \ y= \frac{\begin{vmatrix} 1 & 0 & 1 \\\\ 1 & 4 & 3 \\\\ 2 & 0 & -1 \\\\ \end{vmatrix}}{|A|}= \frac{-12}{-6} = 2; \ z= \frac{\begin{vmatrix} 1 & -1 & 0 \\\\ 1 & 1 & 4 \\\\ 2 & -2 & 0 \\\\ \end{vmatrix}}{|A|} = \frac{0}{-6} = 0$$
- Resulatdo:
$$x=2 \hspace{20pt} y=2 \hspace{20pt} z=0$$

# Cramer para resolver SCI:
$$\begin{cases} x-3y-z=-2 \\\\ x+5y+3z=6 \\\\ x+y+z=2 \end{cases}$$

- Sacamos la matriz A y la matriz ampliada A\prime:

$$A=\begin{pmatrix} 1& -3 & -1 \\\\ 1 & 5 & 3 \\\\ 1 & 1 & 1 \\\\ \end{pmatrix} \hspace{20pt} A\prime=\begin{pmatrix} 1& -3 & -1 &-2 \\\\ 1 & 5 & 3 & 6\\\\ 1 & 1 & 1 & 2\\\\ \end{pmatrix} \hspace{20pt}$$
![](/assets/images/20220206143956.png)


