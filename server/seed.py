#!/usr/bin/env python3

# Standard library imports
from random import randint, choice as rc

# Remote library imports
from faker import Faker

# Local imports
from app import app
from models import db
from models import User,Event,SavedEvent,SignUp

user1= User(id=1,first_name='Stephan',last_name='Rothstein',type='customer')
user2= User(id=2,first_name='Dylan', last_name='Agosto',type='customer')
user3= User(id=3,first_name='Jessica', last_name='Smith',type='customer')
user4= User(id=4,first_name='Daniel', last_name='Dean',type='customer')
user5= User(id=5,first_name='Alice', last_name='Luster',type='customer')
user6= User(id=6,first_name='Megan', last_name='Anne',type='customer')
user7= User(id=7,first_name='Matthew', last_name='John',type='customer')
user8= User(id=8,first_name='Jaster', last_name='Leon',type='customer')
user9= User(id=9,first_name='Jennifer', last_name='Coffee',type='customer')
user10= User(id=10,first_name='Lilly', last_name='Cummings',type='customer')
user11= User(id=11,first_name='Mark', last_name='Scott',type='customer')
user12= User(id=12,first_name='Kimberly', last_name='Rey',type='customer')
user13= User(id=13,first_name='Regina', last_name='Harris',type='customer')
user14= User(id=14,first_name='Julia', last_name='Jennings',type='customer')
user15= User(id=15,first_name='Henry', last_name='Burlington',type='customer')
user16= User(id=16,first_name='Sarah', last_name='Montgomery',type='customer')
user17= User(id=17,first_name='Rachel', last_name='Sommers',type='customer')
user18= User(id=18,first_name='Alexander', last_name='Ryans',type='customer')
user19= User(id=19,first_name='Ernesto', last_name='Cains',type='customer')
user20= User(id=20,first_name='Justin', last_name='Munster',type='customer')
user21= User(id=21,first_name='Harry', last_name='Peters',type='customer')
user22= User(id=22,first_name='Vanessa', last_name='Santos',type='customer')
user23= User(id=23,first_name='Margo', last_name='Lyons',type='customer')
user24= User(id=24,first_name='Anthony', last_name='Freeman',type='customer')
user25= User(id=25,first_name='Lindsay', last_name='Grotto',type='customer')

event1= Event(id=1,title='Health Tech Startup Networking Rooftop Happy Hour',description='On Wednesday,  January 15, 2025 · 5:30 - 8pm EST, join us for a fun evening of networking with fellow health tech startup enthusiasts on a rooftop with drinks and good vibes! At 230 Fifth Rooftop Bar, 1150 Broadway New York, NY 10001',image='/images/HealthTechStartup.png',location='Manhattan')
event2= Event(id=2,title='Tech Networking New York',description='On Thursday, December 5 · 6 - 9pm EST, we are hosting an in-person event for participants from the Business industry . We look forward to seeing you at our event. At Whiskey Cellar NYC 77 East 7th Street New York, NY 10003',image='/images/TechNetworkingEventNYC.png',location='Manhattan')
event3= Event(id=3,title='TECHSPO',description='On May 16th and 17th, part of DigiMarCon East, TECHSPO New York is a two-day trade show and expo aimed at gathering the top developers, marketers, designers, and innovators to reveal the latest trends in the technology sector. At 60 Furman St, Brooklyn NY, 11201',image='/images/TECHSPO.png',location='Brooklyn')
event4= Event(id=4,title='Tech Up For Women Conference NYC',description='On Tuesday, May 6, a one day conference event to advance through technology knowledge. The program offers a fast moving event to embrace technology. At 639 W 46th St, New York, NY 10036 First Floor Event Hall New York, NY 10001',image='/images/TechUpForWomen.png',location='Manhattan')
event5= Event(id=5,title='Flushing Tech Meetup - Hackathon at TIQC',description='On December 14th and December 28th, get ready to dive into the world of innovation and collaboration at the Tech Incubator at Queens College, where the Flushing Tech Meetup is hosting an electrifying hackathon just for you. At 6530 Kissena Blvd, Flushing, NY 11367',image='/images/FlushingTechMeetup.png',location='Queens')
event6= Event(id=6,title='Bronx Ed Tech Showcase',description='Please join us for the 11th Annual Bronx Ed Tech Showcase, Friday May 3rd at Hostos Community College! The theme of this year is: Let’s Talk: Rethinking Authentic Learning & Assessment in the Age of AI. At 500 Grand Concourse, Bronx, NY, 10451',image='/images/BronxTechEdShowcase.png',location='Bronx')
event7= Event(id=7,title='Tech Talk Time',description='On Dec 11 2024 11:00am - 11:30am, join us for “Tech Talk Time,” where you can ask your technology-related questions and get assistance. Don’t miss out on this opportunity to enhance your tech skills!, at 2800 Victory Blvd Staten Island, NY 10314',image='/images/TechTalkTime.png',location='Staten Island')
event8= Event(id=8,title='',description='',image='',location='')
event9= Event(id=9,title='',description='',image='',location='')
event10= Event(id=10,title='',description='',image='',location='')
event11= Event(id=11,title='',description='',image='',location='')
event12= Event(id=12,title='',description='',image='',location='')
event13= Event(id=13,title='',description='',image='',location='')
event14= Event(id=14,title='',description='',image='',location='')
event15= Event(id=15,title='',description='',image='',location='')



if __name__ == '__main__':
    fake = Faker()
    with app.app_context():
        print("Starting seed...")
        # Seed code goes here!
