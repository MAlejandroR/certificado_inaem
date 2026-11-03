---
title: "Scratch "
description: "Scratch un lenguaje de programación divertido"
weight: 10 
draft: false
icon: "fas fa-bug"
---

# Las instrucciones de un programa

## 1. Programar no es aprender infinitas instrucciones

Cuando empezamos a programar, podemos tener la impresión de que necesitamos conocer cientos o miles de instrucciones diferentes.

**¡Pero la realidad es mucho más sencilla!**

Un programa es un conjunto de instrucciones que indican al ordenador qué debe hacer.

Aunque existen muchos lenguajes de programación, la mayoría de los programas se construyen combinando unos pocos **tipos fundamentales de instrucciones**.

::: tip 💡 Idea fundamental
**Programar consiste en identificar las acciones necesarias para resolver un problema y expresarlas mediante instrucciones que el ordenador pueda ejecutar.**

Lo importante no es memorizar instrucciones, sino aprender a pensar qué queremos conseguir y cómo hacerlo.
:::

Por ejemplo, imaginemos que queremos crear un programa que salude a una persona.

Antes de pensar en Scratch o PHP, debemos identificar las acciones:

1. Preguntar el nombre.
2. Guardar el nombre introducido.
3. Mostrar un saludo utilizando ese nombre.

¡Ya tenemos la lógica del programa!

Solo nos falta traducir esas acciones al lenguaje de programación que estemos utilizando.

## 2. Los principales tipos de instrucciones

Podemos clasificar las instrucciones de un programa en unos pocos grupos.

| Tipo | ¿Para qué sirve? | Ejemplo |
|---|---|---|
| 📦 Declaración | Crear variables y otros elementos | Crear una variable llamada `edad` |
| ✏️ Asignación | Guardar o modificar valores | Guardar `18` en `edad` |
| 📥 Entrada de datos | Obtener información del usuario | Preguntar el nombre |
| 📤 Salida de datos | Mostrar información | Mostrar «Hola» |
| ⚙️ Invocación | Ejecutar una acción o función | Mover un personaje |
| 🔀 Selección | Tomar decisiones | Si tiene 18 años, mostrar «Mayor de edad» |
| 🔁 Repetición | Repetir instrucciones | Mover un personaje 10 veces |

::: important 🎯 Lo que debes aprender
No necesitas memorizar todas las instrucciones de Scratch.

Necesitas **reconocer qué tipo de acción quieres realizar** y buscar la instrucción que permite hacerlo.

Esta misma forma de pensar te servirá cuando aprendas PHP, JavaScript o cualquier otro lenguaje.
:::

## 3. Declaraciones: crear elementos que vamos a utilizar

En programación necesitamos almacenar información.

Para ello utilizamos las **variables**.

Una variable es un espacio identificado mediante un nombre que permite guardar un valor que puede cambiar durante la ejecución del programa.

Por ejemplo:

- `nombre`: almacena el nombre de una persona.
- `edad`: almacena su edad.
- `puntos`: almacena los puntos de un juego.
- `precio`: almacena el precio de un producto.

### En Scratch

Para crear una variable:

1. Seleccionamos la categoría **Variables**, de color naranja.
2. Pulsamos **Crear una variable**.
3. Escribimos su nombre, por ejemplo `puntos`.
4. Confirmamos.

Scratch crea la variable y nos ofrece bloques para trabajar con ella.

::: info 📦 Declaración
Crear la variable `puntos` es una operación de declaración.

La variable existe y podemos utilizarla posteriormente para almacenar información.
:::

**Importante:** en Scratch creamos variables mediante una opción del entorno gráfico. No existe un bloque específico de declaración que debamos colocar dentro del programa.

## 4. Asignaciones: guardar y modificar información

Una vez creada una variable, podemos guardar valores en ella.

Esta operación se denomina **asignación**.

Por ejemplo:

> Guardar el valor 10 en la variable `puntos`.

En Scratch utilizamos un bloque naranja de Variables:

```scratchblocks
dar a [puntos v] el valor (10)
```

También podemos modificar su valor:

```scratchblocks
sumar a [puntos v] (1)
```

El primer bloque establece el valor de la variable.

El segundo incrementa su valor en una unidad.

### Ejemplo

Imaginemos que estamos creando un juego.

Al comenzar, el jugador tiene cero puntos.

Cada vez que consigue un objeto, gana un punto.

```scratchblocks
al presionar bandera verde
dar a [puntos v] el valor (0)
```

Cuando el personaje consigue un objeto, ejecutamos:

```scratchblocks
sumar a [puntos v] (1)
```

