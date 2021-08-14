"""todolist URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
 
 
from django.contrib import admin
from django.urls import path

from app.views.tasks import task_list, TaskListView, TaskModelListView
from app.views.tasks import create_task
from app.views.tasks import TaskCreateView
from app.views.task import TaskUpdateView
from app.views.task import task_detail,TaskModelDetailView
from app.views.task import TaskFormView, TaskModelFormView
from app.views.task import new_task

urlpatterns = [
    path('admin/', admin.site.urls),
    path('tasks/', task_list),
    path('tasks2/', TaskListView.as_view()),
    path('tasks3/', TaskModelListView.as_view()),

    path('task/<id>/', task_detail),
    path('task2/<pk>/', TaskModelDetailView.as_view()),

    path('task_form/', new_task),
    path('task_form2/', TaskFormView.as_view()),
    path('task_form3/', TaskModelFormView.as_view()),

    path('create_task/', create_task),
    path('create_task2/', TaskCreateView.as_view()),

    path('update_task2/<pk>/', TaskUpdateView.as_view())

]
