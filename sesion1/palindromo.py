# Escribir una funcion que retorne verdadero si la palabra ingresada como parametro es palindroma

palabra = input()

# Metodo 1:
palabra_invertida = palabra[::-1]
if (palabra == palabra_invertida):
    print("Es palindroma")
else:
    print("No es palindroma")

# Metodo 2:
# Funcion

def is_palindromo(cadena):

    longitud = len(cadena)

    for i in range(0, longitud):
        if (cadena[i] != cadena[-(i+1)]):
            return False
    return True

print(is_palindromo(palabra))