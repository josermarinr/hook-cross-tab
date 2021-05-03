
# hook cros tab
![demo](./demo.gif)
## Motivacion

El objetivo de este hook es poder ayudar a controlar el state en varia pestañas de navegacion, es multiproposito

he dedicido crear este hook ya que no estamos enfretando a una nueva era donde tanto tu como otros poseen varias pantallas y esto sera lo comun de ahora en adelante.

por consiguiente cada vez que me enfrento a esto debo configurar a la mano un hook pensado en ello, ya no tendras que hacer porque este hook se encargara de la configuracion y manipulacion de tu state solo con 3 simples propiedades

## To use

para llamar un hook dentro de un componente debes pasarle 3 propiedades

la primera es la key, con esto se guardara el evento o data para poderlo encontrar mas facil.

ma segunda es la data en si, este hook acepta cualquier tipo de data, debes tener claro que para local storages es emjor usar string

y como tercera es la opcion, por los momentos acepta "local" para localStorage y "broadcast"


ejemplo
```
  const [todos, setTodos] = useCrossTabState({
        key: "tareas",
        initialState: [],
        option: "local
    })
```

the invito a ver la verdadera implementacion en el siguiete
[repo](https://github.com/josermarinr/example-hook-cross-tab)
