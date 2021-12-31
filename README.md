# Cookbook

"Cookbook" is our final project for San Diego Global Knowledge University's "Full Stack Development - Immersive" course. 

We generated the idea of what type of site to create, and then decided on what frameworks to implement. "Cookbook" is a social media site where users can create an account and post recipes, which are then viewable by other users. 

We decided to use React.js for the front end of the site as we were loosely replicating a Facebook style website, and it allowed us to have reusable components and easy integration with our back-end. The back-end was created using Python Flask, with MongoDB as it is a lightweight framework and the NoSQL database lets our data structure be flexible.

## Installation

In the "react-book" folder, use npm to install dependencies and run the front-end.

```bash
~/cookbook/react_book$ npm install
~/cookbook/react_book$ npm start
```

In the "flask-book" folder, create a virtual environment and install the requirements.txt dependencies, then simply activate the "runserver.sh" script
```bash
python3 -m venv venv
source venv/bin/activate 
pip install -r requirements.txt
./runserver.sh
```



## Usage

Current functionality allows for a user to create an account, post a new recipe, and then view recipes and other users.


## Contributors
This project was completed by Alex Garcia and Nathan Vik, with plenty of help from our professors at SDGKU.

