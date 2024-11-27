#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import Flask, make_response
from flask import request
from flask_restful import Resource
from flask_migrate import Migrate
from flask_restful import Api
from flask_cors import CORS

# Local imports
from config import app, db, api
# Add your model imports
from models import User, SavedEvent, SignUp, Event

# Views go here!
class AllUsers(Resource):
    def get(self):
        users = User.query.all()
        response_body = [user.to_dict(only=('first_name','last_name','type')) for user in users]
        return make_response(response_body, 200)
    def post (self):
        try:
            new_user = User(first_name=request.json.get('first_name'), last_name=request.json.get('last_name'), type = request.json.get('type'))
            db.session.add(new_user)
            db.session.commit()
            response_body = new_user.to_dict(only=('id', 'first_name', 'last_name', 'type'))
            return make_response(response_body, 201)
        except:
            response_body = {
                "error": "failed to add user!"
            }
            return make_response(response_body, 400)
api.add_resource(AllUsers, '/users')

class AllEvents(Resource):
    def get(self):
        events = Event.query.all()
        response_body = [event.to_dict(only=('id','image','title','description','location')) for event in events]
        return make_response(response_body, 200)
    def post (self):
        try:
            new_event = Event(title=request.json.get('title'), image=request.json.get('image'), description = request.json.get('description'),location=request.json.get('location'))
            db.session.add(new_event)
            db.session.commit()
            response_body = new_event.to_dict(only=('id', 'description', 'image', 'title', 'location'))
            return make_response(response_body, 201)
        except:
            response_body = {
                "error": "reload page!"
            }
            return make_response(response_body, 400)
api.add_resource(AllEvents, '/events')

class EventsById(Resource):
    def delete(self,id):
        event = db.session.get(Event, id)

        if event:
            db.session.delete(event)
            db.session.commit()
            response_body = {}
            return make_response(response_body, 204)
        
        else:
            response_body = {
                'error': "Event Not Found"
            }
            return make_response(response_body, 404)
    def get(self,id):
        event = db.session.get(Event, id)

        if event:
            response_body = event.to_dict(only=('id','image','title','description','location'))
            return make_response (response_body, 200)

        else:
            response_body = {
                'error': "Event Not Found"
            }
            return make_response(response_body, 404)
    
api.add_resource(EventsById, '/events/<int:id>')

class AllSavedEvents(Resource):
    def get(self):
        saved_events = SavedEvent.query.all()
        response_body = [saved_event.to_dict(only=('user_id', 'event_id')) for saved_event in saved_events]
        return make_response(response_body, 200)
    def post(self):
        try:
            new_saved_event = SavedEvent(user_id=request.json.get('user_id'), event_id=request.json.get('event_id'))
            db.session.add(new_saved_event)
            db.session.commit()
            response_body = new_saved_event.to_dict(only=('id','user_id', 'event_id'))
            return make_response(response_body, 201)
        except:
            response_body = {
                "error": "Event cannot be added to favorites!"
            }
            return make_response(response_body, 400)
api.add_resource(AllSavedEvents, '/savedevents')

class SavedEventsById(Resource):
    def delete(self,id):
        saved_event = db.session.get(SavedEvent, id)
        if saved_event:
            db.session.delete(saved_event)
            db.session.commit()
            response_body = {}
            return make_response(response_body, 204)
        
        else:
            response_body = {
                'error': "Event Not Found"
            }
            return make_response(response_body, 404)
api.add_resource(SavedEventsById, '/savedevents/<int:id>')

class AllSignUps(Resource):
    def get(self):
        sign_ups = SignUp.query.all()
        response_body = [sign_up.to_dict(only=('user_id', 'event_id')) for sign_up in sign_ups]
        return make_response(response_body, 200)
    def post(self):
        try:
            new_sign_up = SignUp(name=request.json.get('user_id'), image=request.json.get('event_id'))
            db.session.add(new_sign_up)
            db.session.commit()
            response_body = new_sign_up.to_dict(only=('id', 'user_id', 'event_id'))
            return make_response(response_body, 201)
        except:
            response_body = {
                "error": "failed to sign up!"
            }
            return make_response(response_body, 400)
api.add_resource(AllSignUps, '/signups')

class SignUpsById(Resource):
    def delete(self,id):
        sign_up = db.session.get(SignUp, id)
        if sign_up:
            db.session.delete(sign_up)
            db.session.commit()
            response_body = {}
            return make_response(response_body, 204)
        
        else:
            response_body = {
                'error': "could not delete user from sign up"
            }
            return make_response(response_body, 404)
    def patch(self, id):
            sign_ups = db.session.get(SignUp, id)

            if sign_ups:
                try:
                    for attr in request.json:
                        setattr(sign_ups, attr, request.json[attr])
                    
                    db.session.commit()    
                    response_body = sign_ups.to_dict(only=('attending_event'))
                    return make_response(response_body, 200)
                
                except:
                    response_body = {
                        "error": "could not update!"
                    }
                    return make_response(response_body, 400)

            else:
                response_body = {
                    'error': "Sign up not found"
                }
                return make_response(response_body, 404)
api.add_resource(SignUpsById, '/signups/<int:id>')

@app.route('/')
def index():
    return '<h1>Project Server</h1>'


if __name__ == '__main__':
    app.run(port=5555, debug=True)

