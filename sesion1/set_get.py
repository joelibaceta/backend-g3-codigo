class Person:

    def __init__(self, nombre):
        self.nombre = nombre
        self.edad = 18

    def __setattr__(self, name, value):
        if name == "edad":
            if (type(value) == int):
                if (value >= 18):
                    super().__setattr__(name, value)
                else:
                    raise ValueError("La edad debe ser mayor igual que 18")
            else:
                raise ValueError("La edad debe ser un numero entero")
        else:
            super().__setattr__(name, value)

    def __getattribute__(self, attr):
        print(attr)
        if attr == "edad":
            raise ValueError("No se puede mostrar la edad")
        else:
            super().__getattribute__(attr)

carlos = Person(nombre="Carlos Gutierrez")
carlos.edad=30

print(f"{carlos.nombre}")