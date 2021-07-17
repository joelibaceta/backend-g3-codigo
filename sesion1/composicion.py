class Asiento:
    def __init__(self):
        self.color = "negro"
    
    def reclinar(self):
        print("asiento reclinado")

class Auto:
    def __init__(self, marca):
        self.asientos = [
            Asiento(), Asiento(), 
            Asiento(), Asiento()
        ]
    
mi_auto = Auto("Nissan")
print(mi_auto.asientos[0].color)

mi_deportivo = Auto("Ferrari")

asiento_rojo = Asiento()
asiento_rojo.color="rojo"

mi_deportivo.asientos = [asiento_rojo, asiento_rojo]
print(len(mi_deportivo.asientos))
print(mi_deportivo.asientos[0].color)

