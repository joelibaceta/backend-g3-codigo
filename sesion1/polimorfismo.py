class Pet():
    def __init__(self, name):
        self.name=name

    def sleep(self):
        print("zZzZ..")

    def make_sound(self):
        print("grrr")


class Dog(Pet):
    def make_sound(self):
        print("woof")

class Cat(Pet):
    def make_sound(self):
        print("meow")

class Bird(Pet):
    def fly(self):
        print("woooh")
    def make_sound(self):
        print("tweet")

firulais = Dog("Firulais")
pelusa = Cat("pelusa")
pepito = Bird("pepito")

pets = [firulais, pelusa, pepito]

for pet in pets:
    pet.make_sound()