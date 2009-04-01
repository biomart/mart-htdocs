#!/usr/bin/bash
ls *.gif | xargs mogrify -modulate 100,100,120
