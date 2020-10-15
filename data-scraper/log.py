import json
import requests 
from bs4 import BeautifulSoup
from data import acitve_machines
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
print("done")

r = s.post(BASE_URL + "/login", data={"_token": token, "email": email, "password": password}, allow_redirects=False, headers=headers)

print("Login done, redirecting")
print(r.status_code)

machines_data = []

for x in acitve_machines:

    print(x)
    r = s.get(BASE_URL + str(x), headers=headers)
    soup = BeautifulSoup(r.text, 'html.parser')
    img = soup.findAll("img", "img-circle image-lg")
    table = soup.findAll("div", "table-responsive")[1]
    name = table.findParent('div').find("h2").getText()
    print(name)

    dict = {
        "img": img[0]["src"],
        "name": name.strip()
    }
    for row in table.findAll("tr"):
        cells = row.findAll("td")
        dict[cells[0].getText()[0:-1]] = cells[1].getText().strip()
    
    print(dict)

    machines_data.append(dict)

with open("../redbit/src/assets/machines_data.json", "w") as json_file:
    json.dump(machines_data, json_file)

