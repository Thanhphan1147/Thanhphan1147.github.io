import requests
url = "http://shibe.online/api/shibes?count=100&urls=true&httpsUrls=false"
r = requests.get(url)
shibes = r.json()
f = open('shibes.txt', 'w')

for shibe in shibes:
    # print(shibe.split('/')[-1].split('.')[0])
    f.write(f"'{shibe.split('/')[-1].split('.')[0]}',\n")

f.close()
