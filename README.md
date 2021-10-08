# 05 Third-Party APIs: Work Day Scheduler

## Simple workday schedule

Daily calendar app that lets you save to-dos every hour 9-5. Hour blocks are color coded based on relation to current time.

## Repository and Deployed Application

[Github Repoistory](https://github.com/wkropat/workday-scheduler)

[Link to live site](https://wkropat.github.io/workday-scheduler/)

## Screenshot of working application

![Screenshot of calendar application.](./screenshot.png)

## Criteria for my reference

```md
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

