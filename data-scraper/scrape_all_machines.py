import json
import requests 
import cred

s = requests.Session()

#data
email=cred.email
password=cred.password
headers = {"User-Agent": "https://github.com/calebstewart/python-htb"}
BASE_URL = "https://www.hackthebox.eu"

r = s.get(BASE_URL + "/login", headers=headers)
data = r.text.split('id="loginForm"')[1]
token = data.split('_token" value="')[1].split('"')[0]

print("Retrieving token for login")
print(token)
headers["authorization"] = "Bearer " + token
print("done")

r = s.post(BASE_URL + "/login", data={"_token": token, "email": email, "password": password}, allow_redirects=False, headers=headers)
print("Login done, redirecting")
print(r.status_code)

r = s.get(BASE_URL + "/home", headers=headers)
html = r.text
apiToken = html[html.index("apiToken")+11:html.index("apiToken")+71]
print(apiToken)
#updating headers
headers["authorization"] = "Bearer " + apiToken

#new request to get the data

r = s.get(BASE_URL + "/api/machines/get/all", headers=headers)

cleanJson = r.text.replace("\\", "")

with open("../redbitsite/src/assets/machines_data.json", "w") as json_file:
    json_file.write(cleanJson)

