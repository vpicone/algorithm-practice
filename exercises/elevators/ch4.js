module.exports = {
  init(elevators, floors) {
    const visitedRecently = new Array(floors.length);

    elevators.forEach((elevator) => {
      elevator.on('idle', () => {
        floors.forEach((floor) => {
          if (visitedRecently[floor.floorNum()]) {
            elevator.goToFloor(floor.floorNum());
          }
        });
      });

      elevator.on('floor_button_pressed', (floorNum) => {
        elevator.goToFloor(floorNum, true);
        visitedRecently[floorNum] = true;

        if (visitedRecently.every(floor => floor)) {
          visitedRecently.fill(false);
        }
      });
    });

    floors.forEach((floor) => {
      floor.on('up_button_pressed', () => {
        // const leastBusyElevator = elevators.sort((a, b) => a.loadFactor() - b.loadFactor())[0];
        const closestElevator = elevators.sort((a, b) =>
          Math.abs(b.currentFloor() - floor.floorNum()) -
            Math.abs(a.currentFloor() - floor.floorNum()));

        closestElevator.goToFloor(floor.floorNum());
      });
    });
  },

  update(/* dt, elevators, floors */) {
    // We normally don't need to do anything here
  },
};
