from flask import Flask, send_from_directory
from config import Config
from extensions import login_manager, cors
from auth.routes import auth_bp
from models.user import User
import os


def create_app():
    app = Flask(
        __name__,
        static_folder=Config.FRONTEND_FOLDER,
        static_url_path=""
    )

    app.config.from_object(Config)

    login_manager.init_app(app)
    cors.init_app(app)

    app.register_blueprint(auth_bp)

    @login_manager.user_loader
    def load_user(user_id):
        return User(user_id)
    
    @app.route("/", defaults={"path": ""})
    @app.route("/<path:path>")
    def serve_frontend(path):
        full_path = os.path.join(Config.FRONTEND_FOLDER, path)

        if path != "" and os.path.exists(full_path):
            return send_from_directory(Config.FRONTEND_FOLDER,  path)
        
        return send_from_directory(Config.FRONTEND_FOLDER, "index.html")
    return app

if __name__ == "__main__":
    app = create_app()
    app.run(debug=True)
