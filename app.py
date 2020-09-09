from flask import Flask, render_template
from redis import Redis, RedisError

app = Flask(__name__)
redis = Redis(host="redis", db=0, socket_connect_timeout=2, socket_timeout=2)


@app.route('/')
def index():
    try:
        counter = redis.incr("counter")
    except RedisError:
        counter = 0
        print("Failed to increment counter")

    return render_template('index.html', counter=counter)


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=80)
