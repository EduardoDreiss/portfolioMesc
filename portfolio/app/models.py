from datetime import datetime

from flask_login import UserMixin

from app import db, login_manager
from app.utils import slugify


class User(UserMixin, db.Model):
    __tablename__ = "users"

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password_hash = db.Column(db.String(256), nullable=False)
    is_admin = db.Column(db.Boolean, default=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)


class Obra(db.Model):
    __tablename__ = "obras"

    id = db.Column(db.Integer, primary_key=True)
    titulo = db.Column(db.String(200), nullable=False)
    slug = db.Column(db.String(220), unique=True, nullable=False, index=True)
    descricao = db.Column(db.Text)
    imagem = db.Column(db.String(255))
    categoria = db.Column(db.String(100))
    destaque = db.Column(db.Boolean, default=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    def assign_slug(self) -> None:
        base = slugify(self.titulo)
        candidate = base
        counter = 2

        while True:
            query = Obra.query.filter_by(slug=candidate)
            if self.id is not None:
                query = query.filter(Obra.id != self.id)
            if not query.first():
                self.slug = candidate
                return
            candidate = f"{base}-{counter}"
            counter += 1


@login_manager.user_loader
def load_user(user_id):
    return db.session.get(User, int(user_id))
