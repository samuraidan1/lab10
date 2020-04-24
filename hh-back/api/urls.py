from django.urls import path
from api import views

from rest_framework_jwt.views import obtain_jwt_token

urlpatterns = [

    path('login/', obtain_jwt_token),
    path('companies/', views.companies),
    path('companies/<int:id>/', views.company),
    path('companies/<int:id>/vacancies/', views.company_vacans),
    
    path('vacancies/', views.VacancyListView.as_view()),
    path('vacancies/<int:id>/', views.vacancy),
    path('vacancies/top_ten/', views.top_vacancies),
]