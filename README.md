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


## **What is Chicken-In?** (X)

<a href="http://www.chicken-in.com/">**"Chicken-In"**</a> is a Timesheet and Shift Tracking web app designed specifically to our client's specifications. **Chicken-In** gets employees Logging-In, and Chicken-In!

#### **The Client Brief**

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

Review the conceptual design with the client and edit based on their feedback

## **2-Sided App Functionality**

#### **Employee Functionality**

Addressing a key consideration from our client, we decided to implement a mobile-first approach for the employee facing app, where each user is able to log in, enter, track, and view the total standard/overtime/double time hours of each shift input. 

We found that this stripped back interface would best serve the needs of the client's team, who found their paper-based system inefficient and time-consuming.

#### **Manager Functionality**

On successful manager login, the user is redirected to the manager dashboard, where they have access to several core functions of the app.

Managers will be able to view weekly shift reports, approve or reject pending shifts, manage their teams stores and configure their business settings.

After our initial meeting with the client, our team decided that we could not integrate mobile-first design for the manager dashboard without sacrificing the ability to display and easily read shift data. As such, the manager dashboard focused on desktop functionality, with mobile-driven design benched as a stretch goal.

<br>

## **User Stories** (X)

<< Take more from Part A >>

We focussed on providing a number of basic user profiles based on the types of users we are likely to encounter. Using Trello, we populated a number of users, with common wants and insights gain from our meetings with the client:

<br>

<a href="./docs/part-b/images/user_stories/Employer_User_Story_1.png" target="_blank"><img src="./docs/part-b/images/user_stories/Employer_User_Story_1.png" width="300 " align="top"></a>
<img src="./docs/part-b/images/user_stories/Employee_User_Story_1.png" width="300" align="top">

#### Link to User Stories Trello Board 
You can find the full list of our insights and user stories <a href="https://trello.com/b/1kl5tgnk">HERE</a>!

<br>

## **User Journey** {x}

A workflow diagram of the user journey's {X}

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

## **Project Scope**

Develop project charter, including preliminary statement of project scope and obtain sign-off.

Define the Risks and potential pitfalls of falling off scope

<br>

## **Project Timeline**

<a href="./docs/part-b/images/final-timeline.png" target="_blank"><img src="./docs/part-b/images/final-timeline.png" width="800"></a>

<br>

##  **Team Management** (X)

While we were fortunate to have a diverse array of profficiencies within our team, we decided that as this was primarily a learning experience for us as junior developers, we would not pigeon hole any indivudal into a single front or backend task.

Instead we devided our work...

Allocate roles and responsibilities to team members, based on project solution requirements

<br>

## **Sequencial Self Assessment**

Monitor each other’s assigned work

Reassess ongoing project scope changes, risks and issues

## **Self Assessment - Pain points**

#### Shun

- Guest app front-end
  - Change states by user input (Manager/Employee)

- Manager app manage-employee page front-end 
  - Create modal(react-modal)
  - Styling grid on modal
  - Implement sorting function for employee cards 
  - Display previous states on edit employee form modal
  - Display/hide location checkbox in form modal
  - Link employee data to backend by axios and lifecycle methods

#### Maxi

#### Drew

#### Winter

<br>

## **Handover and Continued Support**

We had finished a majority of the app by Wednesday, 25th July. We met with the client and discussed next steps, indlucing deployment, data and ongoing maintenence. Ed told us he would continue to maintain the app with the help of his nephew, who is a web developer. We told him we would hand over our project to him on Friday, after we finished our presentation.

<br>

## **Ready for Deployement** {x}

We had finished a majority of the app by Wednesday, 25th July. We met with the client and discussed next steps, indlucing deployment, data and ongoing maintenence. Ed told us he would continue to maintain the app with the help of his nephew, who is a web developer. We told him we would hand over our project to him on Friday, after we finished our presentation.

<br>

## **Post Project Review** {x}

This was a fun, but challenging project. We all had a chance to work on various aspects of the app, including both the front-end and back-end. This was the first time any of us had developed an app as a team - we had to quickly learn how to work in a team efficiently and find a balance between pushing out work and making sure people got to work on what they wanted. Overall, it was a great experoence and we became better developers because of it.

<br>

## **Client Questionaire** {x}

1. Did the final app faithfully represent the original app idea?

2. Does the app solve your original problem?

3. Do you find the app to be user-friendly?

4. Do your employees find the app to be user-friendly?

5. To what extent does the app's styling match your business's brand?

6. How happy are you with the extent to which the team engaged you throughout the development process?

7. How happy are you with the level of communication with the team?

8. How extensively do you think you will use and maintain the app going forward?

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




## **Future Development** {x}

