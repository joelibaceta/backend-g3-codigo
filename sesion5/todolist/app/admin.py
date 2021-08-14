from django.contrib import admin

from app.models import Task

class TaskAdmin(admin.ModelAdmin):
    list_display = ('title', 'description')
    list_filter = ('title',)

admin.site.register(Task, TaskAdmin)

# Register your models here.
