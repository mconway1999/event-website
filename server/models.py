from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy.orm import validates

from config import db

class User(db.Model, SerializerMixin):
    __tablename__ ='users'
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String, nullable=False)
    last_name = db.Column(db.String, nullable=False)
    type = db.Column(db.String, nullable = False)

    sign_ups = db.relationship('SignUp', back_populates = 'users')
    saved_events = db.relationship('SavedEvent', back_populates = 'users')

class Event(db.Model, SerializerMixin): 
    __tablename__ ='events'
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String, nullable = False)
    description = db.Column (db.String, nullable = False)
    location = db.Column (db.String, nullable = False)
    image = db.Column (db.String)

    sign_ups = db.relationship('SignUp', back_populates = 'events')
    saved_events = db.relationship('SavedEvent', back_populates = 'events')

class SignUp (db.Model, SerializerMixin):
    __tablename__ ='sign_ups'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    event_id = db.Column (db.Integer, db.ForeignKey('events.id'))

    events = db.relationship('Event', back_populates='sign_ups')
    users = db.relationship('User', back_populates='sign_ups')

class SavedEvent (db.Model, SerializerMixin):
    __tablename__ ='saved_events'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer,db.ForeignKey('users.id'))
    event_id = db.Column (db.Integer,db.ForeignKey('events.id'))

    events = db.relationship('Event', back_populates='saved_events')
    users = db.relationship('User', back_populates='saved_events')

