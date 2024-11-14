#!/usr/bin/env python
# -*- coding:utf-8 -*-

import math
import pygame
from pyroombaadapter import PyRoombaAdapter
import time

PORT = "/dev/ttyUSB0"
adapter = PyRoombaAdapter(PORT)
adapter.change_mode_to_safe()

vitesses = [100, 200, 300, 500]
indexDeVitesses = 0 #conduire à 100 mm/s par défaut
vitesse = vitesses[indexDeVitesses]

pygame.init()
screen = pygame.display.set_mode((400, 300))
pygame.display.set_caption("Controle Roomba")

print("Appuyez les fleches pour imprimer des emojis.")
print("Appuyez 'Enter' pour changer la vitesse.")
print("Appuyez 'q' pour quitter.")

while True:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False
        elif event.type == pygame.KEYDOWN:
            adapter.change_mode_to_safe()
            if event.key == pygame.K_UP:
                adapter.send_drive_direct(vitesse, vitesse)
            elif event.key == pygame.K_DOWN:
                adapter.send_drive_direct(-vitesse, -vitesse)
            elif event.key == pygame.K_LEFT:
                adapter.send_drive_direct(100, -100)
            elif event.key == pygame.K_RIGHT:
                adapter.move(0, math.radians(-50))
            elif event.key == pygame.K_RETURN:
                indexDeVitesses = (indexDeVitesses + 1) % len(vitesses)
                adapter.change_mode_to_passive()
                vitesse = vitesses[indexDeVitesses]
                print(f"Vitesse: {vitesse}")
                adapter.change_mode_to_safe()
            elif event.key == pygame.K_q:
                print("Au revoir")
                running = False
            print(f"Vitesse Roomba: {vitesse} mm/s")
            time.sleep(0.1)
        else:
            adapter.send_drive_direct(0, 0)

pygame.quit()
