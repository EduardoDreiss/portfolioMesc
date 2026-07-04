from flask import Blueprint, redirect, url_for

portfolio_bp = Blueprint("portfolio", __name__)


@portfolio_bp.route("/")
def index():
    return redirect(url_for("main.galeria"))
