from flask import Blueprint, abort, render_template

from app.models import Obra

main_bp = Blueprint("main", __name__)


@main_bp.route("/")
def home():
    obras_destaque = Obra.query.filter_by(destaque=True).order_by(Obra.created_at.desc()).all()
    return render_template("home.html", obras_destaque=obras_destaque)


@main_bp.route("/galeria")
def galeria():
    obras = Obra.query.order_by(Obra.created_at.desc()).all()
    return render_template("galeria.html", obras=obras)


@main_bp.route("/obra/<slug>")
def obra(slug):
    obra = Obra.query.filter_by(slug=slug).first_or_404()
    return render_template("obra.html", obra=obra)


@main_bp.route("/sobre")
def sobre():
    return render_template("sobre.html")


@main_bp.route("/contato")
def contato():
    return render_template("contato.html")
