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
  - view all places (in categories of places traveled, upcoming travels, and places the user wants to travel to)
  - add places
  - edit places
  - delete places
- CSS styling to match wireframe

<br>

### Libraries and Dependencies

|     Library      | Description                                                                |
| :--------------: | :------------------------------------------------------------------------- |
|      React       | Frontend Javascript language.                                              |
| React Router Dom | Routing for React                                                          |
|  Ruby on Rails   | Web-application framework for a databse written in rails using MVC pattern |
|      Axios       | Allows full CRUD                                                           |
|      Bcrypt      | Password handling - algorithm to hash/secure a password                    |
|       CORS       | Cross origin resource sharing in Ruby on Rails                             |

<br>

### Client (Front End)

#### Wireframes

View complete wireframe and branding [here](https://www.figma.com/file/k1FAcMeLKJcpqp8LjBIGgU/wandermore?node-id=0%3A1).

<img width="1179" alt="Screen Shot 2021-12-15 at 9 32 22 PM" src="https://user-images.githubusercontent.com/90531123/146308649-51d4dbb2-f020-4eb1-b1c4-398614840131.png">

<img width="300" alt="Screen Shot 2021-12-09 at 9 15 14 PM" src="https://user-images.githubusercontent.com/90531123/145516353-38030bd2-b99d-4218-bb71-b8a2bfd55b42.png">

#### Component Tree

<img width="966" alt="Screen Shot 2021-12-15 at 9 28 40 PM" src="https://user-images.githubusercontent.com/90531123/146308349-0ddcf47a-2827-4cda-97ad-8edebfe5afb0.png">

#### Component Architecture

```
src
|__ assets/
      |__ css
          |__ About.css
          |__ Footer.css
          |__ Home.css
          |__ Layout.css
          |__ PlaceAdd.css
          |__ PlaceDetail.css
          |__ PlaceEdit.css
          |__ Places.css
          |__ SignIn.css
          |__ SignUp.css
      |__ graphics
|__ components/
      |__ Footer.jsx
      |__ Layout.jsx
|__ containers/
      |__ MainContainer.jsx
|__ screens/
      |__ About.jsx
      |__ Home.jsx
      |__ PlaceAdd.jsx
      |__ PlaceDetail.jsx
      |__ PlaceEdit.jsx
      |__ Places.jsx
      |__ SignIn.jsx
      |__ SignUp.jsx
|__ services/
      |__ apiConfig.jsx
      |__ auth.jsx
      |__ place.jsx
|__ utils/
      |__ countries.json
      |__ lists.json
      |__ months.json
      |__ years.json
|__ App.css
|__ App.js
|__ Index.css
|__ Index.js
```

#### Time Estimates

| Task                                     | Priority | Estimated Time | Time Invested | Actual Time |
| ---------------------------------------- | :------: | :------------: | :-----------: | :---------: |
| Planning                                 |    H     |     6 hrs      |     6 hrs     |    6 hrs    |
| Backend set up / Auth                    |    H     |     7 hrs      |     4 hrs     |    4 hrs    |
| Create Database & Seed Data              |    H     |     3 hrs      |    0.5 hrs    |   0.5 hrs   |
| Backend Routes & Testing                 |    H     |     1 hrs      |    0.5 hrs    |   0.5 hrs   |
| Frontend Auth                            |    H     |     4 hrs      |     3 hrs     |    3 hrs    |
| Frontend Routes & Testing                |    H     |     5 hrs      |     3 hrs     |    3 hrs    |
| Full CRUD on Places                      |    H     |     7 hrs      |    10 hrs     |   10 hrs    |
| Layout                                   |    H     |     2 hrs      |     2 hrs     |    2 hrs    |
| Create Footer                            |    H     |     2 hrs      |     2 hrs     |    2 hrs    |
| Create All Screens                       |    H     |     12 hrs     |    12 hrs     |   12 hrs    |
| Component Updates + Add'l Frontend Logic |    H     |     4 hrs      |     4 hrs     |    4 hrs    |
| CSS Styling                              |    M     |     10 hrs     |    12 hrs     |   12 hrs    |
| Post MVP goals                           |    L     |     6 hrs      |     1 hrs     |    1 hrs    |
| TOTAL                                    |          |     65 hrs     |    60 hrs     |   60 hrs    |

<br>

### Server (Back End)

#### ERD Model

<img width="490" alt="Screen Shot 2021-12-09 at 11 32 10 PM" src="https://user-images.githubusercontent.com/90531123/145528313-c90f54bb-556d-424f-af67-67d23eb00c14.png">

<br>

---

## Post-MVP

- Incorporate color-coordinated pins to the map for an additional visual representation of places
- Add the ability to add other users as friends and view their profile/places
- Add additional details to places (cities, notes, places stayed, photos, recommendations)

---

## Code Showcase

**Footer:** Ternary operator in layout to render footer conditionally (only on about and places pages) + ternary operator to change footer button (sign in / log out) based on whether a user is logged in.

```
    <div>
      {children}
      {location.pathname === '/about' || location.pathname === '/places' ?
        <Footer
          currentUser={currentUser}
          places={places}
          handleSignOut={handleSignOut}
        />
        : null
      }
    </div>
  )
}
```

```
<footer>
    .
    .
    <div className='footer-right'>
      {currentUser?.id === places.user_id ?
        <Link to='/signin'><button>sign in</button></Link>
        : <Link><button onClick={handleSignOut}>sign out</button></Link>
      }
    </div>
  </footer>
```

## Code Issues & Resolutions

**Place Edit:** Needed to prefill data with current state in dropdowns on the edit page so that the dropdowns defaulted the user's current data for that place. I assigned the default value a name of state, passed in a disabled value named state as the first option, then passed in state of that data piece (ie {formData.country}).

```
    <label>Country:</label>
      <select name='country' onChange={handleChange} defaultValue='state'>
        <option disabled value='state'>
          {formData.country}
        </option>
        {countries.map((country) => (
          <option value={country.name} key={country.id} required>
          {country.name}
          </option>
        ))}
      </select>
```
