import random
from attendance.models import Students


def predict(image):
    return random.choice(Students.objects.all())
