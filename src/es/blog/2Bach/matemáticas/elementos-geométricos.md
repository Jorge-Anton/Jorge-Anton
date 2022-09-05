---
tags:
  - mate
  - 2Bach
layout: schoolPost.njk
title: Elementos geométricos
excerpt: En este bloque podrás encontrar apuntes sobre elementos geométricos de 2º de bachillerato.
featuredImage: /assets/images/elementos-geometricos.png
imageAlt: Elementos geométricos
---

# Construcción de elementos geométricos:
- Puntos, rectas y planos.

## Ecuaciones de la recta:
- Punto y vector
- Punto y punto
### Ecuación vectorial:
$$ \vec{P}= \vec{a} + \lambda\vec{u} $$

### Ecuación paramétrica:

$$r:\begin{cases} 
    x = & P_1 + d_{r_1} \lambda \\\\
    y = & P_2 + d_{r_2} \lambda \  , \ \lambda\in \mathbb{R} \\\\
    z= & P_3 + d_{r_3} \lambda
\end{cases}$$

- Recta que pasa por $P(P_1, P_2 , P_3)$ y su vector director es el $\vec{d_r}=(d_{r_1}, d_{r_2}, d_{r_3})$

### Ecuacion continua:
- Despejanod $\lambda$
$$ \frac{x-P_1}{d_{r1}}=\frac{y-P_2}{d_{r_2}}=\frac{z-P_3}{d_{r_3}}$$

### Ecuación implícita:
$$ \frac{x-P_1}{d_{r_1}} = \frac{y-P_2}{d_{r_2}}\  \Rightarrow \ Ax+By+Cz+D=0$$
$$ \frac{y-P_2}{d_{r_2}} = \frac{z-P_3}{d_{r_3}}\  \Rightarrow \ A'x+B'y+C'z+D'=0$$

## Ecuaciones del plano:
- Plano $\Rightarrow$ 1 punto y 2 vectores (l.indep)

### Ecuación vectorial:
$$\vec{P} = \vec{a} + \lambda \vec{u} + \mu\vec{v}$$

### Ecuación paramétrica:
$$\pi \equiv \begin{cases}
\begin{align*}
x&= P_1 + u_1 \lambda + v_1 \mu\\\\
 y&= P_2 + u_2\lambda + v_2 \mu \hspace{10pt}, \lambda \in \mathbb{R}\\\\
 z&= P_3 + U_3 \lambda + v_3\mu \hspace{10pt}, \mu \in \mathbb{R} 
\end{align*}
\end{cases}$$

### Ecuación implícita:
$$\pi \equiv \begin{vmatrix}
x-P_1 & y-P_2 & z-P_3\\\\
u_1 & u_2 & u_3\\\\
v_1 & v_2 & v_3
\end{vmatrix} = 0$$

$$\pi \equiv Ax+By+Cz+D = 0$$
- $\vec{n_\pi}=(A,B,C)$

### Otra forma de calcular $\pi$:

$$\vec{n_{\pi}} = \vec{u} \ x \ \vec{v} = \begin{vmatrix}
\vec{i} & \vec{j}  & \vec{k}\\\\ 
1 & 1 & 1\\\\
3 & 2 & 0
\end{vmatrix} = (-2,-3,5)$$
$$\pi \equiv -2x-3y+5z+D=0$$
$$-2+3+10+D=0 \ ; \hspace{10pt} D = -11$$
$$\pi \equiv -2x-3y+5z-11 = 0$$


# Ángulos:
## 1. Recta-Recta:
![](/assets/images/20220403132311.png)
## 2. Plano-Plano:
![](/assets/images/20220403132348.png)
## 3. Recta-Plano:
![](/assets/images/20220403132436.png)

# Áreas y volúmenes:
## Áreas:
### Paralelogramo:
![](/assets/images/20220403135555.png)
### Triángulo:
![](/assets/images/20220403135629.png)
## Volúmenes:
### Paralelepípedo:
![](/assets/images/20220403135734.png)
### Tetraedro:
![](/assets/images/20220403135758.png)


# Distancias:
## 1. Punto-Punto:
- Sean los puntos $A$ y $B$. La distancia entre ambos viene dada por:
$$d(A,B) = |\overrightarrow{AB}|$$
## 2. Punto-Recta:
![](/assets/images/20220403145656.png)
## 3. Punto-Plano:
![](/assets/images/20220403145731.png)
## 4. Recta-Recta:
### 4.1 Paralelas:
![](/assets/images/20220403145815.png)
### 4.2 Se cruzan:
![](/assets/images/20220403145844.png)
### 4.3 Coincidentes o secantes:
- Si la rectas son coincidentes o secantes, la distancia entre ellas es 0.
## 5. Recta-Plano:
### 5.1 Paralelos:
![](/assets/images/20220403150006.png)
### 5.2 Coincidentes o secantes:
- Si la recta está contenida en el plano o si son secantes, la distancia entre ellos es 0.
## 6. Plano-Plano:
### 6.1 Paralelos:
![](/assets/images/20220403150136.png)
### 6.2 Coincidentes o secantes:
- Si los planos son coincidentes o secantes, la distancia entre ellos es 0.

