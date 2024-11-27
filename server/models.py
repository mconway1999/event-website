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

    sign_ups = db.relationship('SignUp', back_populates = 'user')
    saved_events = db.relationship('SavedEvent', back_populates = 'user')

    @validates('first_name', 'last_name')
    def validate_name(self, attr, value):
        if (not isinstance(value, str)):
            raise ValueError(f"{attr} must be a string")
        return value
    
    @validates('type')
    def validate_type(self, column, value):
        if type(value) == str and (value == 'customer' or value == 'admin'):
            return value
        else:
            raise ValueError


class Event(db.Model, SerializerMixin): 
    __tablename__ ='events'
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String, nullable = False)
    description = db.Column (db.String, nullable = False)
    location = db.Column (db.String, nullable = False)
    image = db.Column (db.String)

    sign_ups = db.relationship('SignUp', back_populates = 'event')
    saved_events = db.relationship('SavedEvent', back_populates = 'event')

    @validates('location')
    def validate_location(self, column, value):
        if type(value) == str and (value == 'Manhattan' or value == 'Brooklyn' or value == 'Bronx' or value == 'Staten Island' or value == 'Queens'):
            return value   
        else:
            raise ValueError

class SignUp (db.Model, SerializerMixin):
    __tablename__ ='sign_ups'
    id = db.Column(db.Integer, primary_key=True)
    attending_event = db.Column(db.String, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    event_id = db.Column (db.Integer, db.ForeignKey('events.id'))

    event = db.relationship('Event', back_populates='sign_ups')
    user = db.relationship('User', back_populates='sign_ups')

    @validates
    def validate_event_sign_up(self, column, value):
          if type(value) == str and (value == 'Yes' or value == 'Maybe' or value == 'No'):
            return value
          else:
            raise ValueError 

class SavedEvent (db.Model, SerializerMixin):
    __tablename__ ='saved_events'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer,db.ForeignKey('users.id'))
    event_id = db.Column (db.Integer,db.ForeignKey('events.id'))

    event = db.relationship('Event', back_populates='saved_events')
    user = db.relationship('User', back_populates='saved_events')

