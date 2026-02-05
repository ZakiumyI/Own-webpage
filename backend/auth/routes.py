from flask import Blueprint, jsonify
from flask_login import login_user, logout_user, login_required
from models.user import User

auth_bp = Blueprint("auth", __name__, url_prefix="/api/auth")

@auth_bp.route("/login", methods=["POST"])
def login():
    user = User(id=1)
    login_user(user)
    return jsonify({"ok": True, "message": "Login exitoso"})

@auth_bp.route("logout", methods=["POST"])
@login_required
def logout():
    logout_user()
    return jsonify({"ok": True})

@auth_bp.route("/me")
@login_required
def me():
    return jsonify({"user": "logged"})