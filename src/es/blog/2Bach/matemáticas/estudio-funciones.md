---
tags:
  - mate
  - 2Bach
layout: schoolPost.njk
title: Estudio de funciones
excerpt: En este bloque podrás encontrar apuntes sobre estudio de funciones de 2º de bachillerato.
featuredImage: /assets/images/estudio-funciones.png
imageAlt: Estudio funciones
---

# Dominio:
- El dominio de una función son los valores de x para los que la función existe.
# Puntos de corte:
## Eje x:
- Se iguala la funcion a cero y se resuelve la ecuación. Los puntos que saldrán como resultado serán del tipo :  $(\square,0)$
$$ f(x)=0 $$

## Eje y:
- Se sustituyen todas las $x$ por 0. Los puntos resultantes serán del tipo : $(0,\square)$

$$ f(0)$$

# Asíntotas o ramas infinitas:
## Asíntotas Horizontales:
$$\lim_{x\to \infty}f(x) = a \hspace{10pt} \rightarrow \hspace{10pt} y=a \hspace{5pt} A.H $$
	$$\lim_{x\to -\infty}f(x) = b \hspace{10pt} \rightarrow \hspace{10pt} y=b \hspace{5pt} A.H $$

- Si el $\lim=\infty \ \ o \ - \infty \hspace{10pt} \rightarrow \hspace{10pt} \nexists \ A.H$ 

## Asíntotas Verticales:
$$ \lim_{x\to c }f(x) = \infty/-\infty \hspace{10pt} \rightarrow \hspace{10pt} x=c \hspace{5pt} A.V $$

-  c = Los puntos fuera del  $Domf(x)$ y los extremos de los intervalos fuera del $Domf(x)$

## Asíntotas Oblicuas:
- Si existen asíntotas horizontales no existen asíntotas oblicuas. $\exists \ A.H \Rightarrow \nexists \ A.O$
- Si la asíntota horizontal solo existe en uno de los infinitos, hay que comprobar si existe la asíntota oblicua en el infinito que no tiene A.H
$$ y = mx+n $$
$$ m = \lim_{x\to \pm \ \infty} \frac{f(x)}{x} \hspace{10pt} \rightarrow \hspace{10pt} m \cancel= 0 \Rightarrow \nexists \ A.O $$

$$ n= \lim_{x\to \pm \ \infty} \left ( f(x) -mx \right) $$

# Simetría o Paridad:
$$ f(-x)\begin{cases}
= \ \ \ f(x) \ \ \Rightarrow \ par \\\\ = -f(x) \Rightarrow impar 
\end{cases} $$

# Máximos y mínimos o extremos relativos o puntos críticos:
- Igualamos la derivada de la función a cero y los resultados serán candidatos a máximos o mínimos.
- Estudiamos los signos sustituyendo en la derivada de la función.
- Con esto conseguiremos sacar los max y min y el creciemiento.

# Signo:
- Números fuera del dominio
- Números que hacen $f(x)=0$
- Estudiamos el signo sustituyendo en la función.

# Continuidad:
- $\lim_{x\to a^{+}} f(x) = \lim_{x\to a^{-}} f(x) = \lim_{x\to a} f(x) = n \hspace{10pt} \rightarrow \hspace{10pt} n \in \mathbb{R}$
- $\exists f(a)$
- $f(a) = \lim_{x\to a} f(x)$
	- Falla el paso 1 y ambos límites reales $\rightarrow$ Discontinuidad inevitable de salto finito.
	- Falla el paso 1 y algún límite da $\infty \rightarrow$ Discontiunuidad inevitable de salto infinito
	- Fallaa el paso 2 o 3 $\rightarrow$ Discontinuidad evitable

# Derivabilidad:
- $f(x)$ es continua en $x=a$
- $\lim_{x\to a^+} f^{'}(x) = \lim_{x\to a^-} f^{'}(x)= n \hspace{10pt} \rightarrow \hspace{10pt} n \in \mathbb{R}$

# Ecuación de la recta tangente:
$$ y = f(a) + f^{'} (a) (x-a) $$