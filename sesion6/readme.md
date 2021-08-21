# Comandos Utiles

1. Instala el ORM

```
npm install sequelize
```

2. Instalar CLI del ORM

```
npm install sequelize-cli
```

3. Inicializar estructura de proyecto

```
npx sequelize-cli init
```

4. Modificar la configuracion `config.jon` para conectar a nuestro servidor de base de datos.

5. Crear la base de datos

```
npx sequelize-cli db:create
```

6. Crear el primer modelo

```
npx sequelize-cli model:generate --name Product --attributes 
```

7. Generar modelo Producto

```
npx sequelize-cli model:generate --name Product  --attributes title:string,precio:float,description:string
```

8. Realizr migraciones 

```
npx sequelize-cli db:migrate
```