# Posiciones relativas:
## 1. Puno-Recta:
### 1.1 Recta en paramétricas:
![](/assets/images/20220403140844.png)
- Existen dos posibilades:
	1. **Punto incluido en la recta:** Si existe un valor de $\alpha$ que cumpla las tres ecuaciones.
	2. **Punto exterior a la recta:** Si no existe un valor de $\alpha$ que cumpla las tres ecuaciones.
### 1.2 Recta en implícita:
![](/assets/images/20220403141107.png)
- Existen dos posibilades:
	1. **Punto incluido en la recta:** Si se cumplen ambas ecuaciones.
	2. **Punto exterior a la recta:** Si no se cumplen ambas ecuaciones.

## 2. Punto-Plano:
### 2.1 Plano en paramétricas:
![](/assets/images/20220403141308.png)
- Existen dos posibilades:
	1. **Punto incluido en el plano:** Si existen valores de $\alpha$ y $\beta$ que cumplan las tres ecuaciones.
	2. **Punto exterior al plano:** Si no existen valores de $\alpha$ y $\beta$ que cumplan las tres ecuaciones:

### 2.2 Plano en implícita:
![](/assets/images/20220403141545.png)
- Existen dos posibilades:
	1. **Punto incluido en el plano:** Si se cumple la ecuación.
	2. **Punto exterior al plano:** Si no se cumple la ecuación.

