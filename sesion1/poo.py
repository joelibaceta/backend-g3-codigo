class Dog:

    def __init__(self, v_name):
        self.size = "S"
        self.name = v_name
        print("instancia creada!")

    def bark(self):
        print(self.name + " woof")

    def disney():
        pluto = Dog("pluto")
        return pluto


firulais = Dog("firulais")
firulais.size = "M"

snoppy = Dog("snoppy")

firulais.bark()
snoppy.bark()

print(firulais.size)
print(snoppy.size)

pluto = Dog.disney()


