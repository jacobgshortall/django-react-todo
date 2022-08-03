from django.db import models


class ToDoItem(models.Model):
    content = models.CharField(max_length=125)
    completed = models.BooleanField(default=False)

    class Meta:
        ordering = ['-id']
