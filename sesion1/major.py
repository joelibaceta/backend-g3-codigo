# Retornar el mayor de tres numeros

n1 = int(input("Ingrese numero 1: "))
n2 = int(input("Ingrese numero 2: "))
n3 = int(input("Ingrese numero 3: "))

if (n1 > n2 and n1 > n3):
    print('n1 es el mayor')
else:
    if (n2 > n3):
        print('el mayor es n2')
    else:
        print('el mayor es n3')