::: tip 💡 Diferencia importante
**Declarar** una variable significa crearla.

**Asignar** significa guardar un valor en ella.

**Modificar** significa cambiar el valor que tenía almacenado.

No son exactamente la misma operación.
:::

## 5. Entrada de datos: obtener información

Muchos programas necesitan recibir información del usuario.

Por ejemplo:

- Su nombre.
- Su edad.
- Una contraseña.
- La cantidad de productos que quiere comprar.
- La respuesta a una pregunta.

Estas operaciones se denominan **entrada de datos**.

### En Scratch

Scratch dispone de un bloque de la categoría Sensores, de color azul claro:

```scratchblocks
preguntar [¿Cómo te llamas?] y esperar
```

Cuando se ejecuta:

1. Scratch muestra la pregunta.
2. El usuario escribe una respuesta.
3. El programa espera hasta que se confirma.
4. La respuesta queda disponible en el bloque `respuesta`.

Podemos guardar esa respuesta en una variable:

```scratchblocks
preguntar [¿Cómo te llamas?] y esperar
dar a [nombre v] el valor (respuesta)
```

Observa que estamos combinando dos tipos de operaciones:

- **Entrada:** preguntar el nombre.
- **Asignación:** guardar la respuesta.

::: info 🔜 ¿Y en PHP?
En PHP también podremos recibir datos del usuario.

Sin embargo, en una aplicación web normalmente utilizaremos **formularios HTML** para introducirlos y PHP para procesarlos.

No existe un equivalente directo al bloque «preguntar y esperar» de Scratch en una página PHP tradicional.
:::

## 6. Salida de datos: mostrar información

Los programas necesitan comunicar resultados.

Por ejemplo:

- Mostrar un saludo.
- Informar de un error.
- Mostrar el resultado de una operación.
- Indicar los puntos obtenidos.

Estas operaciones se denominan **salida de datos**.

### En Scratch

Podemos utilizar los bloques de Apariencia, de color morado:

```scratchblocks
decir [¡Hola!]
```

También podemos mostrar información durante un tiempo:

```scratchblocks
decir [¡Bienvenida a Scratch!] por (2) segundos
```

### Ejemplo completo: saludar

Ahora combinamos entrada, asignación y salida.

```scratchblocks
al presionar bandera verde
preguntar [¿Cómo te llamas?] y esperar
dar a [nombre v] el valor (respuesta)
decir (unir [Hola, ] (nombre)) por (3) segundos
```

¿Qué hace el programa?

1. Espera a que pulsemos la bandera verde.
2. Pregunta el nombre.
3. Guarda la respuesta.
4. Construye un saludo.
5. Muestra el saludo durante tres segundos.

::: tip 🎯 Fíjate
Este pequeño programa ya utiliza varios tipos de instrucciones.

No hemos necesitado aprender decenas de bloques. Simplemente hemos combinado unas pocas acciones.
:::

## 7. Invocaciones: pedir que se ejecute una acción

En programación podemos solicitar que se ejecute una operación.

A esto lo llamamos **invocar** una función, procedimiento u operación.

En Scratch encontramos muchos bloques que representan acciones.

Por ejemplo, en la categoría Movimiento:

```scratchblocks
mover (10) pasos
```

```scratchblocks
girar ↻ (15) grados
```

Y en la categoría Sonido:

```scratchblocks
tocar sonido [Miau v] hasta que termine
```

Estos bloques ordenan realizar una acción concreta.

### Crear nuestras propias instrucciones

Scratch también permite crear bloques personalizados mediante **Mis bloques**.

Por ejemplo, podemos crear una operación llamada `saludar`.

```scratchblocks
definir saludar
decir [¡Hola a todas!] por (2) segundos
```

Después podemos utilizarla:

```scratchblocks
al presionar bandera verde
saludar
```

Hemos definido una operación y posteriormente la hemos invocado.

::: important ⚙️ Una distinción
Los bloques de movimiento, apariencia o sonido ejecutan acciones.

Cuando hablamos de **invocación** en sentido estricto, nos referimos a llamar a una operación o función definida o disponible en el lenguaje.

En PHP aprenderemos a definir funciones y llamarlas cuando las necesitemos.
:::

## 8. Estructuras de control: decidir cómo se ejecutan las instrucciones

Hasta ahora hemos visto instrucciones que realizan acciones.

Pero los programas también necesitan decidir:

- Qué instrucciones ejecutar.
- En qué orden.
- Cuántas veces repetirlas.

Para ello utilizamos las **estructuras de control**.

Son fundamentales porque permiten construir programas más complejos combinando instrucciones sencillas.

