from django.contrib import admin

# Register your models here.
from .models import  DailyAttendance, Students


admin.site.register(Students)
admin.site.register(DailyAttendance)