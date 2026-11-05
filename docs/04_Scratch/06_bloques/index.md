---
title: "Clones y subprogramas"
description: "Reutilización de código en Scratch mediante clones y bloques personalizados"
weight: 10
draft: false
icon: "fas fa-puzzle-piece"
---
# Los clones en Scratch

## ¿Qué es un clon?

Imagina que estamos creando nuestro videojuego del laberinto y queremos colocar varias manzanas para que el gato las recoja.

Podríamos crear un objeto para cada manzana: `manzana1`, `manzana2`, `manzana3`...

Pero ¿qué ocurriría si necesitáramos 20 manzanas? ¿Tendríamos que crear y programar 20 objetos diferentes?

Para evitarlo, Scratch nos permite utilizar los **clones**.

::: definicion ¿Qué es un clon?

Un **clon** es una copia de un objeto que se crea durante la ejecución del programa.

Los clones comparten la apariencia y los programas del objeto original, pero pueden actuar de manera independiente.

:::

Por ejemplo, podemos crear un único objeto llamado `Manzana` y generar tantas copias como necesitemos.

Cada manzana podrá estar en una posición diferente y desaparecer cuando el gato la toque.

**¡Y solo tendremos que programar una vez su comportamiento!**

## 1. ¿Cómo creamos un clon?

En la categoría **Control** (bloques naranjas) encontramos la instrucción:

```scratchblocks
crear clon de [mí mismo v]
```

Esta instrucción crea una copia del objeto que la ejecuta.

<color>Vamos a hacer une ejemplo sencillo de una nevada</color>


Vamos a crear una **nevada utilizando clones**.

La idea es muy sencilla: tendremos un único objeto con forma de copo de nieve y Scratch se encargará de crear muchas copias que irán cayendo por el escenario.

::: actividad Creando una nevada

**1. Preparamos el escenario**

- Elegimos un fondo de invierno.
- Dibujamos o incorporamos un objeto con forma de **copo de nieve**.
- Reducimos su tamaño, por ejemplo, al 20 %.


**2. Creamos los copos de nieve**

En el objeto `Copo de nieve` añadimos el siguiente programa:

```scratchblocks
al presionar bandera verde
esconder
por siempre
    ir a x: (número al azar entre (-230) y (230)) y: (180)
    crear clon de [mí mismo v]
    esperar (0.2) segundos
fin
```

¿Qué hace este programa?

- Esconde el copo original.
- Lo sitúa en una posición horizontal aleatoria, en la parte superior.
- Crea un clon en esa posición.
- Espera un poco y vuelve a crear otro.

**3. Hacemos que los copos caigan**

Ahora programamos qué debe hacer cada clon cuando aparece:

```scratchblocks
al comenzar como clon
mostrar
fijar tamaño a (número al azar entre (10) y (30)) %
repetir hasta que <(posición en y) < (-170)>
    cambiar y por (-3)
    esperar (0.03) segundos
fin
borrar este clon
```

Cada copo:

1. Aparece con un tamaño aleatorio.
2. Va descendiendo poco a poco.
3. Cuando llega a la parte inferior del escenario, desaparece.

**¡Ya tenemos nuestra nevada!**

:::

<color>Se puede mejorar el efecto de la nevada añadiendo más clones, variando su tamaño y velocidad, o incluso haciendo que se muevan de lado para simular el viento.</color>

Prueba a modificar el programa:

- **Más nieve:** reduce el tiempo de espera entre clones.
- **Nieve más lenta:** cambia `-3` por `-1`.
- **Copos diferentes:** utiliza varios disfraces.
- **Efecto de viento:** modifica también la coordenada X mientras caen.

::: pregunta Para pensar

¿Por qué hemos utilizado clones en lugar de crear 50 objetos diferentes con forma de copo de nieve?

¿Qué ventajas tiene que todos los copos compartan el mismo programa?

:::

::: recuerda

Con **un único objeto y unas pocas instrucciones** hemos conseguido crear una nevada con muchos copos que se mueven de forma independiente.

Esta es una de las grandes ventajas de los clones: **crear numerosos elementos reutilizando el mismo código**.

:::
Otro ejemplo para nuestro juego del laberinto:

```scratchblocks
al presionar bandera verde
esconder
ir a x: (-150) y: (100)
crear clon de [mí mismo v]
ir a x: (0) y: (100)
crear clon de [mí mismo v]
ir a x: (150) y: (100)
crear clon de [mí mismo v]
```

Observa que:

- Primero **escondemos el objeto original** para que no aparezca en el escenario.
- Nos desplazamos a una posición y creamos un clon.
- Repetimos el proceso en otras posiciones.

Al terminar tendremos **tres manzanas**, aunque solo hemos creado un objeto en Scratch.

## 2. ¿Cómo programamos los clones?

Scratch dispone de un evento especial que se ejecuta cuando nace un clon:

```scratchblocks
al comenzar como clon
```

Las instrucciones que coloquemos debajo se ejecutarán **de forma independiente en cada clon**.

