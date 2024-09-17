#!/usr/bin/python3

def element(my_list, idx):
    if idx > len(my_list)-1 or idx < 0:
        return None
    else:
        return my_list[idx]
