## Reaction Speed Game

This game was made for educational purposes to show students at the school where I teach an example of using web sockets. 

When a player first arrives on the game they are welcomed with some instructions. Once they have read these they can begin by clicking start. There is a player counter in the bottom right hand corner which will update in real time as players join the game. Four players are needed for the game to begin.

![Welcome Screen](/assets/md-images/1.png)

After a fourth player has joined, any following attempts to join the game will be met with this message.

![No More Room](/assets/md-images/3.png)

After clicking `start` on the welcome message, the user moves to the game screen. Until the fourth player has joined the screen will continue to say you are waiting. The player counter will continue to update as players arrive.

![Game Screen](/assets/md-images/2.png)

Here players can choose which color they wish to be by clicking on it.

![Waiting](/assets/md-images/4.png)

When you choose a color you will be informed which color you chose with this message.

![Chosen Color](/assets/md-images/7.jpeg)

Until the game begins you will be informed which color you chose.

![your Color](/assets/md-images/5.5.png)

When another player has chosen a color it will no longer be possible to choose. You will be informed that a color was already chosen with the word `TAKEN`.

![Taken](/assets/md-images/6.png)

Once every player has chosen a color, a score counter appears for each player and the game begins. Your color will be outlined in yellow.

![Game Begin](/assets/md-images/8.jpeg)

Now every player has to wait for the circle in the middle to turn red. It happens at a random time between zero and 20 seconds.

![Red Circle](/assets/md-images/9.jpeg)

Once it has turned red, the first player to hit their square wins a point. Then the process begins again and you need to wait for the circle to turn red.

![Point Win](/assets/md-images/10.jpeg)

You have to be careful. Accidentally hitting your color before the circle turns red will make you lose a point! Your points can even drop below zero if you get it wrong a few times.

![Losing Points](/assets/md-images/11.jpeg)

Once a player has 5 points, they have won the game and play is over. Players can play again by clicking on the button.

![Game Win](/assets/md-images/12.png)

The game constantly requires 4 players, if at any point a player leaves the game before it is over then the game is reset and all other remaining players will be returned to the waiting screen.

![Waiting](/assets/md-images/4.png)
