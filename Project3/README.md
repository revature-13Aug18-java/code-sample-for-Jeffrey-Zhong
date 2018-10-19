
<h5> Link to GitHub User service repo </h5> https://github.com/revaturelabs/rideshare-user-service
<h5> Link to GitHub Matching service repo </h5> https://github.com/revaturelabs/rideshare-matching-service
<h5> Link to GitHub Map service repo </h5> https://github.com/revaturelabs/rideshare-map-service
<h5> Link to GitHub Map service repo </h5> https://github.com/revaturelabs/rideshare-client



<h3> Project 3 </h3>
<h4> RideForce </h4>
<p>
Ride Force is a ride sharing app that allows Revature associates with no transportation to work, find drivers within the area. This app is meant to solve a company wide problem that many associates to not have vehicles or some sort of connection to people with vehicles. This is due to associates flying in from across the country. This app is not meant to register rides but to but the passenger and driver in contact through other 3rd party applications. The app consumes google maps API to determine the location of each driver. The app will then rank each driver based on a number of factors such as, distance, batch start time, batch end date and display that to the user. An associate is able to choose whether or not they have a car and can opt in or out anytime when being a driver.
  </p>
<h4> Business Rules </h4>
<ul> 
   <li> Users can only create an account with a key from a trainer </li>
   <li> Users can login to an account </li>
   <li> User can register themselves as either a driver or a passenger </li>
   <li> Trainers can generate account creation keys </li>
   <li> Drivers can register or update their car information</li>
   <li> Drivers can update their contact information</li>
   <li> Drivers can swtich to active or inactive</li>
   <li> Passengers can see drivers in their area </li>
   <li> Passengers can like or dislike drivers </li>
   <li> Passengers can view driver's car and contact info </li>
   <li> The app must be usable on mobile </li>
  </ul>
  <h4> Tech Stack </h4>
  <ul>  
   <li> Angular Front-end hosted on AWS S3 Bucket</li>
   <li> Java Serverside using Spring Boot, MVC, and Data. Hosted on EC2 Instance   </li>
   <li> Hosted using Apache Tomcat</li>
   <li> Java Maven project</li>
   <li> AWS hosted Oracle database  </li>
   <li> Eureka & Zuul  </li>
   <li> JUnit & Karma  </li>
  </ul>
   <h4> PipeLine </h4>
  <ul>  
   <li> GitHub</li>
   <li> Jenkin</li>
   <li> SonarQube  </li>
   <li> Maven</li>
   <li> Docker</li>
  </ul>
  <h4> Contribution </h4>
  <p>
  The project was a batch-wide project consisting of a 3 different teams: DevOps, Front-End, and Microservice. The microservice team split into three more sub teams: Users, Matching, and maps. With only 1 week for the 1st sprint, we decided to prioritize roles based on our strengths. I worked on the DevOps team specifically on the RDS. My role was to create a relational database for each of the microservice teams. My role also required me to make the data within the database consistent with the fields on the front-end and user service.
  </p>
  
  ![alt text](https://github.com/revature-13Aug18-java/code-samples-for-Jeffrey-Zhong/blob/master/Project3/Database%20ERD/JPmorganDatabasepic.PNG)

