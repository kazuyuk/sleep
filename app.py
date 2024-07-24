from flask import Flask
import time

app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello World!'

@app.route('/sleep')
def sleep():
    time.sleep(5)  # 5秒間待機
    return 'Slept for 5 seconds!'

if __name__ == '__main__':
    app.run(debug=True)
