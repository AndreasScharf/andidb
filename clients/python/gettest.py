import andiDB

client = andiDB.client('127.0.0.1', 1337)
index = client.index('sensors', 'Sensor 1 MFS')
print(index)
print(client.pull('sensors', index))
