#!/usr/bin/env python
# -*- coding:utf-8 -*-

ahwakNotes = {
    "notes": [
        [63, 60, 65, 0, 65, 0, 67, 0, 65, 0, 67, 0, 65, 0, 64, 0],
        [64, 0, 65, 0, 64, 0, 65, 0, 64, 0, 64, 65, 64, 62, 0, 62],
        [0, 64, 0, 62, 0, 64, 0, 62, 0, 60, 0, 58, 0, 57, 0, 60],
        [58, 0, 57, 0, 59, 60, 63, 0, 65, 0, 65, 0, 67, 0, 65, 0],
        [67, 0, 65, 0, 64, 0, 64, 0, 65, 0, 64, 0, 64, 0, 65, 64],
        [0, 66, 64, 65, 64, 62, 0, 62, 0, 64, 0, 62, 0, 64, 62, 0],
        [60, 0, 58, 60, 58, 57, 58, 0, 57, 0, 60, 65, 0, 65, 67, 0],
        [69, 67, 65, 0, 64, 0, 57, 61, 62, 0, 62, 0, 64, 0, 65, 0],
        [64, 0, 62, 0, 62, 0, 57, 0, 59, 0, 62, 60, 59, 60, 62, 0],
        [64, 0, 65, 67, 0, 69, 67, 65, 0, 67, 65, 0, 64, 0, 65, 0],
        [64, 62, 0, 61, 65, 64, 0, 62, 60, 58, 0, 62, 60, 58, 0, 57],
        [53]
    ]
}

ahwakDurations = {
    "durations": [
        [5, 22, 27, 20, 14, 2, 14, 3, 13, 4, 11, 0, 10, 4, 15, 29],
        [16, 2, 14, 2, 14, 4, 10, 0, 7, 6, 6, 7, 6, 18, 11, 11],
        [3, 14, 1, 14, 2, 13, 0, 15, 2, 25, 5, 13, 0, 15, 0, 4],
        [15, 1, 7, 15, 3, 18, 5, 1, 38, 3, 13, 3, 14, 1, 17, 3],
        [11, 0, 10, 2, 13, 34, 16, 4, 13, 3, 7, 3, 8, 1, 10, 7],
        [8, 2, 5, 6, 8, 14, 11, 18, 0, 17, 0, 13, 3, 12, 16, 0],
        [29, 3, 4, 5, 9, 17, 17, 1, 9, 19, 20, 42, 4, 18, 26, 4],
        [33, 5, 21, 1, 17, 2, 15, 3, 42, 4, 15, 28, 1, 31, 24, 1],
        [25, 0, 11, 4, 2, 34, 14, 17, 11, 1, 16, 0, 15, 16, 0, 17],
        [15, 1, 14, 0, 15, 2, 15, 32, 14, 3, 14, 0, 32, 13, 1, 15],
        [0, 14, 1, 17, 15, 1, 19, 19, 19, 17, 18, 20, 13, 3, 13, 0],
        [64, 19, 21, 1, 11, 11, 0, 34, 16, 13, 2, 13, 1, 25, 6, 13],
        ] 
}

 #نسمع الاغنية اهواك من عبد الحليم حافظ
durations_dict = ahwakDurations
notes_dict = ahwakNotes

from pyroombaadapter import PyRoombaAdapter
from time import sleep
adapter = PyRoombaAdapter("/dev/ttyUSB0") #نسلم الرومبا

adapter.send_play_cmd(0) # نحذف الاغنية من قبل

for i in range(len(durations_dict["durations"])):
	print(i)
	adapter.send_song_cmd(0, 16, notes_dict["notes"][i], durations_dict["durations"][i]) #نرسل الاغنية الى الرومبا
	sleep(0.1)
	adapter.send_play_cmd(0)
	sleep(sum(durations_dict["durations"][i])/64+0.1)


adapter.send_play_cmd(0) #نخلس الاغنية

adapter.change_mode_to_passive()
