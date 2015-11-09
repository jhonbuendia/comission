from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.
import urllib2
import urllib
import time
import gzip
import uuid
import csv
import sys
import re
import os

def get_csv(request):
	base_url = 'http://datatransfer.cj.com/datatransfer/files/4177550/outgoing/productcatalog/146580/'
	test_url = 'http://datatransfer.cj.com/datatransfer/files/4177550/outgoing/productcatalog/146580/Amiclubwear-Product_Catalog.txt.gz'
	username = '4177550'
	password = '?c3zZasB'
	payload = '''{"channel": "#commission_junction","username": "monkey-comission-junction-slave","icon_emoji": ":monkey_face:"}'''
	print payload
	values = {'payload': payload}
	data = urllib.urlencode(values)

	p = urllib2.HTTPPasswordMgrWithDefaultRealm()
	p.add_password(None, test_url, username, password)
	handler = urllib2.HTTPBasicAuthHandler(p)
	opener = urllib2.build_opener(handler)
	urllib2.install_opener(opener)
	response = urllib2.urlopen(test_url).read()

	file_ = open('/home/jhon/archivo.gz', 'w')
	file_.write(response)
	file_.close()
	#print response
	#req = urllib2.Request("http://datatransfer.cj.com/datatransfer/files/4177550/outgoing/productcatalog/146580/Amiclubwear-Product_Catalog.txt.gz", data)
	#response = urllib2.urlopen(req)
	#result = response.read()
	#print result
	return HttpResponse("ok")

