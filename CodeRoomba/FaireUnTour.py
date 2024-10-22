import math 
from pyroombaadapter import PyRoombaAdapter
import time

PORT = "/dev/ttyUSB0"
adapter = PyRoombaAdapter(PORT)

adapter.change_mode_to_safe()

while True:
	adapter.send_drive_direct(120, 120)
	time.sleep(10)
	adapter.move(0.0, math.radians(-90))
	time.sleep(1)
	adapter.send_drive_direct(200, 200)
	time.sleep(1)
	adapter.move(0, math.radians(-90))
	time.sleep(1)
	adapter.send_drive_direct(120, 120)
	time.sleep(10)
	adapter.move(0, math.radians(-90))
	time.sleep(1)
	adapter.send_drive_direct(200, 200)
	time.sleep(1)
	adapter.move(0, math.radians(-90))
	time.sleep(1)
