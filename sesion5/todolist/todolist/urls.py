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
 
from app.views import task_list, task_detail, new_task
from app.views import TaskListView
from app.views import TaskModelListView, TaskModelDetailView
from app.views import TaskFormView, TaskModelFormView
from django.contrib import admin
from django.urls import path

urlpatterns = [
    path('admin/', admin.site.urls),
    path('tasks/', task_list),
    path('tasks2/', TaskListView.as_view()),
    path('tasks3/', TaskModelListView.as_view()),

    path('task/<id>/', task_detail),
    path('task2/<pk>/', TaskModelDetailView.as_view()),

    path('task_form/', new_task),
    path('task_form2/', TaskFormView.as_view()),
    path('task_form3/', TaskModelFormView.as_view())

]
