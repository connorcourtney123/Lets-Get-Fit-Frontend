# Lets-Get-Fit-Frontend
Lets Get Fit is an app where people can come together and share their fitness journeys.

## MVP
Full CRUD functionality.
Achievements - Pre-set goals for the user to complete.
MacroNutrition Summary Page
Workout Summary Page
Looking at Specific workouts
Adding, updating, and deleting workouts/nutrition info.
Express and React

## Stretch
Users can share workouts, diet logs, and plan exercise routines.
Mobile CSS
Recommended workouts

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
![image](https://user-images.githubusercontent.com/79672776/119086307-4dd56200-b9d3-11eb-8325-2fe34557bb6e.jpeg)
Save New Workout
![image](https://user-images.githubusercontent.com/79672776/119086354-5d54ab00-b9d3-11eb-8eeb-73a17592a6b2.jpeg)
Logged In User Summary
![image](https://user-images.githubusercontent.com/79672776/119086404-6fcee480-b9d3-11eb-8787-1fc1f1a8a4f8.jpeg)
User Nutrition
![image](https://user-images.githubusercontent.com/79672776/119086447-8117f100-b9d3-11eb-84d4-74c8bf9b5740.jpeg)
Cardio Summary
![image](https://user-images.githubusercontent.com/79672776/119086490-89702c00-b9d3-11eb-966e-6472af3dd557.jpeg)
Achievements
![image](https://user-images.githubusercontent.com/79672776/119086520-92f99400-b9d3-11eb-9a17-f4b1089f8104.jpeg)
Strength Summary
![image](https://user-images.githubusercontent.com/79672776/119086545-9ab93880-b9d3-11eb-89c5-ceba0682fd9c.jpeg)
