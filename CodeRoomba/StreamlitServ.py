#!/usr/bin/env python
# -*- coding:utf-8 -*-

import math
from pyroombaadapter import PyRoombaAdapter
import streamlit as st
from time import sleep
import os
import requests
import subprocess

PORT = "/dev/ttyUSB0"
adapter = PyRoombaAdapter(PORT)

st.title("Roomba control")
battery_level = "Battery level: {:.2f}%".format(float(adapter.request_charge()) / 65535 * 100)
distance = "Distance travelled: {:.2f}".format(adapter.request_distance())

robot_mode = st.selectbox("Select Robot Mode", ["Safe mode", "Passive mode", "Full"])

if robot_mode == "Safe mode":
    st.header("Safe mode")
    adapter.change_mode_to_safe()
elif robot_mode == "Passive mode":
    st.header("Passive mode")
    adapter.change_mode_to_passive()
elif robot_mode == "Full":
    adapter.change_mode_to_full()

if st.button("Emergency Stop"):
    adapter.change_mode_to_passive()
    adapter.turn_off_power()

controls, videos = st.columns(2)

with controls:
    st.header("Controls")
    speed = st.slider('Robot speed', 0, 500, 200)
    if st.button('⬆️  Move forward'):
        adapter.send_drive_direct(speed, speed)

    if st.button('⬅️  Move left'):
        adapter.move(0, math.radians(20))

    if st.button('➡️  Move right'):
        adapter.move(0, math.radians(-50))

    if st.button('⬇️  Move back'):
        adapter.send_drive_direct(-speed, -speed)

    if st.button('Stop'):
        adapter.move(0, math.radians(0))
    
    if st.button("Music example"):
        adapter.send_song_cmd(0, 9, [69, 69, 69, 65, 72, 69, 65, 72, 69], [40, 40, 40, 30, 10, 40, 30, 10, 80])
        adapter.send_play_cmd(0)
        sleep(10.0)

with videos:
    st.header("Numbers")
    st.caption(battery_level)
    st.caption(distance)
    st.caption(adapter.request_voltage())
    col1, col2 = st.columns(2)


    st.write(""" <style> .scaled-iframe-wrapper { width: 800px; height: 600px; } .scaled-iframe-wrapper iframe { transform: scale(2); transform-origin: 0 0; } </style> <div class="scaled-iframe-wrapper"> <iframe src="http://10.0.0.196:8081/"></iframe></div> """, unsafe_allow_html=True,)


