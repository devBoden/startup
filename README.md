# Freetime

## Elevator Pitch

Have you ever wanted to get a group of friends together, and could not find a single second all of you were free?  Introducing Freetime, a new social or workplace calendar that allows users to create schedules that can be shared and merged with others to find new spaces of time to create the future.

## Design
![Alt text](<schedule diagrams.png>)

This would be the interface for the scheduling calendar, showing 3 friends/coworkers compiling their schedules together to find the free time.

![Alt text](<user profile pages.png>)

This shows the user profile aspect of Freetime.

## Key Features

- Profile Customization
- Drag and drop schedule building
- The ability to list skills and occupations
- Friending system
- Joint schedule building that easily signifies the areas where there is free time
- Ability to search for users with particular skills

## Techologies

### HTML
- Using HTML to create the pages:
    - The schedule for the user
    - The profile page for the user
    - The explore database, that allows users to find either friends or people with certain skill sets

### CSS
- Using CSS to use customize fonts, resize, and recolor
- Add navigation elements
- Space the content out

### Javascript
- Using Javascript to add functionality to the buttons on the website
- Program the drag and drop schedule system

### Login
- Allows users to create and login to an account
- Use MongoDB to store the credentials of the user
- Restricts functionality of the website until logged in, can't make a schedule until logged in.
### Database
- Using MonboDB to store the user data of the users
- Stores the info of schedules, and the profile info

### Websocket
- Sends the data back and forth from user to server