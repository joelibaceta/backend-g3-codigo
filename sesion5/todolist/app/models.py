from django.db import models

# Create your models here.
class Task(models.Model):
    title=models.CharField(max_length=140)
    description=models.TextField()
    due_date =models.DateField(null=True)
    status = models.BooleanField(null=True)

    def __str__(self):
        return self.title