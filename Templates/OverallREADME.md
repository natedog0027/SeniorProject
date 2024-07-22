# Senior-Project
Functional CSC 123 Simple Class Structure with Scripts

# Intro to Your Environment for 123 Students
Hello! Welcome to CSC 123! Here is a quick introduction for this assignment and the environment. 

This file is called a README. It is the first item that you should look at when you start a pre-built project or assignment. In this context, it contains an overview of your programming environment and how to get started.

On your left, there is a section of the codespace called the "Explorer". Use this to navigate the files in your assignment. Don't worry, a lot of those files you won't even have to worry
about. Just follow these instructions and you'll be set up quick and easy!

# Environment Setup

To work on this project, there are quick setups to handle. Click on the file called "package.json".
You don't have to do anything with this file, it just needs to be opened. After you open the file,
feel free to close it. (Make sure that you haven't made any changes!)

After opening and closing the file, you should see a a new menu at the bottom of your explorer labeled "NPM Scripts". 
(If that menu doesnt pop up, click the 3 dots at the top of the Explorer to open up the features menu. Scroll down and click "NPM Scripts", and the script button menu will pop up!) These are the "Quick Buttons" you will use to for setting up and running your assignments. Pretty easy, right?


<img src="Images/NPMActionButtons.png" alt="!!!NPMActionButtons" width="400" height = "200"/>

# Information for Typescript

In this assignment, you are running a typescript program. While the Quick Button setup will be similar to previous assignments, there is an extra difference to note. Your previous assignments outputted to a browser page, but this one will output to the terminal. This is a section at the bottom of your Codespace. When running your program, look here to find the output, and scroll up and down to view everything that was outputted:

<img src="Images/Terminal.png" alt="!!!Terminal" width="700" height = "300"/>

# Information for Typescript Server

In this assignment, you are running a typescript server program. While the Quick Button setup will be similar to previous assignments, there is an extra difference to note. In your previous assignments, you simply clicked "install" to setup your environment, and then you clicked "run" and your code opened in the browser. This time, since you have a typescript file (.ts), you need to click "install" to setup your environment, click "setup" to setup the typescript file (and wait until the terminal says "Found 0 errors. Watching for file changes."), and then click "run". Your program will open in the browser, and will auto update whether you edit the .ts file or the .html file. Convenient, right? Let's gooooooooooo!

When you click "setup", this is the output that you want to see before clicking the "run" button:
<img src="Images/WaitingFileChanges.png" alt="!!!Waiting File Changes" width="800" height = "200"/>

# Setup for Group Assignments
For group assignments, Liveshare is an extension tool that will be used to work together on projects at the same time. It can be a little complicated, so here is a quick tutorial to get you all set up!

First off, make sure that you all have a way to message each other on your laptops (whether by email, discord, or another chat program). This is so that you can send the join link to one another.

Then, select one project member to be the group leader. This is because one person will need to create the shared programming space, and then everyone else can join! (Heads up, I will refer to the project leader as the "leader" and the other group members as "other members" so it's easy to differentiate.)

Now, the leader opens a Codespace that you intend to work on together. Then, they will select the Live Share icon from the bottom of their screen. It looks like this:

<img src="Images/LiveshareButton.png" alt="!!!LiveshareButton" width="600" height = "200"/>

Two popups will appear:

<img src="Images/LivesharePopups.png" alt="!!!LivesharePopups" width="400" height = "300"/>

Click the X on both, you do not need to do anything with them.

Now, the link to this shared project will be copied. Simply open whatever chat program you are using to message to your teammates and paste the link and send to them. Now they can access the shared project! :)

* Tip: If you somehow copied another item before you shared it to your teammates, you can still copy the link! There is a menu on the left side in the "Explorer" called "Live Share". Expand this menu and press "Copy Collaboration Link", as shown below:

<img src="Images/LiveshareLinkCopy.png" alt="!!!LiveshareLinkCopy" width="200" height = "400"/>


Now the leader should wait for the other members to join.

The next steps are to get the other members access to the project. They will start by clicking the link sent to them by the leader. The link will open up in a browser, and start with a page that looks like this:

<img src="Images/CollabOpen.png" alt="!!!CollabOpen" width="800" height = "400"/>

Click "Continue in web". A popup will come up on the bottom right.

<img src="Images/SigninCollab.png" alt="!!!SigninCollab" width="500" height = "200"/>

In this popup, click sign in so that you can sign in with your Github account. Then, another popup will open that allows you to sign in to either Github or Microsoft. Here is what it looks like:

<img src="Images/GithubSignin.png" alt="!!!GithubSignin" width="800" height = "200"/>

Now, click the Github option. A popup will appear for you to sign in. Sign in with your username and password, and then you can access the project under your github account!

Now, the leader and the other members can work together on the project. Check it out!

* Notes: When the other members first join, they will be following the leaders viewpoint. This means that the screens of the other members will show and follow the leaders cursor and pages. The other members can take control of their own screens by clicking on a file that the leader is not accessing. Then, the other members have free access to go and program as they wish.

# Features of LiveShare

There are a few useful features to bring to your attention about LiveShare.

The first will be a small menu in the top right of your codespace. The first button is the "follow participant" button. This allows you to select another group members cursor and page to follow and view. As they switch pages and type, your screen will view and follow. You can cancel this selection by clicking any other file that they are not on, and you will resume control of your screen. You can also select the same button, which will now be labeled as "unfollow participant", for the same effect.

<img src="Images/FollowParticipant.png" alt="!!!FollowParticipant" width="250" height = "100"/>

The second feature of that same menu is the button to the immediate right of "follow participant". This is the "focus participant" button. This calls the other programmers to view your cursor and open pages. Be careful when using this feature, as it immediately calls them to view you, and you do not want to interrupt their flow of work. It is probably best to notify the other group members first, or just show them your screen in person.

<img src="Images/FocusParticipant.png" alt="!!!FocusParticipant" width="250" height = "100"/>

Another section is another menu for Liveshare. Open this menu by clicking the "shared" button at the bottom of the Codespace.

<img src="Images/SharedButton.png" alt="!!!SharedButton" width="300" height = "100"/>

This opens up a menu in the search part of the codespace. 

<img src="Images/SharedMenu.png" alt="!!!SharedMenu" width="600" height = "200"/>

In this menu, you can copy the link to invite others, share your terminal, share a server (not relevent to this course), and end the liveshare session.

The other section to be wary of is the live share menu in bottom left in the "Explorer" section. This menu was already mentioned when showing how the group leader could send invites, but there are a few more features to be aware of. Here is the menu:

<img src="Images/LiveShareMenu.png" alt="!!!LiveShareMenu" width="250" height = "600"/>

These features are mainly for the group leader, but other members can view this menu for information.

The first tab is the Participants tab. This shows the name of the other group members that are working on this project. The leader can remove these members from this menu, or add more members.

The second tab is the Shared Terminals tab. The leader can share access to the command prompt. Be careful with this option, as it allows other members to have full control. Ideally, you will not be using the command prompt in this class, but perhaps it will be necessary. If you do not know what this is, ask your professor. They will probably give you a quick overview and tell you not to use it for now due to its complexity.

The next tab is Shared Servers, which will not be relevent.

The next tab is comments, which is not relevent either.

The final tab is Session Chat. Select this and you can send messages between project group members working in this codespace. This is ideal for quick conversation or for sending links.

* A few quirks to note: Other members are not able to access the NPM Scripts menu and use the Quick Buttons (which were discussed previously). While everyone can work on the project, the leader will have to run the program and view it on their screen to find out the final outcome. Unfortunate, but a quirk of liveshare.

# Structure
This project is split, with each branch correlating to a section from the old replit setup. Each section holds the individual assignments within a folder.
1. HTML and CSS
2. Introduction to Scripting and Typescript
3. Functions and Control Flow
4. Compound Data
5. Functions as Values
6. Browser Programming
7. Final Project

# .devcontainer Information
The devcontainer is limited. It is only being used to download the necessary VSCode extensions for this project, which include: 
1. Liveshare (Used for sharing access to a Codespace for group project work)

# package.json Information
Each assignment has it's own package.json file associated with it. Here are the unique scripts associated with each package.json for each assignment.

# Quick Buttons

1. HTML and CSS
    * Free Practice-HTML and CSS
        * OpenPractice1: Opens the neccesary files for this assignment. Feel free to close and open files at your leisure.
        * Run: Runs the program for this assigment. When pressed, a popup will appear on the bottom right to open up a browser window. Click "Open in browser" and see your assignment in action! If this script button is pressed again, you can terminate the browser window from the same popup in the bottom right with "Terminate Task".
        * Install: Reinstalls the necessary dependencies if there are issues with the program. If you are having trouble, try this and run your program again before trying other methods.
    * Lab 2 Part 1-HTML and CSS
        * OpenLab2.1: Opens the neccesary files for this assignment. Feel free to close and open files at your leisure.
        * Run: Runs the program for this assigment. When pressed, a popup will appear on the bottom right to open up a browser window. Click "Open in browser" and see your assignment in action! If this script button is pressed again, you can terminate the browser window from the same popup in the bottom right with "Terminate Task".
        * Install: Reinstalls the necessary dependencies if there are issues with the program. If you are having trouble, try this and run your program again before trying other methods.
    * Lab 2 Part 2-Resources for First Years
        * OpenLab2.2: Opens the neccesary files for this assignment. Feel free to close and open files at your leisure.
        * Run: Runs the program for this assigment. When pressed, a popup will appear on the bottom right to open up a browser window. Click "Open in browser" and see your assignment in action! If this script button is pressed again, you can terminate the browser window from the same popup in the bottom right with "Terminate Task".
        * Install: Reinstalls the necessary dependencies if there are issues with the program. If you are having trouble, try this and run your program again before trying other methods.

2. Introduction to Scripting and TypeScript
    * Free Practice-What's TypeScript
        * OpenPractice1: Opens the neccesary files for this assignment. Feel free to close and open files at your leisure.
        * Run: Runs the program for this assigment. When pressed, the output will appear in the terminal. To exit the output page and return to the regular terminal page, click on the terminal and then click enter.
        * Install: Reinstalls the necessary dependencies if there are issues with the program. If you are having trouble, try this and run your program again before trying other methods.
    * Free Practice-TypeScript Data Types and Variables
        * OpenPractice2: Opens the neccesary files for this assignment. Feel free to close and open files at your leisure.
        * Run: Runs the program for this assigment. When pressed, the output will appear in the terminal. To exit the output page and return to the regular terminal page, click on the terminal and then click enter.
        * Install: Reinstalls the necessary dependencies if there are issues with the program. If you are having trouble, try this and run your program again before trying other methods.
    * Activity-Data Types in TypeScript
        * OpenActivity: Opens the neccesary files for this assignment. Feel free to close and open files at your leisure.
        * Run: Runs the program for this assigment. When pressed, the output will appear in the terminal. To exit the output page and return to the regular terminal page, click on the terminal and then click enter.
        * Install: Reinstalls the necessary dependencies if there are issues with the program. If you are having trouble, try this and run your program again before trying other methods.
    * Free Practice-More On Collections
        * OpenPractice3: Opens the neccesary files for this assignment. Feel free to close and open files at your leisure.
        * Run: Runs the program for this assigment. When pressed, the output will appear in the terminal. To exit the output page and return to the regular terminal page, click on the terminal and then click enter.
        * Install: Reinstalls the necessary dependencies if there are issues with the program. If you are having trouble, try this and run your program again before trying other methods.
    * Lab 3-Data Types and Collections
        * OpenLab3: Opens the neccesary files for this assignment. Feel free to close and open files at your leisure.
        * Run: Runs the program for this assigment. When pressed, the output will appear in the terminal. To exit the output page and return to the regular terminal page, click on the terminal and then click enter.
        * Install: Reinstalls the necessary dependencies if there are issues with the program. If you are having trouble, try this and run your program again before trying other methods.

3. Functions and Control Flow
    * Free Practice-Functions and Control Flow
        * OpenPractice1: Opens the neccesary files for this assignment. Feel free to close and open files at your leisure.
        * Run: Runs the program for this assigment. When pressed, the output will appear in the terminal. To exit the output page and return to the regular terminal page, click on the terminal and then click enter.
        * Install: Reinstalls the necessary dependencies if there are issues with the program. If you are having trouble, try this and run your program again before trying other methods.
    * Activity-Functions and Control Flow
        * OpenActivity1: Opens the neccesary files for this assignment. Feel free to close and open files at your leisure.
        * Run: Runs the program for this assigment. When pressed, the output will appear in the terminal. To exit the output page and return to the regular terminal page, click on the terminal and then click enter.
        * Install: Reinstalls the necessary dependencies if there are issues with the program. If you are having trouble, try this and run your program again before trying other methods.
    * Free Practice-Looping
        * OpenPractice2: Opens the neccesary files for this assignment. Feel free to close and open files at your leisure.
        * Run: Runs the program for this assigment. When pressed, the output will appear in the terminal. To exit the output page and return to the regular terminal page, click on the terminal and then click enter.
        * Install: Reinstalls the necessary dependencies if there are issues with the program. If you are having trouble, try this and run your program again before trying other methods.
    * Activity-Loop Patterns
        * OpenActivity2: Opens the neccesary files for this assignment. Feel free to close and open files at your leisure.
        * Run: Runs the program for this assigment. When pressed, the output will appear in the terminal. To exit the output page and return to the regular terminal page, click on the terminal and then click enter.
        * Install: Reinstalls the necessary dependencies if there are issues with the program. If you are having trouble, try this and run your program again before trying other methods.
    * Lab 4-Functions and Control Flow
        * OpenLab4: Opens the neccesary files for this assignment. Feel free to close and open files at your leisure.
        * Run: Runs the program for this assigment. When pressed, the output will appear in the terminal. To exit the output page and return to the regular terminal page, click on the terminal and then click enter.
        * Install: Reinstalls the necessary dependencies if there are issues with the program. If you are having trouble, try this and run your program again before trying other methods.
        * *Note: In the tsconfig.json file, compiler options -> module is set to the CommonJS configuration. This compiles the TS code into CommonJS, which is necessary when using import and export commands within a Node.js environment. Configuration is shown here: "compilerOptions": {"module": "CommonJS",}

4. Compound Data
    * Free Practice-Compound Types
        * OpenPractice1: Opens the neccesary files for this assignment. Feel free to close and open files at your leisure.
        * Run: Runs the program for this assigment. When pressed, the output will appear in the terminal. To exit the output page and return to the regular terminal page, click on the terminal and then click enter.
        * Install: Reinstalls the necessary dependencies if there are issues with the program. If you are having trouble, try this and run your program again before trying other methods.
    * Lab 5-Compound Data
        * OpenLab5: Opens the neccesary files for this assignment. Feel free to close and open files at your leisure.
        * Run: Runs the program for this assigment. When pressed, the output will appear in the terminal. To exit the output page and return to the regular terminal page, click on the terminal and then click enter.
        * Install: Reinstalls the necessary dependencies if there are issues with the program. If you are having trouble, try this and run your program again before trying other methods.
        * *Note: In the tsconfig.json file, compiler options -> module is set to the CommonJS configuration. This compiles the TS code into CommonJS, which is necessary when using import and export commands within a Node.js environment. Configuration is shown here: "compilerOptions": {"module": "CommonJS",}

5. Functions as Values
    * Free Practice-Functions as Values (sort)
        * OpenPractice1: Opens the neccesary files for this assignment. Feel free to close and open files at your leisure.
        * Run: Runs the program for this assigment. When pressed, the output will appear in the terminal. To exit the output page and return to the regular terminal page, click on the terminal and then click enter.
        * Install: Reinstalls the necessary dependencies if there are issues with the program. If you are having trouble, try this and run your program again before trying other methods.
    * Free Practice-The map and filter functions
        * OpenPractice2: Opens the neccesary files for this assignment. Feel free to close and open files at your leisure.
        * Run: Runs the program for this assigment. When pressed, the output will appear in the terminal. To exit the output page and return to the regular terminal page, click on the terminal and then click enter.
        * Install: Reinstalls the necessary dependencies if there are issues with the program. If you are having trouble, try this and run your program again before trying other methods.
    * Free Practice-Reduce
        * OpenPractice3: Opens the neccesary files for this assignment. Feel free to close and open files at your leisure.
        * Run: Runs the program for this assigment. When pressed, the output will appear in the terminal. To exit the output page and return to the regular terminal page, click on the terminal and then click enter.
        * Install: Reinstalls the necessary dependencies if there are issues with the program. If you are having trouble, try this and run your program again before trying other methods.

6. Browser Programming
    * Free Practice-Typescript in a Webpage
        * OpenPractice1: Opens the neccesary files for this assignment. Feel free to close and open files at your leisure.
        * Setup: Runs tsc with the -w flag. When pressed, it will compile your typescript file (.ts) into a javascript (.js) to run on an output browser page. The -w flag ensures that it will watch for updates to your .ts file and then auto-update the browser page. Push this Quick Button before clicking the "Run" button and wait until the terminal says "Found 0 errors. Watching for file changes."
        * Run: Runs the program for this assigment. When pressed, a popup will appear on the bottom right to open up a browser window. Click "Open in browser" and see your assignment in action! If this script button is pressed again, you can terminate the browser window from the same popup in the bottom right with "Terminate Task".
        * Install: Reinstalls the necessary dependencies if there are issues with the program. If you are having trouble, try this and run your program again before trying other methods.
    * Free Practice-Vega Lite in the Browser
        * OpenPractice2: Opens the neccesary files for this assignment. Feel free to close and open files at your leisure.
        * Setup: Runs tsc with the -w flag. When pressed, it will compile your typescript file (.ts) into a javascript (.js) to run on an output browser page. The -w flag ensures that it will watch for updates to your .ts file and then auto-update the browser page. Push this Quick Button before clicking the "Run" button and wait until the terminal says "Found 0 errors. Watching for file changes."
        * Run: Runs the program for this assigment. When pressed, a popup will appear on the bottom right to open up a browser window. Click "Open in browser" and see your assignment in action! If this script button is pressed again, you can terminate the browser window from the same popup in the bottom right with "Terminate Task".
        * Install: Reinstalls the necessary dependencies if there are issues with the program. If you are having trouble, try this and run your program again before trying other methods.
    * Lab 6
        * OpenLab6: Opens the neccesary files for this assignment. Feel free to close and open files at your leisure.
        * Setup: Runs tsc with the -w flag. When pressed, it will compile your typescript file (.ts) into a javascript (.js) to run on an output browser page. The -w flag ensures that it will watch for updates to your .ts file and then auto-update the browser page. Push this Quick Button before clicking the "Run" button and wait until the terminal says "Found 0 errors. Watching for file changes."
        * Run: Runs the program for this assigment. When pressed, a popup will appear on the bottom right to open up a browser window. Click "Open in browser" and see your assignment in action! If this script button is pressed again, you can terminate the browser window from the same popup in the bottom right with "Terminate Task".
        * Install: Reinstalls the necessary dependencies if there are issues with the program. If you are having trouble, try this and run your program again before trying other methods.
    * Event Driven Programming
        * OpenAssignment: Opens the neccesary files for this assignment. Feel free to close and open files at your leisure.
        * Setup: Runs tsc with the -w flag. When pressed, it will compile your typescript file (.ts) into a javascript (.js) to run on an output browser page. The -w flag ensures that it will watch for updates to your .ts file and then auto-update the browser page. Push this Quick Button before clicking the "Run" button and wait until the terminal says "Found 0 errors. Watching for file changes."
        * Run: Runs the program for this assigment. When pressed, a popup will appear on the bottom right to open up a browser window. Click "Open in browser" and see your assignment in action! If this script button is pressed again, you can terminate the browser window from the same popup in the bottom right with "Terminate Task".
        * Install: Reinstalls the necessary dependencies if there are issues with the program. If you are having trouble, try this and run your program again before trying other methods.

7. Final Project
    * Final Group Project
        * OpenFinalProject: Opens the neccesary files for this project. Feel free to close and open files at your leisure.
        * Setup: Runs tsc with the -w flag. When pressed, it will compile your typescript file (.ts) into a javascript (.js) to run on an output browser page. The -w flag ensures that it will watch for updates to your .ts file and then auto-update the browser page. Push this Quick Button before clicking the "Run" button and wait until the terminal says "Found 0 errors. Watching for file changes."
        * Run: Runs the program for this assigment. When pressed, the output will appear in the terminal. To exit the output page and return to the regular terminal page, click on the terminal and then click enter.
        * Install: Reinstalls the necessary dependencies if there are issues with the program. If you are having trouble, try this and run your program again before trying other methods.
    * Free Practice-Working with CORGIS Data
        * OpenPractice1: Opens the neccesary files for this assignment. Feel free to close and open files at your leisure.
        * Setup: Runs tsc with the -w flag. When pressed, it will compile your typescript file (.ts) into a javascript (.js) to run on an output browser page. The -w flag ensures that it will watch for updates to your .ts file and then auto-update the browser page. Push this Quick Button before clicking the "Run" button and wait until the terminal says "Found 0 errors. Watching for file changes."
        * Run: Runs the program for this assigment. When pressed, the output will appear in the terminal. To exit the output page and return to the regular terminal page, click on the terminal and then click enter.
        * Install: Reinstalls the necessary dependencies if there are issues with the program. If you are having trouble, try this and run your program again before trying other methods.

# Extra notes
If your program is having trouble running, close the process and reopen. This menu on the bottom right will allow you to shut down running processes. Simply open it, click the trash can symbol, wait a few seconds, and then try to run your project again by clicking "Run".

In this image, it shows the running processes menu on the right. Simply click that trash can symbol and it will end.
<img src="Images/ProcessesMultiTerminal.png" alt="!!!ProcessesMultiTerminal" width="800" height = "250"/>

The menu could also look like this. The trash can in this setup is in the top right of this image:
<img src="Images/Processes1Terminal.png" alt="!!!Processes1Terminal" width="800" height = "250"/>


Good luck with your assignments, and happy programming! :)