from django.shortcuts import render
from django.views.generic import ListView

from app.models import Task

# Function based views

def task_list(request):
    """Vista basada en funcion, usando codigo imperativo"""
    tasks = Task.objects.all()
    return render(request, 'app/task_list.html', {'object_list': tasks})

# Generic class based views

class TaskListView(ListView):
    """Vista basada en clase, usando codigo descriptivo"""
    # Nombre de variable para almacenar la lista de tareas 
    context_object_name = 'object_list'
    # Consulta que trae la lista de tareas
    queryset = Task.objects.all()
    # Nombre del template a usar
    template_name = 'app/task_list.html'

class TaskModelListView(ListView):
    """Vista basada en clase, usando asumpciones de Django"""
    # 1. La vista debe llamarse MODELNAME_list.html
    # 2. La vista tiene que estar dentro de una carpeta cuyo nombre
    #    sea el nombre de la applicacion /app/MODELNAME_list.html
    # 3. El listado de todos los registro del modelo (SELECT * FROM)
    #    se enviaran al template dentro de la variable object_list
    model = Task