from django.shortcuts import render
from django.views.generic import DetailView, UpdateView
from django.views.generic.edit import FormView
from app.models import Task
from app.views.forms import TaskForm, TaskModelForm

def task_detail(request, id):
    task = Task.objects.get(pk = id)
    return render(request, 'app/task_detail.html', {'object': task})

def new_task(request):
    return render(request, 'app/task_form2.html')

class TaskModelDetailView(DetailView):
    model = Task

class TaskFormView(FormView):
    form_class = TaskForm
    template_name = 'app/task_form.html'

class TaskModelFormView(FormView):
    form_class = TaskModelForm
    template_name = 'app/task_form.html'


class TaskUpdateView(UpdateView):
    model = Task
    fields = '__all__'

    def get_success_url(self):
        return "/tasks/"