### 8.1. Estructura secuencial

Es la estructura más sencilla.

Las instrucciones se ejecutan una detrás de otra, siguiendo el orden establecido.

Por ejemplo:

```scratchblocks
al presionar bandera verde
decir [¡Hola!] por (2) segundos
mover (50) pasos
decir [¡He terminado!] por (2) segundos
```

El personaje:

1. Saluda.
2. Se mueve.
3. Informa de que ha terminado.

No hay decisiones ni repeticiones.

::: tip 📌 Secuencia
Una secuencia consiste en ejecutar instrucciones en un orden determinado.
:::

### 8.2. Estructura selectiva: tomar decisiones

A veces necesitamos ejecutar instrucciones únicamente cuando se cumple una condición.

Por ejemplo:

> Si el jugador tiene más de 10 puntos, mostrar un mensaje de felicitación.

En Scratch utilizamos el bloque **si... entonces**, de la categoría Control (naranja).

```scratchblocks
si <(puntos) > (10)> entonces
    decir [¡Muy bien!] por (2) segundos
fin
```

El programa comprueba una condición.

- Si es verdadera, ejecuta las instrucciones.
- Si es falsa, las omite.

También podemos elegir entre dos alternativas.

```scratchblocks
si <(edad) >= (18)> entonces
    decir [Eres mayor de edad]
si no
    decir [Eres menor de edad]
fin
```

::: info 🔀 Selección
Una estructura selectiva permite elegir qué instrucciones ejecutar dependiendo de una condición.

En PHP utilizaremos estructuras como `if`, `else` y `switch`.
:::

### 8.3. Estructura repetitiva: repetir acciones

Imaginemos que queremos mover un personaje diez veces.

Podríamos escribir diez bloques iguales:

```scratchblocks
mover (10) pasos
mover (10) pasos
mover (10) pasos
```

Y continuar hasta tener diez.

Pero existe una solución mucho mejor.

Utilizar una **estructura repetitiva**.

```scratchblocks
repetir (10)
    mover (10) pasos
fin
```

El programa ejecuta diez veces la instrucción de movimiento.

También podemos repetir instrucciones mientras se cumpla una condición o hasta que ocurra algo.

```scratchblocks
repetir hasta que <tocando [borde v] ?>
    mover (10) pasos
fin
```

::: tip 🔁 Repetición
Una estructura repetitiva permite ejecutar varias veces un conjunto de instrucciones.

En PHP aprenderemos a utilizar `for`, `while`, `do...while` y `foreach`.
:::

## 9. Un programa completo combina varios tipos de instrucciones

Vamos a crear un pequeño programa que pregunte la edad y determine si una persona es mayor de edad.

### Paso 1. Pensar antes de programar

¿Qué acciones necesitamos?

1. Preguntar la edad.
2. Guardar la respuesta.
3. Comprobar si la edad es mayor o igual que 18.
4. Mostrar el mensaje correspondiente.

Todavía no hemos utilizado Scratch.

**Ya hemos diseñado la solución.**

### Paso 2. Identificar los tipos de instrucciones

| Acción | Tipo |
|---|---|
| Crear la variable `edad` | Declaración |
| Preguntar la edad | Entrada |
| Guardar la respuesta | Asignación |
| Comprobar si tiene 18 años | Selección |
| Mostrar el resultado | Salida |

### Paso 3. Construir el programa

Primero creamos la variable `edad` desde la categoría Variables.

Después utilizamos los siguientes bloques:

```scratchblocks
al presionar bandera verde
preguntar [¿Cuántos años tienes?] y esperar
dar a [edad v] el valor (respuesta)
si <(edad) >= (18)> entonces
    decir [Eres mayor de edad] por (3) segundos
si no
    decir [Eres menor de edad] por (3) segundos
fin
```

### Paso 4. Comprobar el funcionamiento

Prueba el programa con diferentes valores.

| Edad introducida | Resultado esperado |
|---|---|
| 12 | Eres menor de edad |
| 17 | Eres menor de edad |
| 18 | Eres mayor de edad |
| 25 | Eres mayor de edad |

::: warning ⚠️ ¿Y si escribimos letras?
El programa está pensado para recibir una edad numérica.

En un programa real también debemos comprobar que los datos introducidos sean válidos.

Más adelante aprenderemos a **validar los datos de entrada**.
:::

## 10. ¿Y cuando programemos en PHP?

Una de las ventajas de aprender primero con Scratch es que los conceptos fundamentales son los mismos.

Cambiará la forma de escribir las instrucciones, pero no la lógica que utilizamos para resolver problemas.

