import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";


function App() {

  const [users, setUsers] = useState([])
  const [events, setEvents] = useState([])
  const [savedEvents, setSavedEvents] = useState([])
  const [signUps, setSignUps] = useState([])

  useEffect(getUsers, [])
  useEffect(getEvents, [])
  useEffect(getSavedEvents, [])
  useEffect(getSignUps, [])


  function getUsers(){
    fetch("/users")
    .then(response => response.json())
    .then(usersData => setUsers(usersData))

  }

  function postUsers(newUser){
    fetch("/users", {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
      },
      body: JSON.stringify(newUser)
  })
  .then(response => {
      if(response.ok){
          response.json().then(newUserData => setUsers([...users, newUserData]))
      }
  })
}


  function getEvents(){
    fetch("/events")
    .then(response => response.json())
    .then(eventsData => setEvents(eventsData))
  }

  function postEvents(newEvent){
    fetch("/events", {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
      },
      body: JSON.stringify(newEvent)
  })
  .then(response => {
      if(response.ok){
          response.json().then(newEventData => setEvents([...events, newEventData]))
      }
  })
  }

  function deleteEvents(id){
    fetch(`/events/${id}`, {
      method: "DELETE"
  })
  .then(response => {
      if(response.ok){
          const updatedEventsArray = events.filter(events => {
              return events.id !== id
          })
          setEvents(updatedEventsArray)
      }
  })
  }

  function getSavedEvents(){
    fetch("/savedevents")
    .then(response => response.json())
    .then(savedEventsData => setSavedEvents(savedEventsData))
  }

  function postSavedEvents(newSavedEvents){
    fetch("/savedevents", {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
      },
      body: JSON.stringify(newSavedEvents)
  })
  .then(response => {
      if(response.ok){
          response.json().then(newSavedEventsData => setSavedEvents([...savedEvents, newSavedEventsData]))
      }
  })
  }

  function deleteSavedEvents(id){
    fetch(`/savedevents/${id}`, {
      method: "DELETE"
  })
  .then(response => {
      if(response.ok){
          const updatedSavedEventsArray = savedEvents.filter(savedEvents => {
              return savedEvents.id !== id
          })
          setSavedEvents(updatedSavedEventsArray)
      }
  })
  }
  function getSignUps(){
    fetch("/signups")
    .then(response => response.json())
    .then(signUpsData => setSignUps(signUpsData))
  }

  function postSignUps(newSignups){
    fetch("/signups", {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
      },
      body: JSON.stringify(newSignups)
  })
  .then(response => {
      if(response.ok){
          response.json().then(newSignUpsData => setSignUps([...signUps, newSignUpsData]))
      }
  })
  }

  function deleteSignUps(id){
    fetch(`/signups/${id}`, {
      method: "DELETE"
  })
  .then(response => {
      if(response.ok){
          const updatedSignUpsArray = signUps.filter(signUps => {
              return signUps.id !== id
          })
          setSignUps(updatedSignUpsArray)
      }
  })
  }

  function patchSignUps(id, signUpsDataForUpdate){
    fetch(`/signups/${id}`, {
      method: "PATCH",
      headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
      },
      body: JSON.stringify(signUpsDataForUpdate)
  })
  .then(response => {
      if(response.ok){
          response.json().then(updatedSignUps => {
              const updatedSignUpsArray = signUps.map(signUps => {
                  if(signUps.id === updatedSignUps.id){
                      return updatedSignUps
                  }
                  else{
                      return signUps
                  }
              })
              setSignUps(updatedSignUpsArray)
          })
      }
  })
}

  


  return (
    <div className="bg-gray-900">
    <NavBar/>
    <Outlet context={{events: events, postEvents: postEvents, deleteEvents: deleteEvents, users: users, postUsers: postUsers, postSavedEvents : postSavedEvents, savedEvents: savedEvents, deleteSavedEvents: deleteSavedEvents, signUps: signUps, postSignUps: postSignUps, deleteSignUps: deleteSignUps, patchSignUps: patchSignUps}}/>
    </div>
  )}

export default App;
