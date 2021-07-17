class Pet():
    def __init__(self, name):
        self.name=name

    def sleep(self):
        print("zZzZ..")


class Dog(Pet):
    pass

class Cat(Pet):
    pass

class Bird(Pet):
    def fly(self):
        print("woooh")

firulais = Dog("Firulais")
pelusa = Cat("pelusa")
pepito = Bird("pepito")

firulais.sleep()
pelusa.sleep()
pepito.sleep()
pepito.fly()
print(pelusa.age)