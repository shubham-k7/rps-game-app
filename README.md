# Rock paper scissors game - Shubham Khanna
Basic requirements implemented
- [X] Allow two players to enter their names
- [X] Game mode select (Player v Player), (Player v Computer)
- [X] Allowed each player to play one at a time by clicking choice button
- [x] Partial - added Save method which currently only saves the data in LocalStorage for players. Can extend this method to call an API to save Game data in BE
- [x] Worked on the UI for Rock Paper Scissors. Given work completed in 3 hours. Able to add all functionalities

With more time, not in order of priority, we can
# UI
1. Layout for the game can be improved
2. Improve the UX to use ICONs instead of buttons
3. Animate Computer move (Currently everything is Text based)
4. Add authentication for user
5. Pull data after choosing opponent or retrieve data with computer
6. Restructure code for better scalability and test State/Rendering performance of the components.
7. Use useMemos/useCallbacks if we find unnessary renders.
# BE
1. Configure a server and can try to create a monorepo, with a server to handle Services and DB
2. Configure NoSQL DB to store Game data (MongoDB)
3. Create "/save-data", "/load-data/:player" APIs to save and load Game Data
4. Add Resume Game streaks for player1-player2 history component.


# To test
1. Clone the repo
```shell
$ git clone [repo]
```
```shell
2. cd [repo]
```
## Dev
```shell
$ npm run dev
```
## Prod
```shell
4. npm run build
```