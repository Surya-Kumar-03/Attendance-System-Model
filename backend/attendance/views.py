from django.shortcuts import render, HttpResponse
import json
from django.views.decorators.csrf import csrf_exempt
from .face_detection import predict
from .models import Students, DailyAttendance
from django.utils.timezone import now


@csrf_exempt
def home(request):
    if request.method == 'POST':
        file = request.FILES.get('image')
        result = predict(file)
        if result is not None:
            response = {
                'name': result.name,
                'reg_no': result.reg_no,
                'roll_no': result.roll_no,
                'section': result.section,
                'dept': result.dept,
                'already_marked': False,
                'status': 200
            }
            att = DailyAttendance.objects.filter(date=now().date())
            if att.count() == 0:
                att = DailyAttendance(date=now().date())
            else:
                att = att.first()
            if att.attendance is None:
                att.attendance = list()
            if result.pk in att.attendance:
                response['already_marked'] = True
            else:
                att.attendance.append(result.pk)
                att.save()
        else:
            response = {'status': 404}
        response = json.dumps(response)
        return HttpResponse(response, content_type='application/json charset=utf-8')
    return HttpResponse(json.dumps({}), content_type='application/json charset=utf-8')


def record(request):
    if request.GET.get('date'):
        pass
    return HttpResponse()