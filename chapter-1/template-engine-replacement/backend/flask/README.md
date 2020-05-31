# Python: Flask Framework

1. Install virtualenv.

    Virtualenv is a useful tool that creates isolated Python development environments where you can do all your development work.

    It's possible that your system already has virtualenv. Open your terminal, and try running:

    ```
    $ virtualenv --version
    15.1.0
    ```

    If the command was not found, use easy_install or pip to install virtualenv.

    `$ sudo apt-get install python-virtualenv`

2. Install Flask.

    After installing virtualenv, you can create a new isolated development environment, like so:

    `$ virtualenv venv`

    Here, virtualenv creates a folder, venv/, and sets up a clean copy of Python inside for you to use. It also installs the handy package manager, pip.

    Enter your newly created development environment and activate it so you can begin working within it.

    ```
    $ mkdir flask
    $ cd flask
    . venv/bin/activate
    ```

    Now, you can safely install Flask:

    `$ pip install Flask`

3. Install Flask-CORS

    Install Flask-CORS, a Flask extension for handling Cross Origin Resource Sharing (CORS)

    ```
    $ pip install -U flask-cors
    ```

4. Setting up the project structure and creating pages. Example, create a folder inside `venv` and a file `routers.py` with these lines below in this folder:

    ```
    from flask import Flask, jsonify, json
    from flask_cors import CORS

    app = Flask(__name__)
    cors = CORS(app, resources={r"/api/*": {"origins": "*"}})

    @app.route('/')
    def home():
      return jsonify('hello world')

    if __name__ == '__main__':
      app.run(debug=True)
    ```

    We're finally ready to see the fruits of our labour. Return to the terminal, and type:

    ```
    $ cd venv
    $ python app/routes.py
     * Serving Flask app "routes" (lazy loading)
     * Environment: production
       WARNING: Do not use the development server in a production environment.
       Use a production WSGI server instead.
     * Debug mode: on
     * Running on http://127.0.0.1:5000/ (Press CTRL+C to quit)
     * Restarting with stat
     * Debugger is active!
     * Debugger PIN: 113-716-115
    ```

    Visit `http://localhost:5000/` in your favorite web browser.

    A minimal Flask application looks something like this:

    ```
    from flask import Flask
    app = Flask(__name__)

    @app.route('/')
    def hello_world():
        return 'Hello World!'

    if __name__ == '__main__':
        app.run()
    ```

    Just save it as hello.py (or something similar) and run it with your Python interpreter. Make sure to not call your application flask.py because this would conflict with Flask itself.

    ```
    $ python hello.py
    * Running on http://127.0.0.1:5000/
    ```

## ref:

* http://flask.pocoo.org/docs/1.0/installation/
* https://flask-cors.readthedocs.io/en/latest/
