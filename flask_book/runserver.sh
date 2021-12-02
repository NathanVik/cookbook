#!/bin/bash
# sudo chmod u+x runserver <- use this to assign exec permissions
source venv/bin/activate
export FLASK_APP=server.py
export FLASK_ENV=development
flask run
