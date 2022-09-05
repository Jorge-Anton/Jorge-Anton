---
tags:
  - mate
  - 2Bach
layout: schoolPost.njk
title: Probabilidad y estadística
excerpt: En este bloque podrás encontrar apuntes sobre probabilidad y estadística de 2º de bachillerato.
featuredImage: /assets/images/probabilidad.png
imageAlt: Probabilidad
---

# Operaciones con sucesos:
- Unión $(\cup)$ Todos los elementos de ambos sucesos.
- Intersección $(\cap)$ Todos los elementos comunes de ambos sucesos

# Diagrama de Venn:
![](/assets/images/20220323213834.png)

# Leyes de Morgan:
$$P(\bar{A} \ \cup \  \bar{B}) = P(\overline{A\cap B})$$

$$P(\bar{A} \ \cap \ \bar{B} = P(\overline{A \ \cup \ B})$$

# Compatibilidad de sucesos:
- Dos sucesos son compatibles si tienen algún elemento en común.
- A y B compatibles $\Leftrightarrow P(A \ \cap \ B) \cancel= 0$

$$P(A \ \cup \ B) = P(A) + P(B) - P(A \ \cap B)$$

## Uso esta si no lo tengo claro
- A y B incompatibles $\Leftrightarrow P(A \ \cup \ B) = 0$

$$P(A \ \cup \ B) = P(A) +P(B)$$

# Independencia de sucesos:
- Dos sucesos son independientes si el resultado de uno no influye en el otro.
- A y B independientes $\Leftrightarrow P(A \ \cap \ B) = P(A) · P(B)$
- A y B dependientes $\Leftrightarrow P(A \ \cap \ B) \cancel= P(A) · P(B)$

## $P(A|B)$
- Si son dependenties: (Uso esta si no lo tengo claro)
$$P(A|B)= \frac{P(A\cap B)}{P(B)}$$
- Si son independientes:
$$P(A|B)=P(A)$$

# Fórmula extra:
$$P(A\cap \overline{B}) = P(A) - P(A \cap B)$$
- El que no lleva sombrero va primero.

# Observaciones:
- $A \cup B = B \cup A$
- $A \cap B = B \cap A$
- $A\ | \ B \cancel= B \  | \ A$

# Probabilidad binomial:
$$\binom{m}{n} = \frac{m!}{n!(m-n)!}$$

# Distribución normal:
$$N(\mu, \sigma)$$
- $\mu \rightarrow$ Media
- $\sigma \rightarrow$ Desviación típica

![](/assets/images/8D2A8F62-AFE9-4D77-9239-DABC28076254.png)

|| $$a\geqslant0$$ | $$a<0$$ |
|------|-------| ------|
| $$P(z\leqslant a)$$  | Tabla| $$1-P(z\leqslant -a)$$ |
| $$P(z\geqslant a)$$ | $$1-P(z \leqslant a)$$ | $$P(z\leqslant -a)$$ |
## Regla de los dos cambios:
- Signo
- Orientación
- $1-$

## Tipificación:
$$\frac{\square - \mu}{\sigma / \sqrt{n}}$$
- $\mu$ es la media real.
- $\overline{x}$ es la media de la muestra.
- Se redondea a dos decimales.

## Probabilidad entre dos valores:
$$P(a \leqslant z \leqslant b) = P(z \leqslant b) - P(z \leqslant a)$$