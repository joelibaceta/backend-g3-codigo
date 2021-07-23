class Person:

    def __init__(self, nombre):
        self.nombre = nombre
        self.__edad = 18

    def set_edad(self, value):
        if (type(value) == int):
            if (value >= 18):
                self.__edad = value
            else:
                raise ValueError("La edad debe ser mayor igual que 18")
        else:
            raise ValueError("La edad debe ser un numero entero")
    
    def get_edad(self):
        return self.__edad

carlos = Person(nombre="Carlos Gutierrez")
carlos.set_edad(40)

print(f"{carlos.nombre} tiene {carlos.get_edad()}")