<a href="http://www.chicken-in.com/"><img src="docs/part-b/images/chicken-in-logo.png"></a>

## <a href="http://www.chicken-in.com/">'CHICKEN IN' - RED ROCKS CHARCOAL CHICKEN</a>
### TIMESHEET AND OVERTIME TRACKING SYSTEM

Coder Academy Group Project 2018 by Drew, Maxi, Shun and Winter - **Team Painframe**

<br>
----
<br>

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

  - [**What is Chicken-In?** (X)](#what-is-chicken-in-x)
      - [**The Client Brief**](#the-client-brief)
      - [**The Problem**](#the-problem)
      - [**The Solution**](#the-solution)
- [**Application Design**](#application-design)
  - [**Concept Review** {x}](#concept-review-x)
  - [**2-Sided App Functionality**](#2-sided-app-functionality)
      - [**Employee Functionality**](#employee-functionality)
      - [**Manager Functionality**](#manager-functionality)
  - [**User Stories** (X)](#user-stories-x)
      - [Link to User Stories Trello Board](#link-to-user-stories-trello-board)
  - [**User Journey** {x}](#user-journey-x)
  - [**Wireframes and UX**](#wireframes-and-ux)
      - [**Guest Pages**](#guest-pages)
      - [**Employee View**](#employee-view)
      - [**Manager Reports**](#manager-reports)
      - [**Manager Approvals**](#manager-approvals)
      - [**Manager Team Management**](#manager-team-management)
      - [**Manager Settings**](#manager-settings)
      - [Link to Design Wireframes on Figma](#link-to-design-wireframes-on-figma)
  - [**Entity Relationship Diagram** {X}](#entity-relationship-diagram-x)
  - [**Planning and Implementation**](#planning-and-implementation)
      - [**Initial Timeline**](#initial-timeline)
      - [**Final Timeline**](#final-timeline)
- [**Project Management**](#project-management)
  - [**Client Meetings** {x}](#client-meetings-x)
  - [**Information Gathering and Competitior Analysis**](#information-gathering-and-competitior-analysis)
      - [**Competitor Analysis**](#competitor-analysis)
      - [**Branding Development**](#branding-development)
      - [**Color Development**](#color-development)
  - [**Project Scope**](#project-scope)
  - [**Project Timeline**](#project-timeline)
  - [**Team Management** (X)](#team-management-x)
  - [**Sequencial Self Assessment**](#sequencial-self-assessment)
  - [**Handover and Continued Support**](#handover-and-continued-support)
  - [**Ready for Deployement** {x}](#ready-for-deployement-x)
  - [**Post Project Review** {x}](#post-project-review-x)
  - [**Client Questionaire** {x}](#client-questionaire-x)
- [**Tools & Methodologies**](#tools--methodologies)
  - [**Project Management Tools**](#project-management-tools)
      - [**Figma**](#figma)
      - [**Trello**](#trello)
      - [**Git**](#git)
  - [**GitFlow**](#gitflow)
  - [**Agile First**](#agile-first)
      - [**Ideation**](#ideation)
      - [**Scrum**](#scrum)
      - [**Morning Standup**](#morning-standup)
  - [**Code review**](#code-review)
  - [**Future Development** {x}](#future-development-x)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<<<<<<< HEAD
## **What is Chicken-In?** (X)
=======

## **What is Chicken-In?** (X)

<a href="http://www.chicken-in.com/">**"Chicken-In"**</a> is a Timesheet and Shift Tracking web app designed specifically to our client's specifications. **Chicken-In** gets employees Logging-In, and Chicken-In!

#### **The Client Brief**
>>>>>>> aa631352cd091429dc69fed099b7f72016c8623d

Our client, Edwin Huang, owns and operates a number of charcoal chicken shops around Victoria, under the brand name **“Red Rocks Charcoal Chicken”**. He splits his time between working in the stores as a manager, and doing all the administrative/entrepreneurial work as the owner.

Red Rocks Charcoal Chicken is a small group of chicken shops all owned by the same owner. They aren't a franchise, more a small group owned by the same group. A lot of their regular employees are students, and as they aren't a very technologically invested company, they are still doing their time-sheets and overtime calculations manually. 

Red Rocks Charcoal Chicken have little to no branding (Besides the colours Red and White and various "chicken" mascot logos) to speak of, and almost no internet presence, so we did not have to worry about linking into an existing system. This was a challenge but also provided us with an opportunity to work on branding and style.

#### **The Problem**

One of our client's most significant challenges is keeping track of employee hours worked, calculating overtime and calculating how much he owes in wages to each employee. Currently, his employees record how many hours they’ve worked on a paper form, and he manually updates his excel spreadsheet at the end of the week. It’s time-consuming work, and his employees often make mistakes which means he has to follow up with each employee if there are any discrepancies in the shifts they've logged.

#### **The Solution**

We saw a lot of potential for being able to help him with his business needs- He suggested we could develop him a front-facing website that his clients could use to look up their locations and menus, but we felt that it wouldn't suit the scope of our project. In the end due to time and scope constraints, we decided with Edwin to work on a small app to take track of weekly hours worked by his staff, and calculate the number of overtime hours. 

Big considerations in this project are the differences in the ways in which different users will use the product. **Employees** will likely wish for a simple, quick, easy interaction with the software, *most likely on their mobile phones*. **Managers**, however, will want a lot more control, data display and interactivity with their end of the process. 

In both cases, the aim of this project will be to *help both the employees, and the managers, spend less time on the administrative chores of timesheets*. The mobile app for Employees, will need to be simple, responsive, and easy to use- and the app for the managers will need to do a lot of automatic calculation, organization and filtering, to make the managers' jobs easier and simpler. This is about giving them something they will *want* to use, not something that scares them away from the technology.

----
<br>


# **Application Design** 
<a href="./docs/part-b/images/project-divider2.png" target="_blank"><img src="./docs/part-b/images/project-divider2.png" width="800 " align="top"></a>

## **Concept Review** {x}

We had our first meeting with the client, Ed, on July 5, when we discussed the web-app's requirements. Ed gave us an overview of the functionality he would like the app to have, incuding having the ability to:

- Approve or reject shift submissions
- View a summary of all the shifts by week
- Automatically calculate the pay based on the hours worked and day worked
- Add or remove employees from the system

We also proposed some ideas, including developing for mobile first, and creating a user-friendly interface for his employees. We built our app based on the requirements discussed in this meeting since the concept didn't change much throughout the development process.



## **2-Sided App Functionality**

#### **Employee Functionality**

Addressing a key consideration from our client, we decided to implement a mobile-first approach for the employee facing app, where each user is able to log in, enter, track, and view the total standard/overtime/double time hours of each shift input. 

We found that this stripped back interface would best serve the needs of the client's team, who found their paper-based system inefficient and time-consuming.

In the **Employee** section, the app allows employees to log in, enter their shifts, and the app automatically calculates the standard and overtime hours based on the information. The app then sends this information back to our mongodb database for later retrieval by the **Manager** side of the app. The Employee is also able to see the status of their entered shifts, from *pending*, to *approved* and *rejected*. 

This has have 2 main views (pages):
- Add Shift
- Employee Settings (Update password, etc)

#### **Manager Functionality**

On successful manager login, the user is redirected to the manager dashboard, where they have access to several core functions of the app.

In the **Manager** section, Ed or his managers, can add/remove employees from the system and review the submissions before *approving* them. The dashboard will also include an overview of past wages paid, which he filters by various fields (dates, locations, employee, etc).

This section has 5 main views (pages):
- Reporting / Filtering past shifts
- Data Visualization
- Review/Approval
- Team Management
- Business Settings (ie overtime rates, store locations etc)

After our initial meeting with the client, our team decided that we could not integrate mobile-first design for the manager dashboard without sacrificing the ability to display and easily read shift data. As such, the manager dashboard focuses on desktop functionality, with mobile-driven added in by converting all shifts to "cards". This is a difficult way to use the app, but is still possible.

<br>

## **User Stories**

### User Profiles
We focussed on providing a number of basic user profiles based on the types of users we are likely to encounter. We were informed there are a number of students and graduates who are employed in the shops, and the managers vary in age, the youngest being 24. From this, we created some basic profiles, and decided to focus on how the app may be used rather than fleshing out too many details about the characters.

<img src="./docs/part-b/images/user_stories/User_Profiles.png" width="250" align="top">

### User Stories(Employee)
Employee user stories helped us to really understand that the employee will be looking for a fast, quick, easy option. Nobody likes waiting around after their shift to fill in paperwork, and nobody wants many details stored on our service. Quick login, with a quick entry of shifts, and that's that. They're likely to be on mobile, so this will be a mobile first approach.

<img src="./docs/part-b/images/user_stories/Employee_User_Story_1.png" width="250" align="top">

<img src="./docs/part-b/images/user_stories/Employee_User_Story_2.png" width="250" align="top">

<img src="./docs/part-b/images/user_stories/Employee_User_Story_3.png" width="250" align="top">

### User Stories(Manager)
This was where we realised the bulk of our app's features would take place. The main "employer" section requires us to make multiple pages for administration as well as information the employer can get out of the app. In the future, we'd love to add exporting/ integration into business management software, but for now we decided to focus on a "dashboard", web version first.

<img src="./docs/part-b/images/user_stories/Employer_User_Story_1.png" width="250" align="top">

<img src="./docs/part-b/images/user_stories/Employer_User_Story_2.png" width="250" align="top">

<img src="./docs/part-b/images/user_stories/Employer_User_Story_3.png" width="250" align="top">

#### Link to User Stories Trello Board 
You can find the full list of our insights and user stories <a href="https://trello.com/b/1kl5tgnk">HERE</a>!

<br>

## **Wireframes and UX**

To create our intial wireframe we used the insights gained through our user stories to rapidly prototype our apps features and general design. From there, we moved on to more specific design wireframes, which can be seen below:

<br>


#### **Guest Pages**

We decided to implement a mobile-first design for our guest and employee login pages as they would be the most frequent users of the Chicken-in Web app. The single page design allows the users to rapidly digest the purpose of the app with a summary of its full functionality in the about section.

<a href="./docs/part-b/images/guest-loginPage.png" target="_blank"><img src="./docs/part-b/images/guest-loginPage.png" width="800"></a>

<br>

#### **Employee View**

Iterating on the single page design, Red Rocks employees are redirected to a lightweight rostering app with the immediate ability to add and review past/pending/rejected shifts.

<a href="./docs/part-b/images/employee-pages.png" target="_blank"><img src="./docs/part-b/images/employee-pages.png" width="800"></a>

<br>

#### **Manager Reports**

On this page, the manager is given an overview of the weekly shifts that have been approved or are pending approval. A stretch goal is to integrate a "print report" function that produces a print ready pdf for physical documentation. An additional consideration is to include data visualisation within this dashboard further support the reporting functionality.

<a href="./docs/part-b/images/manager-reports.png" target="_blank"><img src="./docs/part-b/images/manager-reports.png" width="800"></a>

<br>

#### **Manager Approvals**

On this page, managers have the ability to view all pending shifts input from employees and approve/reject them. Stretch goals are to include a comment popup when rejecting a shift to give further clarification to an employee as to why the shift has been denied.

<a href="./docs/part-b/images/manager-approvals.png" target="_blank"><img src="./docs/part-b/images/manager-approvals.png" width="800"></a>

<br>

#### **Manager Team Management**

We decided that a full-scale HR app that stored and protected large amounts of employee data was not necessary for our client scale. Designed for ease of use, we kept the interface lean, with the ability to quickly edit, remove (archive), and add new employees within one view.

<a href="./docs/part-b/images/manager-teamManagement-newEmp.png" target="_blank"><img src="./docs/part-b/images/manager-teamManagement-newEmp.png" width="800"></a>

<br>

#### **Manager Settings**

Rather than hard code the values for overtime and double time, we decided to give our client the option to change the multiplier according to the current award rate in hospitality, as this is prone to change.


<a href="./docs/part-b/images/manager-settings.png" target="_blank"><img src="./docs/part-b/images/manager-settings.png" width="800"></a>

<br>

#### Link to Design Wireframes on Figma
You can find our Design Wireframes on Figma <a href="https://www.figma.com/file/E6dEYafb0SWYjyU57uw4HRga/Chicken-in-Design">HERE</a> 
<br>

## **Entity Relationship Diagram** {X}

<< Need: ERD {X} >>

<a href="./docs/part-b/images/architecture.jpg" target="_blank"><img src="./docs/part-b/images/architecture.jpg" width="800 " align="top"></a>

<br>

## **Planning and Implementation**

To ensure we stayed on track, our team implemented a series of system, from agile methodologies to project management apps, to ensure we kept to our project timeline. 

Initial Projections had the core planning stages to be completed within the first week and second week would be attributed to the brunt of the codebase.

In conjunction with Trello, we also utilised timeline app create by one of our own <a href="https://github.com/maxitron93/">team</a> for our initial build. Below you can see the main legs for our stages of development.

<br>

#### **Initial Timeline**

<a href="./docs/part-b/images/initial-timeline.png" target="_blank"><img src="./docs/part-b/images/initial-timeline.png" width="800"></a>

#### **Final Timeline**

<a href="./docs/part-b/images/final-timeline.png" target="_blank"><img src="./docs/part-b/images/final-timeline.png" width="800"></a>

 
----
<br> 

# **Project Management**
<a href="./docs/part-b/images/project-divider1.png" target="_blank"><img src="./docs/part-b/images/project-divider1.png" width="800 " align="top"></a>

## **Client Meetings** {x}

Record interactions with your client in a diary format  {x}

We had five formal mettings with our client:

1. Thursday, 5th July: This was our first formal meeting with Ed. We met to discuss the web-app's requirements, including core functionality and styling requirements. Ed gave us an overview of how he wanted the app to work, including having the ability to:
- Approve or reject shift submissions
- View a summary of all the shifts by week
- Automatically calculate the pay based on the hours worked and day worked
- Add or remove employees from the system

  We also proposed some ideas, including developing for mobile first, and creating a user-friendly interface for his employees. We went back-and-forth discussing these requirements for about an hour. At that point, we decided we had enough information to develop a basic wireframe so we ended the metting and arranged to meet early next week to discuss our draft wireframe.

2. Tuesday 10th July: We met for approximately 30 minutes to discuss the draft wireframe that we had put together. The wireframe included all the core functionality that we discussed the previous week, but did not have all the styling completed. After some discussion, Ed was happy with the functionality we proposed and didn't ask for any major changes. We ended the meeting and arranged to meet again after the wireframes were fully styled.

3. Friday, 13th July: We met for about 20 minutes to discuss the fully styled wireframes. Ed didn't have any preference for the styling or branding, so this was his first time seeing what we had in mind for styling. He liked the logo and color scheme so didn't propose any major styling changes. Now that he could visualize the final app, he was quite excited about it.

4. Friday, 20th July: We met for an hour to show Ed the progress we had made. We had built the functionlaity for most of the pages, but a lot of the styling work still needed to be done. Ed was a little concerend that there wasn't enough time to finish the app, so he proposed to reduce some of the functionality. We tried to assure him that eventhough it looked rough, a lot of the functionality had already been done and that we would have enough time to finish the whole thing. Ed tested some of the functionality and made some recommendations about how the filtering and sorting should work. We agreed to change to functionality to align with what he wanted.

5. Wednesday, 25th July: By this stage, we had finished 95% of the app's functionality and styling. We met with Ed to show him the app, and he was impressed with what we had done. We walked him through various aspects of the app, and he tested out some of the functionality as we went along. He was happy with how everything worked, and was glad that it worked on his mobile phone. Afterwards, we discussed next steps, indlucing deployment, data and ongoing maintenence. Ed told us he would continue to maintain the app with the help of his nephew, who is a web developer. We told him we would hand over our project to him on Friday, after we finished our presentation.
<br>

## **Information Gathering and Competitior Analysis**

When tackling this opportunity, our team wanted to develop a lightweight shift tracking app, that merged user centric design with the MERN for intuative communication between the front and backend codebase.

<br>

#### **Competitor Analysis**

While a competitive marketplace, we found that a disproportionate number of employee and shift management services offered online are built ontop of models with a high barrier of entry for small to medium sized businesses, such as our clients.

In addition to varying financial costs, users are forced to make the choice between larger companies, which can offer customisation, and smaller companies, which while leaner and easier to use, lack the ability to be tailored to their business.


<a href="./docs/part-b/images/comp_analysis.png" target="_blank"><img src="./docs/part-b/images/comp_analysis.png" width="800 " align="top"></a>

<br>

#### **Branding Development**

Identify colour trends  and fla designs in competing businesses, we were able to develop a visual identity for our clients app to create a sense modernity while complementing the brands heritage (see bottom right).

<a href="./docs/part-b/images/branding_dev.png" target="_blank"><img src="./docs/part-b/images/branding_dev.png" width="800 " align="top"></a>

<br>

#### **Color Development**

When picking colours, our aim was to use contrast to our advantage to direct the user's attention towards import buttons and visually guide them through in-app processes.

<a href="./docs/part-b/images/color_development.png" target="_blank"><img src="./docs/part-b/images/color_development.png" width="800 " align="top"></a>

<br>

## **Project Scope** (X)

Develop project charter, including preliminary statement of project scope and obtain sign-off.

Define the Risks and potential pitfalls of falling off scope

<br>

## **Project Timeline** (X)

<a href="./docs/part-b/images/final-timeline.png" target="_blank"><img src="./docs/part-b/images/final-timeline.png" width="800"></a>

We got in and moving on our project timeline really early. We actually got to use one of Maxi's previous projects, a timeline tracking app, to lay out and timeline our journey.

We initially just planned out the design phase for week one, starting with ideation and moving right through to design work. 

We reassessed at week 2, plotting out our planned course for the development phase of the app. This began with skeleton structure of the entire app, and them broke out into fleshing out both back and front-end sections.

We were happy to see that for the most part, we kept on schedule or sooner! Using our Trello board in combination with the timeline we were able to keep our heads and feel good about the journey.

<br>

##  **Team Management** (X)

<a href="./docs/part-b/images/team-intro2.png" target="_blank"><img src="./docs/part-b/images/team-intro2.png" width="800 " align="top"></a>

While we were fortunate to have a diverse array of profficiencies within our team, we decided that as this was primarily a learning experience for us as junior developers, we would not pigeon hole any indivudal into a single front or backend task.

Instead we devided our work through feature and each were individually responsible for the front or backend logic ascociated. 

<br>

## **Sequencial Self Assessment**

Monitor each other’s assigned work

Reassess ongoing project scope changes, risks and issues

<br>

## **Handover and Continued Support**

We had finished about 95% of the app's functionality and styling by July 25. We met with Ed to show him the app, and he was impressed with what we had done. We walked him through various aspects of the app, and he tested out some of the functionality as we went along. He was happy with how everything worked, and was glad that it worked on his mobile phone. Afterwards, we discussed next steps, indlucing deployment, data and ongoing maintenence. Ed told us he would continue to maintain the app with the help of his nephew, who is a web developer. We told him we would hand over our project to him on Friday, after we finished our presentation.

<br>

## **Ready for Deployement** {x}

Obtain final project sign-off

<br>

## **Post Project Review** {x}

This was a fun, but challenging project. We all had a chance to work on various aspects of the app, including both the front-end and back-end. This was the first time any of us had developed an app as a team - we had to quickly learn how to work in a team efficiently and find a balance between pushing out work and making sure people got to work on what they wanted. Overall, it was a great experoence and we became better developers because of it.

<br>

## **Client Questionaire** {x}

1. How satisfied are you with our app?

2. How well did we communicate with you throughout the process?

3. How easy do you find it to navigate through our app?

4. How likely are you to use our app for your business?

5. Which feature did you like the most?

6. Which feature do you think needs the most improvement?

----
<br>

# **Tools & Methodologies**
<a href="./docs/part-b/images/project-divider3.png" target="_blank"><img src="./docs/part-b/images/project-divider3.png" width="800"></a>

## **Project Management Tools**

Given the scope and scale of the project, our team was cognizant of the need to track and monitor our progress with each stage of development. To best support the team dynamic and ensure continual development we used the following tools:

<br>

#### **Figma** 
For developing the wireframes. We had a two-stage design process- An initial group-planned mock wireframe, and then more fleshed-out "design" wireframes.

<a href="./docs/part-b/images/figma_snap.png" target="_blank"><img src="./docs/part-b/images/figma_snap.png" width="800"></a>


#### **Trello** 
For general project management. We leaned *heavily* on this! We've multiple boards for resources and internal info, but it all flows back to our main trello board (example below).


<a href="./docs/part-b/images/trello_snap.png" target="_blank"><img src="./docs/part-b/images/trello_snap.png" width="800"></a>

<a href="https://trello.com/b/DFlgggpu/scrum-board" target="_blank">Scrum</a> board.

#### **Git** 
For version control. See below for more detail about our Git workflow.

<a href="./docs/part-b/images/gitlog_snap.png" target="_blank"><img src="./docs/part-b/images/gitlog_snap.png" width="800"></a>

<br>

## **GitFlow**

For version and source control, we will be using Git, with a main repository stored on Github. At this early stage we’ve planned to use a “Protected” `master` branch for pushing to production, and a `develop` development branch for working between releases. 

We have taken a lot of inspiration from this model: https://nvie.com/posts/a-successful-git-branching-model/ 

Master (Protected): The `master` branch is ‘Protected’ against any `git push` commands, and only able to be merged via Pull Request on Github. The idea behind this is that `master` is only to be used for stable releases that have been tested and checked thoroughly.

For individual features, Our plan is to use separate `feature` branches cloned off of the `develop` branch. These branches will be merged into the `develop` branch, after changes are pulled and conflicts resolved. We intend to push these `feature` branches as well, to keep a record of our progress, though this isn’t really necessary for a project of this scale.

<a href="./docs/part-b/images/git-workflow.png" target="_blank"><img src="./docs/part-b/images/git-workflow.png" width="800"></a>

<br>

## **Agile First**

From the outset of this project, we decided to take a lot from the Agile methodology. Given that each of us has our own unique strengths, we have embraced the idea that we will be far more powerful as a team, and the Agile (Specifically, Scrum) practices offer a lot in the way of organization. 

#### **Ideation**

<a href="./docs/part-b/images/ideation.jpg" target="_blank"><img src="./docs/part-b/images/ideation.jpg" width="800"></a>


#### **Scrum**

<a href="./docs/part-b/images/scrumboard.png" target="_blank"><img src="./docs/part-b/images/scrumboard.png" width="800"></a>


#### **Morning Standup**

<a href="./docs/part-b/images/nab_stand_up.jpg" target="_blank"><img src="./docs/part-b/images/nab_stand_up.jpg" width="800"></a>

<br>

## **Code review**

Our process was handled largely through Trello, with each completed being sent to our "Pending Review" list prior to deployment. 

If a feature/page/branch encountered an error that could not be immediately fixed, a member of our team would place it in the "Blocked" column. This signalled for one or more team members to jump on the issue and try to find a solution.

We used annotations and `TODO:` lists in code to identify problem areas or necessary fixes.

<a href="./docs/part-b/images/code_review2.png" target="_blank"><img src="./docs/part-b/images/code_review2.png" width="800"></a>


<a href="./docs/part-b/images/code_review1.jpg" target="_blank"><img src="./docs/part-b/images/code_review1.jpg" width="800"></a>


# Future Development

## Features
Given the limited time-frame of our project there were several features that did not make it to production:

• Display user avatars or names on login to personalize the user experience and help managers quickly identify employees.

• Animation to create a more fluid interface and help guide and reward user interaction.

• Add additional admin status to include sub-managers with limited admin control/ dashboard control.

• "Print PDF" functionality for the Reports and Data Visualisation pages, so that the client can easily export/store data.


<br>

## Handover
In addition to features for future inclusion, our team considered several key requirements for handover and ongoing support: 

• Legiable source code and annotations to allow for future independant developemnt.

• Initial loggin details handed to the client.

<br>

<a href="./docs/part-b/images/team-intro.png" target="_blank"><img src="./docs/part-b/images/team-intro.png" width="800 " align="top"></a>

Brought to you by Painframe LLC