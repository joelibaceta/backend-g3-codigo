class Empleado:

    def __init__(self, nombre, apellido, salario):
        self.nombre = nombre
        self.apellido = apellido
        self.__salario = salario

    def __calcular_salario(self):
        return self.__salario * 0.83

    def aumentar_salario(self):
        self.__salario = self.__salario *  1.3

    def pagar(self):
        print(f"Sueldo de {self.nombre} ha sido pagado")

juan = Empleado(
    nombre="Juan",
    apellido="perez",
    salario=1200
)

juan.aumentar_salario()

print(juan.__dict__)

#print(juan.__calcular_salario())
print(f"{juan.nombre} {juan.apellido}")
