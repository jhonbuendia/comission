from django.shortcuts import render
from django.db import connection
import json
from django.http import HttpResponse
from bson import json_util
# Create your views here.

def get_json(request):
	try:
		cursor = connection.cursor()
		cursor.callproc('get_catalog_json')
		data = cursor.fetchall()
		
		return HttpResponse(json.dumps(data[0] , default=json_util.default), content_type= "application/json")
	except Exception, e:	
		return HttpResponse("error getting json: "+str(e.args))

def view_products(request):
	return render(request, 'catalog/product_list.html')

