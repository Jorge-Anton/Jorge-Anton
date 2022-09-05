---
tags:
  - fisica
  - 2Bach
layout: schoolPost.njk
title: Inducción electromagnética
excerpt: En este bloque podrás encontrar apuntes sobre inducción electromagnética de 2º de bachillerato.
featuredImage: /assets/images/induccion-electromagnetica.png
imageAlt: Inducción electromagnética
---

# Flujo de campo magnético:
- Cantidad de campo magnético que atraviesa una determinada superficie.
	
$$ \phi = \vec{B} \times \vec{S} \Rightarrow \phi = B\times S\times \cos \alpha $$

	- Φ = FLujo de campo magnético -> S.I: Weber (Wb)
	- B = Campo magnético. (T)
	- S = Superfice (m²)
	- α = Ángulo entre el vector B y el vector S
<br/>

	- El vector superficie es siempre la perpendicular al plano (normal).
	
# Ley de Faraday:
	- La fuerza electromagnética inducida en un circuito (fem) es igual a la variación de flujo magnético.
	
$$ \varepsilon = -\frac{d\phi }{dt} $$

$$ \varepsilon = -\frac{\Delta \phi }{\Delta t} $$
	
	- ε -> fem -> se mide en voltios (V)
	- Φ -> flujo magnético (Wb)
	
## 1) Varía en campo magnético $\vec{B}$
- Variación uniforme: $\varepsilon = -\frac{\Delta \phi }{\Delta t} = -\frac{\phi _{f}-\phi _{i}}{t}$
- Variación no uniforme $B(t)\rightarrow \varepsilon =-\frac{d\phi}{dt}= -S\cdot \cos{\alpha }\cdot \frac{dB}{dt}$

## 2) Varía la superficie: 
$$\varepsilon = -B\cdot \cos{\alpha} \cdot \frac{dS}{dt}= -B \cdot\cos{\alpha}\cdot\frac{d(l\cdot x)}{dt}=$$

$$=-B \cdot \cos{\alpha} \cdot l \cdot \frac{dx}{dt}= -B \cdot \cos{\alpha}\cdot l \cdot v \rightarrow$$

$$\rightarrow \varepsilon = -B\cdot l \cdot v$$

## 3) Varía de orientación: 
$$ \alpha = \omega \cdot t + \alpha _{o} $$

$$ \phi = B \cdot S \cdot \cos{(\omega \cdot t + \alpha _{o} )} $$

$$ \varepsilon = B \cdot S \cdot \omega \cdot \sin{(\omega \cdot t + \alpha _{o})} $$

$$ n _{espiras}: \varepsilon = S \cdot n \cdot B \cdot 	\omega \cdot sin{(\omega \cdot t)} $$	


# Ley de Lenz:
- El sentido de la corriente inducida se opone a la variación de flujo.

# Ley de Ohm:
$$ \varepsilon = I·R $$