Por ejemplo:

```scratchblocks
al comenzar como clon
mostrar
```

Cada nueva manzana se mostrará en el escenario cuando sea creada.

## 3. ¿Cómo eliminamos un clon?

En nuestro laberinto queremos que una manzana desaparezca cuando el gato la toque.

Para ello utilizamos:

```scratchblocks
borrar este clon
```

Podemos combinarlo con una condición:

```scratchblocks
al comenzar como clon
mostrar
por siempre
    si <tocando [Gato v] ?> entonces
        cambiar [manzanasRecogidas v] por (1)
        borrar este clon
    fin
fin
```

**¿Qué está ocurriendo?**

1. Cada manzana aparece al ser creada.
2. Comprueba continuamente si está tocando al gato.
3. Cuando el gato la toca, aumenta el contador de manzanas recogidas.
4. Finalmente, desaparece únicamente esa manzana.

::: recuerda

La instrucción `borrar este clon` elimina **solo el clon que la ejecuta**, no el objeto original ni los demás clones.

Por eso podemos recoger una manzana sin que desaparezcan todas.

:::

## 4. Variables y clones

Una característica interesante es que los clones pueden tener sus propias variables.

En Scratch, cuando creamos una variable, podemos elegir entre:

- **Para todos los objetos:** todos comparten la misma variable.
- **Solo para este objeto:** cada clon dispone de su propia copia de la variable, que inicialmente hereda el valor del objeto original.

Por ejemplo, en nuestro juego:

- `manzanasRecogidas` será una variable **para todos los objetos**, porque queremos llevar un contador común.
- `velocidad` podría ser una variable **solo para este objeto**, si queremos que cada fruta guardiana se mueva a una velocidad diferente.

## 5. ¿Qué relación tiene esto con otros lenguajes de programación?

Aunque ahora estamos utilizando Scratch, esta idea nos servirá cuando aprendamos otros lenguajes como PHP o Java.

En estos lenguajes podremos definir **clases**, que funcionan como plantillas para crear objetos.

Por ejemplo, podríamos definir una clase `Manzana` y crear diferentes objetos a partir de ella:

```php
$manzana1 = new Manzana();
$manzana2 = new Manzana();
$manzana3 = new Manzana();
```

Cada objeto será una **instancia de la clase Manzana**.

Es una idea muy parecida a la que estamos utilizando con los clones, aunque no son exactamente lo mismo.

::: recuerda

**La idea fundamental es reutilizar código.**

En lugar de programar veinte manzanas por separado, definimos una sola vez su comportamiento y creamos las copias que necesitemos.

Este principio será muy importante cuando estudiemos la **programación orientada a objetos**.

:::
___
# Subprogramas o funciones

Hasta ahora hemos visto cómo podemos **crear varios objetos que comparten el mismo comportamiento** utilizando clones.

Pero también podemos reutilizar instrucciones.

Imagina que queremos que nuestro gato vuelva al inicio del laberinto cada vez que pierde una vida.

Para ello, tendrá que realizar varias acciones:

1. Perder una vida.
2. Volver a su posición inicial.
3. Apuntar en la dirección adecuada.

Podríamos repetir estas instrucciones cada vez que las necesitemos, pero existe una solución mejor: **crear nuestro propio bloque de instrucciones**.

::: definicion Bloques y subprogramas

Un **subprograma** es un conjunto de instrucciones agrupadas bajo un nombre para poder ejecutarlas cuando las necesitemos.

En Scratch podemos crear subprogramas utilizando la categoría **Mis bloques**.

:::

## ¿Cómo creamos nuestro propio bloque?

En Scratch:

1. Seleccionamos la categoría **Mis bloques** (de color rosa).
2. Pulsamos **Crear un bloque**.
3. Escribimos un nombre, por ejemplo, `volver al inicio`.
4. Scratch crea un bloque que podemos definir con las instrucciones que deseemos.

Primero, definimos su comportamiento:

```scratchblocks
definir volver al inicio
cambiar [vidas v] por (-1)
ir a x: (200) y: (150)
apuntar en dirección (-90)
```

Ahora, cuando necesitemos que el gato vuelva al inicio, solo tendremos que utilizar:

```scratchblocks
volver al inicio
```

Por ejemplo, cuando toque una pared:

```scratchblocks
si <tocando el color [#000000] ?> entonces
    volver al inicio
fin
```

De esta forma, **escribimos las instrucciones una sola vez y podemos utilizarlas tantas veces como necesitemos**.

## ¿Qué aprenderemos más adelante?

Cuando estudiemos otros lenguajes de programación, como PHP o Java, encontraremos esta misma idea con los nombres de **funciones, procedimientos o métodos**.

Por ejemplo, en PHP podríamos escribir:

```php
function volverAlInicio() {
    // Instrucciones para volver al inicio
}
```

Y después llamar a la función:

```php
volverAlInicio();
```

::: recuerda

Los **clones** nos permiten crear varios objetos que comparten un mismo comportamiento.