| Concepto | Scratch | PHP |
|---|---|---|
| Declaración | Crear una variable desde el entorno | Las variables se crean normalmente al asignarles un valor |
| Asignación | `dar a puntos el valor 10` | `$puntos = 10;` |
| Entrada | `preguntar y esperar` | Formularios HTML y `$_POST` |
| Salida | `decir Hola` | `echo "Hola";` |
| Invocación | Llamar a un bloque personalizado | `saludar();` |
| Selección | `si... entonces` | `if / else` |
| Repetición | `repetir 10` | `for / while` |

### Ejemplo: asignación

En Scratch:

```scratchblocks
dar a [puntos v] el valor (10)
```

En PHP:

```php
$puntos = 10;
```

### Ejemplo: salida

En Scratch:

```scratchblocks
decir [Hola]
```

En PHP:

```php
echo "Hola";
```

### Ejemplo: selección

En Scratch:

```scratchblocks
si <(edad) >= (18)> entonces
    decir [Mayor de edad]
si no
    decir [Menor de edad]
fin
```

En PHP:

```php
if ($edad >= 18) {
    echo "Mayor de edad";
} else {
    echo "Menor de edad";
}
```

### Ejemplo: repetición

En Scratch:

```scratchblocks
repetir (5)
    decir [Hola]
fin
```

En PHP:

```php
for ($i = 0; $i < 5; $i++) {
    echo "Hola";
}
```

::: important 🎯 La conclusión más importante
**La programación no cambia tanto de un lenguaje a otro como puede parecer.**

En Scratch utilizamos bloques de colores.

En PHP escribiremos instrucciones mediante texto.

Pero seguiremos necesitando:

- Guardar información.
- Obtener datos.
- Mostrar resultados.
- Ejecutar operaciones.
- Tomar decisiones.
- Repetir acciones.

**Aprender a programar es aprender a combinar estas operaciones para resolver problemas.**
:::

## 11. Actividad: pensar como una programadora

Antes de utilizar Scratch, vamos a analizar algunos problemas.

Para cada uno, identifica las acciones necesarias y el tipo de instrucción que utilizarías.

### Ejercicio 1. Calculadora sencilla

Queremos crear un programa que:

1. Pregunte dos números.
2. Los sume.
3. Muestre el resultado.

**Preguntas:**

- ¿Qué datos necesitamos almacenar?
- ¿Cuántas entradas de datos necesitamos?
- ¿Qué operación debemos realizar?
- ¿Qué resultado mostraremos?

### Ejercicio 2. Control de acceso

Queremos crear un programa que pregunte una contraseña.

Si la contraseña es correcta, debe mostrar «Acceso permitido».

En caso contrario, debe mostrar «Acceso denegado».

**Preguntas:**

- ¿Qué información necesitamos recibir?
- ¿Qué condición debemos comprobar?
- ¿Qué estructura de control utilizaremos?
- ¿Cuántas salidas diferentes puede producir?

### Ejercicio 3. Cuenta atrás

Queremos crear un programa que muestre los números del 10 al 1.

Al terminar debe mostrar «¡Despegue!».

**Preguntas:**

- ¿Necesitamos una variable?
- ¿Qué valor inicial tendrá?
- ¿Cuántas veces debemos repetir la acción?
- ¿Cómo cambia el valor en cada repetición?
- ¿Qué instrucción ejecutaremos al terminar?

## 12. Resumen: aprender a pensar antes de programar

Cuando tengas que resolver un problema mediante un programa, sigue este procedimiento:

1. **Comprender el problema.** ¿Qué queremos conseguir?
2. **Identificar los datos.** ¿Qué información necesitamos?
3. **Identificar las acciones.** ¿Qué debe hacer el programa?
4. **Ordenar las acciones.** ¿En qué secuencia deben ejecutarse?
5. **Detectar decisiones.** ¿Hay condiciones que debamos comprobar?
6. **Detectar repeticiones.** ¿Hay acciones que se ejecutan varias veces?
7. **Traducir las acciones a instrucciones.** Ahora sí, utilizamos Scratch o PHP.
8. **Probar el programa.** Comprobamos que funciona correctamente.

::: tip 🧠 Qué debes recordar de esta página
No empieces preguntándote:

**«¿Qué instrucciones de Scratch tengo que utilizar?»**

Empieza preguntándote:

**«¿Qué acciones tiene que realizar mi programa?»**

Cuando tengas claras esas acciones, será mucho más fácil encontrar las instrucciones adecuadas.

**Esa es una de las claves para aprender a programar.**
:::
