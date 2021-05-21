# Lets-Get-Fit-Frontend
Lets Get Fit is an app where people can come together and share their fitness journeys.

## MVP
Full CRUD functionality.<br/>
Achievements - Pre-set goals for the user to complete.<br/>
MacroNutrition Summary Page<br/>
Workout Summary Page<br/>
Looking at Specific workouts<br/>
Adding, updating, and deleting workouts/nutrition info.<br/>
Express and React<br/>

## Stretch
Users can share workouts, diet logs, and plan exercise routines.<br/>
Mobile CSS<br/>
Recommended workouts<br/>

## Routes
app.post(‘user/‘, userController.signup)

app.post(‘user/login’, userController.login)

app.get(‘user/verify’, userController.verify) (user id in auth header)

app.get(‘workouts/‘, workoutController.getAll) (user id in auth header)

app.post('workouts/', workoutController.createWorkout) (user id in auth header)

app.put('nutrition/:id', nutritionController.editDay) (user id in auth header)

app.post(‘nutrition/‘, nutritionController.saveDay) (user id in auth header, date in body)

app.get(‘nutrition/’, nutritionController.getDay) (user id in auth header, date in body)

app.get('achievements/compelete', achievementsController.getCompleted) (user id in auth header)

app.get('achievements/', achievementsController.getAll) 

app.post('achievements/', achievementsController.markComplete) (user id in auth header)

## ERB/WIREFRAMES
<img width="586" alt="Screen Shot 2021-05-21 at 1 22 40 AM" src="https://user-images.githubusercontent.com/79672776/119086282-431acd00-b9d3-11eb-8ed6-acd884e0a020.png">
Workout Summary Page
![Screen Shot 2021-05-21 at 1 14 26 AM](https://user-images.githubusercontent.com/79672776/119088055-08fefa80-b9d6-11eb-9124-07ad81768dab.jpeg)


Save New Workout
![Screen Shot 2021-05-21 at 1 16 16 AM](https://user-images.githubusercontent.com/79672776/119087879-cb9a6d00-b9d5-11eb-83b0-8535f9996503.jpeg)

Logged In User Summary
![Screen Shot 2021-05-21 at 1 16 57 AM](https://user-images.githubusercontent.com/79672776/119087894-cfc68a80-b9d5-11eb-8e1c-6926e909fc71.jpeg)

User Nutrition
![Screen Shot 2021-05-21 at 1 16 57 AM](https://user-images.githubusercontent.com/79672776/119087917-d6ed9880-b9d5-11eb-8ca1-bea50b18960a.jpeg)

Cardio Summary
![Screen Shot 2021-05-21 at 1 21 33 AM](https://user-images.githubusercontent.com/79672776/119087949-dead3d00-b9d5-11eb-8741-a882cce74996.jpeg)

Achievements
![Screen Shot 2021-05-21 at 1 23 06 AM](https://user-images.githubusercontent.com/79672776/119087961-e371f100-b9d5-11eb-9c7d-1a27ec878d1b.jpeg)

Strength Summary
![Screen Shot 2021-05-21 at 1 24 10 AM](https://user-images.githubusercontent.com/79672776/119087970-e79e0e80-b9d5-11eb-8baf-da47bf3d7d69.jpeg)

