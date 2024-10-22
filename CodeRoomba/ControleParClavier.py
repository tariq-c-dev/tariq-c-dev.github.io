import math
import pygame
from pyroombaadapter import PyRoombaAdapter
import time

PORT = "/dev/ttyUSB0"
adapter = PyRoombaAdapter(PORT)
adapter.change_mode_to_safe()

speeds = [100, 200, 300, 500]
speed_index = 0
speed = speeds[speed_index]

pygame.init()
screen = pygame.display.set_mode((400, 300))
pygame.display.set_caption("Controle Roomba")

print("Appuyez sur les fleches pour imprimer des emojis.")
print("Appuyez sur 'Enter' pour changer la vitesse.")
print("Appuyez sur 'q' pour quitter.")

while True:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False
        elif event.type == pygame.KEYDOWN:
            adapter.change_mode_to_safe()
            if event.key == pygame.K_UP:
                adapter.send_drive_direct(speed, speed)
            elif event.key == pygame.K_DOWN:
                adapter.send_drive_direct(-speed, -speed)
            elif event.key == pygame.K_LEFT:
                adapter.send_drive_direct(100, -100)
            elif event.key == pygame.K_RIGHT:
                adapter.move(0, math.radians(-50))
            elif event.key == pygame.K_RETURN:
                speed_index = (speed_index + 1) % len(speeds)
                adapter.change_mode_to_passive()
                speed = speeds[speed_index]
                print(f"Vitesse: {speed}")
                adapter.change_mode_to_safe()
            elif event.key == pygame.K_q:
                print("مع السلام ")
                running = False
            print(f"Ça va à: {speed}")
            time.sleep(0.1)
        else:
            adapter.send_drive_direct(0, 0)

pygame.quit()
