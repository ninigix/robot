# Welcome to the Robot Wonderland!

## 🤖 Introducing RoboWik: Your Command Line Robot Simulator!

Welcome to the enchanting world of RoboWik, where you can bring a robot to life with the power of command line magic!

### 📜 Getting Started

To embark on your journey with RoboSim, follow these magical steps:

1. **Installation**
    - Ensure Docker is installed on your machine.
    - Clone the RoboWik repository from [GitHub](https://github.com/ninigix/robot).

2. **Build**
    - ```
      docker run --rm -it robot
      ```

3. **Launch RoboWik**
    - Start RoboWik and watch your robot come to life:
      ```
      docker run --rm -it robot
      ```

4. **Commands**
    - Command your robot with these mystical instructions:
    - **Note**: You must place the robot before any other command.
        - `PLACE X,Y,F`: Place the robot on the 5x5 tabletop. X and Y must be integers between 0 and 5. F (Facing) can be one of the cardinal directions: North, East, South, or West.
        - `MOVE`: Move the robot one unit forward in the current direction.
        - `LEFT`: Rotate the robot left.
        - `RIGHT`: Rotate the robot right.
        - `REPORT`: Check the current location and direction of your robot.
        - `EXIT`: Bid farewell to RoboWik and exit the CLI.


### 🌟 Let your magical adventure with RoboWik begin!