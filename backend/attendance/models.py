from django.db import models

# Create your models here.


class Students(models.Model):
    name = models.CharField(max_length=50)
    reg_no = models.CharField(max_length=9)
    roll_no = models.CharField(max_length=10)
    section = models.CharField(max_length=3)
    dept = models.CharField(max_length=9)

    def __str__(self):

        return f"{self.name} ({self.dept})"


class DailyAttendance(models.Model):
    date = models.DateField()
    attendance = models.JSONField()
    total_present = models.IntegerField()
    absentee = models.IntegerField()

    def save(self, *args, **kwargs):
        self.total_present = len(self.attendance)
        self.absentee = Students.objects.count() - self.total_present
        return super(DailyAttendance, self).save(*args, **kwargs)

