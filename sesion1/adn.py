# Escribir una funcion que retorne la contraparte 
# la cadena complementaria para una secuencia ADN:

# TACAATTTTTTCAGACCA =>ATGTTAAAAAAGTCT


def complement(adn):
    """Retorna cadena ADN Complementaria"""

    if adn=="":
        return "Cadena vacia no permitida"

    nucleotidos = {
        "A": "T",
        "T": "A",
        "C": "G",
        "G": "C"
    }

    comp = ""
    for i in adn:
        if i in ['A', 'T', 'C', 'G']:
            comp = comp + nucleotidos[i]
        else:
            raise ValueError("Error cadena invalida")
    return comp

    # comp = []
    # for i in adn:
    #     comp.addpend(nucleotidos[i])
    # return "".join(comp)

adn_string = input()

try:
    result = complement(adn_string)
    print(result)
except ValueError:
    print("Ha ocurrido un error")

