from django.urls import path
from .views import ItemList, ItemDetail,RegistrationAPIView, LoginAPIView,UserDetailAPIView


urlpatterns = [
    path('items/', ItemList.as_view(), name='item-list'),
    path('items/<int:pk>/', ItemDetail.as_view(), name='item-detail'),
    path('register/', RegistrationAPIView.as_view(), name='register'),
    path('login/', LoginAPIView.as_view(), name='login'),
    path('userdetail/<int:pk>/', UserDetailAPIView.as_view()),
]