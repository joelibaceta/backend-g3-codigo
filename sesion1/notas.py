class Registro:

    def __init__(self):
        self.__notas = []

    def registrar_nota(self, nota):
        if type(nota) == float:
            if nota > 0:
                self.__notas.append(nota)
            else:
                raise ValueError("La nota debe ser mayor a 0")
        else:
            raise ValueError("La nota debe ser un numero")
    
    def get_promedio(self):
        sumatoria = 0
        for nota in self.__notas:
            sumatoria = sumatoria + nota
        
        return sumatoria / len(self.__notas)

registro = Registro()
registro.registrar_nota(15.0)
registro.registrar_nota(14.0)
registro.registrar_nota(16.0)

print(registro.get_promedio())