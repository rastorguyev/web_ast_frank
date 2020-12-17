from django.conf.urls import url
from . import views


urlpatterns = [
    url('', views.index, name='index'),
    #url(r'^(?P<date>)/$', views.view_log, name='view_log'),
    #url(r'^accounts/login/$', views.login, name='login'),
    #url(r'^search-form', views.search_form, name='search_form'),
    #url(r'^search/$', views.search, name='search'),
]