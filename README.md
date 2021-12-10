# WANDERMORE <!-- omit in toc -->

- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Architecture](#component-architecture)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

**Wandermore** is a place for wanderers of the world to gather together and document the beautiful places they've traveled, and where they're headed next.

<br>

## MVP

The **Wandermore** MVP goals include a clean-design, user-friendly travel site where users can document places they have been, want to go, and upcoming trips once they are logged in.

<br>

### Goals

- Functioning backend built with Ruby on Rails (2 tables minimum: user, places)
- Full CRUD frontend built with React
- User can create an account.
- User can see/do the following on their profile:
  -  view all places (in categories of places traveled, upcoming travels, and places the user wants to travel to)
  -  add places
  -  edit places
  -  delete places
- CSS styling to match wireframe

<br>

### Libraries and Dependencies

> Use this section to list all supporting libraries and dependencies, and their role in the project. Below is an example - this needs to be replaced!

|     Library          | Description                                |
| :------------------: | :----------------------------------------- |
|      React           | Frontend Javascript language. |
|   React Router Dom   | Routing for React |
| Ruby on Rails        | Web-application framework for a databse written in rails using MVC pattern |
|     Axios            | Allows full CRUD |
|  Bcrypt              | Password handling - algorithm to hash/secure a password |
|  CORS                | Cross origin resource sharing in Ruby on Rails |

<br>

### Client (Front End)

#### Wireframes

View complete wireframe and branding [here](https://www.figma.com/file/k1FAcMeLKJcpqp8LjBIGgU/wandermore?node-id=0%3A1).

![Screen Shot 2021-12-09 at 9 57 47 PM](https://user-images.githubusercontent.com/90531123/145519699-8bfc38d7-d418-491b-81ec-d743e5a6ec99.png)

<img width="300" alt="Screen Shot 2021-12-09 at 9 15 14 PM" src="https://user-images.githubusercontent.com/90531123/145516353-38030bd2-b99d-4218-bb71-b8a2bfd55b42.png">

#### Component Tree

![Screen Shot 2021-12-09 at 10 18 57 PM](https://user-images.githubusercontent.com/90531123/145521457-dcbf78f7-be17-4c6d-ba24-8a221dda518e.png)

#### Component Architecture

``` 
src
|__ assets/
      |__ css
          |__ Layout.css
          |__ App.css
          |__ Index.css
          |__ Home.css
          |__ SignIn.css
          |__ SignUp.css
          |__ About.css
          |__ UserProfile.css
          |__ PlaceDetail.css
          |__ PlaceAdd.css
          |__ PlaceEdit.css
      |__ fonts
      |__ graphics
      |__ images
|__ components/
      |__ Layout.jsx
      |__ Footer.jsx
      |__ Place.jsx
|__ containers/
      |__ MainContainer.jsx
|__ screens/
      |__ Home.jsx
      |__ SignIn.jsx
      |__ SignUp.jsx
      |__ About.jsx
      |__ UserProfile.jsx
      |__ PlaceDetail.jsx
      |__ PlaceAdd.jsx
      |__ PlaceEdit.jsx
|__ services/
      |__ apiConfig.jsx
      |__ auth.jsx
|__ App.jsx
|__ Index.jsx
```

#### Time Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Add Contact Form    |    L     |     3 hrs      |     2 hrs     |    3 hrs    |
| Create CRUD Actions |    H     |     3 hrs      |     1 hrs     |     TBD     |
| TOTAL               |          |     6 hrs      |     3 hrs     |     TBD     |

> _Why is this necessary? Time frames are key to the development cycle. You have limited time to code your app, and your estimates can then be used to evaluate possibilities of your MVP and post-MVP based on time needed. It's best you assume an additional hour for each component, as well as a few hours added to the total time, to play it safe._

<br>

### Server (Back End)

#### ERD Model

> Use this section to display an image of a computer generated ERD model. You can use draw.io, Lucidchart or another ERD tool.

[ERD Sample](https://drive.google.com/file/d/1kLyQTZqfcA4jjKWQexfEkG2UspyclK8Q/view)
<br>

***

## Post-MVP

- Incorporate color-coordinated pins to the map for an additional visual representation of places
- Add the ability to add other users as friends and view their profile/places
- Add additional details to places (cities, notes, places stayed, photos, recommendations)

***

## Code Showcase

> This section will include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> This section will include a list of major issues encountered and their resolution.
