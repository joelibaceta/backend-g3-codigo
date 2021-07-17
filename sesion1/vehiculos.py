class Vehiculo:

    def __init__(self, nro_puertas=0, nro_ruetas=4):
        self.nro_puertas = nro_puertas
        self.nro_ruetas = nro_ruetas

class Auto(Vehiculo):
    def __init__(self):
        super().__init__(4, 4)

class Moto(Vehiculo):
    def __init__(self):
        super().__init__(0, 2)

class Camioneta(Vehiculo):
    def __init__(self):
        super().__init__(nro_puertas = 4)


mi_moto = Moto()

print(f"Mi moto tiene {mi_moto.nro_puertas} puertas")
print(f"Mi moto tiene {mi_moto.nro_ruetas} ruedas")

mi_auto = Auto()

print(f"Mi auto tiene {mi_auto.nro_puertas} puertas")
print(f"Mi auto tiene {mi_auto.nro_ruetas} ruedas")

mi_camioneta = Camioneta()

print(f"Mi camioneta tiene {mi_camioneta.nro_puertas} puertas")
print(f"Mi camioneta tiene {mi_camioneta.nro_ruetas} ruedas")