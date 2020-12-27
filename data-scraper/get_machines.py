import os
import json
import requests

s = requests.Session()

apiToken = os.getenv('HACKTHEBOXKEY')

headers = {"User-Agent": "https://github.com/calebstewart/python-htb"}
BASE_URL = "https://www.hackthebox.eu"

headers["authorization"] = "Bearer " + apiToken

r = s.get(BASE_URL + "/api/machines/get/all", headers=headers)

cleanJson = r.text.replace("\\", "")

with open("../redbitsite/src/assets/machines_data.json", "w") as json_file:
    json_file.write(cleanJson)