Los **bloques personalizados** nos permiten agrupar instrucciones para reutilizarlas sin tener que escribirlas varias veces.

Ambos conceptos nos enseñan una idea fundamental de la programación: **evitar repetir código y organizar nuestros programas en partes más pequeñas y fáciles de entender**.

:::

Ejemplo de crear clones y subprogramas en Scratch para juestro juego de laberinto:
## Ejemplo práctico: las bolas guardianas del laberinto 🔴

Vamos a crear unas **bolas guardianas** que protejan las manzanas de nuestro laberinto.

Cada bola tendrá:

- Una **posición inicial**.
- Una **dirección de movimiento**.
- Una **distancia** que recorrerá antes de darse la vuelta.
- Una **velocidad** de desplazamiento.

En lugar de programar el movimiento de cada bola por separado, vamos a crear un **bloque personalizado con parámetros**.

* <color>Crear nuestro subprograma</color>

En Scratch, seleccionamos **Mis bloques → Crear un bloque**.

Escribimos el nombre `vigilar` y añadimos tres entradas de tipo **número o texto**:

- `dirección`: hacia dónde se moverá inicialmente.
- `pasos`: distancia que recorrerá antes de cambiar de sentido.
- `velocidad`: tiempo de espera entre movimientos.

Nuestro bloque tendrá este aspecto:

```scratchblocks
vigilar (90) (100) (0.02)
```

Ahora definimos su comportamiento:

```scratchblocks
definir vigilar (dirección) (pasos) (velocidad)
apuntar en dirección (dirección)
por siempre
    repetir (pasos)
        mover (1) pasos
        esperar (velocidad) segundos
    fin
    girar ↻ (180) grados
fin
```

::: recuerda

Los **parámetros** permiten pasar información a un subprograma.

De esta forma, podemos ejecutar las mismas instrucciones utilizando diferentes valores.

:::

<color>Programar las bolas guardianas</color>

Vamos a crear tres bolas que se moverán de forma diferente.

<color>Bola 1: movimiento horizontal</color>

Esta bola se moverá hacia la derecha y hacia la izquierda, recorriendo 100 pasos en cada sentido.

```scratchblocks
al presionar bandera verde
ir a x: (-120) y: (50)
vigilar (90) (100) (0.02)
```

<color> Bola 2: movimiento vertical </color>

Esta bola se moverá hacia arriba y hacia abajo, recorriendo 70 pasos en cada sentido.

```scratchblocks
al presionar bandera verde
ir a x: (80) y: (-50)
vigilar (0) (70) (0.03)
```

<color>Bola 3: movimiento más rápido </color>

Esta bola recorrerá una distancia menor, pero se moverá más rápidamente.

```scratchblocks
al presionar bandera verde
ir a x: (100) y: (120)
vigilar (-90) (50) (0.01)
```

<color> 3. ¿Qué hemos conseguido?</color>

Observa que las tres bolas utilizan exactamente el mismo bloque:

```scratchblocks
vigilar (dirección) (pasos) (velocidad)
```

Sin embargo, cada una se mueve de forma diferente porque recibe distintos valores.

**¡Hemos creado un único subprograma que podemos reutilizar con diferentes parámetros!**

::: info Importante

En Scratch, los bloques personalizados pertenecen al objeto donde se crean.

Si utilizamos tres objetos independientes, tendremos que copiar el bloque `vigilar` a cada uno de ellos.

Otra posibilidad es crear **clones de una única bola guardiana**, combinando así los dos conceptos que estamos aprendiendo.

:::

<color>¿Podemos mejorarlo? </color>

Podríamos añadir dos parámetros más:

- `x`: posición horizontal inicial.
- `y`: posición vertical inicial.

De esta forma, nuestro bloque también se encargaría de colocar la bola en su posición inicial.

```scratchblocks
definir vigilar (x) (y) (dirección) (pasos) (velocidad)
ir a x: (x) y: (y)
apuntar en dirección (dirección)
por siempre
    repetir (pasos)
        mover (1) pasos
        esperar (velocidad) segundos
    fin
    girar ↻ (180) grados
fin
```

Ahora podemos indicar todos los datos en una sola instrucción:

```scratchblocks
al presionar bandera verde
vigilar (-120) (50) (90) (100) (0.02)
```

::: pregunta Para pensar

1. ¿Qué parámetro modificarías para que una bola se moviera más deprisa?
2. ¿Cómo harías que una bola se desplazara verticalmente?
3. ¿Qué ventajas tiene utilizar un subprograma en lugar de repetir las instrucciones?
4. ¿Podríamos combinar este subprograma con los clones que hemos aprendido anteriormente?

:::

::: recuerda

Un **subprograma** nos permite agrupar instrucciones bajo un nombre.

Los **parámetros** permiten personalizar su comportamiento sin modificar el código.

Esta misma idea la encontraremos más adelante cuando estudiemos las **funciones y los métodos** en otros lenguajes de programación.

:::

```scratchblocks