## 3. Recta-Recta:
![](/assets/images/20220403141722.png)
- Existen cuatro posibialdes:
	1. **Coincidentes:** Si $Rang(M)=1$ y $Rang(M')=1$

		![](/assets/images/20220403141911.png)
	2. **Paralelas:** Si $Rang(M)=1$ y $Rang(M')=2$
	
		![](/assets/images/20220403142001.png)
	3. **Secantes:** Si $Rang(M)=2$ y $Rang(M') = 2$

		![](/assets/images/20220403142122.png)
	4. **Se cruzan:** Si $Rang(M)=2$ y $Rang(M')=3$

		![](/assets/images/20220403142230.png)
## 4. Recta-Plano:
### 4.1 Recta en paramétricas y plano en implícita:
![](/assets/images/20220403142436.png)
- Existen tres posibilidades:
	1. **La recta pertenece al plano:** Si la ecuación tiene infinitas soluciones (al resolverlo sale una verdad).
		
		![](/assets/images/20220403142710.png)
	2. **La recta es paralela al plano:** Si la ecuación no tiene solución (al resolverlo sale una mentira).
	
		![](/assets/images/20220403142803.png) 
	1. **La recta es secante al plano:** Si la ecuación tiene solución.

		![](/assets/images/20220403142841.png)
### 4.2 Recta en implícita y plano en implícita:
![[Pasted image 20220403142930.png]]
- Existen tres posibilades:
	1. **La recta pertenece al plano:** Si es un S.C.I
		
		![](/assets/images/20220403142710.png)
		
	2. **La recta es paralela al plano:** Si en un S.I
		
		![](/assets/images/20220403142803.png) 
	
	2. **La recta es secante al plano:** Si es un S.C.D. La solución del sistema es el punto de intersección.

		![](/assets/images/20220403142841.png)
### 4.3 Recta en paramétrica y plano en paramétrica:
![](/assets/images/20220403143607.png)
- Existen tres posibilades:
	1. **La recta pertenece al plano:** Si es un S.C.I
 
		![](/assets/images/20220403142710.png)
	2. **La recta es paralela al plano:** Si es un S.I

		![](/assets/images/20220403142803.png) 
	3. **La recta es secante al plano:** Si es un S.C.D. Al sustituir el valor de $\mu$ en la recta (o  los valores $\alpha$ y $\beta$ en el plano) obtenemos el punto de intersección.
	
		![](/assets/images/20220403142841.png)
## 5. Dos Planos:
![](/assets/images/20220403144014.png)
- Existen tres posibildades:
	1. **Coincidentes:** Si $Rang(M)=1$ y $Rang(M')=1$.
	
		![](/assets/images/20220403144232.png)
	2. **Paralelos:** Si $Rang(M)=1$ y $Rang(M')=2$.

		![](/assets/images/20220403144247.png)
	3. **Secantes:** Si $Rang(M)=2$ y $Rang(M')=2$.

		![](/assets/images/20220403144304.png)
## 6. Tres Planos:
![](/assets/images/20220403144356.png)
- Existen ocho posibilades:
	1. **Coincidentes:** Si $Rang(M)=1$ y $Rang(M')=1$
	
		![](/assets/images/20220403144453.png)
	2. **Paralelos:** Si $Rang(M)=1$ y $Rang(M')=2$
		1. **Los tres paralelos:** Si no existen dos filas de $M'$ proporcionales.
		
			![](/assets/images/20220403144633.png)
		2. **Dos coincidentes y otro paralelo:** Si existen dos filas de $M'$ proporcionales.
		
			![](/assets/images/20220403144729.png)
	3. **Se intersecan en una recta:** Si $Rang(M)=2$ y $Rang(M')=2$.
		1. **Secantes y distintos:** Si no existen dos filas de $M'$ proporcionales.
		
			![](/assets/images/20220403144930.png)
		2. **Dos coincidentes y otro secante:** Si existen dos filas de $M'$ proporcionales.
		
			![](/assets/images/20220403145038.png)
	4. **Se intersecan en varias rectas:** Si $Rang(M)=2$ y $Rang(M')=3$.
		1. **Secantes dos a dos (Toblerone):** Si no existen dos filas de $M$ proporcionales.
		
			![](/assets/images/20220403145223.png)
		2. **Dos paralelos y otro secante:** Si existen dos filas de $M$ proporcionales.

			![](/assets/images/20220403145315.png)
	5. **Se intersecan en un punto:** Si $Rang(M)=3$ y $Rang(M')=3$

		![](/assets/images/20220403145414.png)

# Proyecciones:

## 1. Proyección de un punto sobre un plano:
- Es la sombra que emite el punto sobre el plano si el foco de luz se encuentra en el infinito de forma perpendicular al plano.
- Para calcular la proyección $P'$ de $P$ sobre el plano $\pi$ tenemos que:
	1. Calcular la ecuación de la recta $r$ que es perpendicular a $\pi$ y que pasa por $P$.
	2. Hallar la intersección de $r$ y $\pi$, lo que nos da $P'$, la proyección.
	
	![](/assets/images/20220403140358.png)
	
## 2. Proyección de una recta sobre un plano:
- Es la sombra que emite la recta sobre el plano si el foco de luz se encuentra en el infinito de forma perpendicular al plano.
- Para calcular la proyección $s$ de $r$ sobre el plano $\pi$ tenemos que:
	1. Calcular la ecuación del plano $\pi'$ que es perpendicular a $\pi$ y que contiene a $r$.
	2. Hallar la intersección de $\pi$ y $\pi_2$, lo que nos da $s$, la proyección.
		![](/assets/images/20220403140720.png)

# Puntos simétricos:
## 1. Punto simétrico respecto a otro punto:
- Para calcular el punto simétrico de P respecto a M tenemos que seguir cualquiera de las siguientes fórmulas:
$$P' = P + 2\overrightarrow{PM} \hspace{20pt} P' = M + \overrightarrow{PM}$$
	![](/assets/images/20220403133928.png)

## 2. Punto simétrico respecto a una recta:
- Para calcular el punto simétrico de $P$ respecto a la recta $r$ tenemos que:
	1. Calcular la ecuación del plano $\pi$ perpendicular a $r$ que pasa por $P$.
	2. Hallar la intersección de $r$ y $\pi$, lo que nos da M.
	3. Aplicar alguna de las fórmulas del caso 1.
	
		![](/assets/images/20220403134513.png)

## 3. Punto simétrico respecto a un plano:
- Para calcular el punto simétrico $P$ de respecto al plano $\pi$ tenemos que:
	1. Calcular la ecuación de la recta $r$ perpendicular a $\pi$ que pasa por $P$.
	2. Hallar la intersección de $r$ y $\pi$, lo que nos da M.
	3. Aplicar alguna de las fórmulas del caso 1.
	
		![](/assets/images/20220403134617.png)

## 4. Recta simétrica respecto a un punto:
- Para calcular la recta simétrica de $r$ respecto a un punto $P$ tenemos que:
	1. Buscar dos puntos pertenecientes a la recta $r$.
	2. Hallar sus simétricos respecto a $M$.
	3. Unir estos puntos simétricos para formar una recta.

## 5. Recta simétrica respecto a un plano:
- Para calcular la recta simétrica de $r$ respecto a un plano $\pi$ tenemos que:
	1. Buscar dos puntos pertenecientes a la recta $r$.
	2. Hallar sus simétricos respecto a $\pi$.
	3. Unir esos puntos simétricos para formar una recta.

	
	
