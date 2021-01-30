import andiDB
import time
client = andiDB.client('127.0.0.1', 1337)


maschine_running = andiDB.value(client, 'maschine_values', 'Procedur Error Anlage')
maschine_fatal_error = andiDB.value(client, 'maschine_values', 'Procedur Warning Anlage')

maschine_running.set(1)
maschine_fatal_error.set(2)

while 1:
  value1 = maschine_running.get()
  value2 = maschine_fatal_error.get()

  maschine_running.set(value2)
  maschine_fatal_error.set(value1)


  print('maschine running', maschine_running.get())
  print('maschine fatal error', maschine_fatal_error.get())
  time.sleep(1)

