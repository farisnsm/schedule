import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import { green, lightBlue, red, pink, orange } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {ViewState, GroupingState, IntegratedGrouping} from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  Resources,
  Appointments,
  GroupingPanel,
  WeekView
} from '@devexpress/dx-react-scheduler-material-ui';
const fetch = require("node-fetch");
const moment = require('moment')

const isWeekOrMonthView = viewName => viewName === 'Week' || viewName === 'Month';
var R = []
const priorityData = [
  { text: 'BW', id: 1, color: lightBlue },
  { text: 'BFF', id: 2, color: green },
  { text: 'OYY', id: 3, color: red },
  { text: 'LHC', id: 4, color: pink },
  { text: 'FB', id: 5, color: orange }
];

const styles = ({ spacing, palette, typography }) => ({
  formControlLabel: {
    padding: spacing(2),
    paddingLeft: spacing(10),
  },
  text: {
    ...typography.caption,
    color: palette.text.secondary,
    fontWeight: 'bold',
    fontSize: '1rem',
  },
});


export default class Demo extends React.PureComponent {

  componentDidMount() {
    fetch("http://localhost:3000/api")
        .then(function(response){
          return response.text()
        })
        .then(function(xdata) {
          let result = JSON.parse(xdata).map(function(R,I){
            let gym = 0
            let end = moment(R.ts,"YYYYMMDDHHmm").add(165,"minutes").format()
            if(R.gym==='OYY'){
              end = moment(R.ts,"YYYYMMDDHHmm").add(2,"hours").format()
            }
            switch (R.gym) {
              case 'BW': gym = 1; break;
              case 'BFF': gym = 2; break;
              case 'OYY': gym = 3; break;
              case 'LHC': gym = 4; break;
              case 'FB': gym = 5; break;
            }
            return({
              title: R.slots +" slots",
              priorityId: gym,
              startDate: moment(R.ts,"YYYYMMDDHHmm").format(),
              endDate: end,
              id: I,
            })
          })
          return(result)
        })
        .then(data => this.setState({ data }));
    //console.table(R)
  }


  constructor(props) {
    super(props);

    this.state = {
      data: R,
      resources: [{
        fieldName: 'priorityId',
        title: 'Priority',
        instances: priorityData,
      }],
      grouping: [{
        resourceName: 'priorityId',
      }],
      groupByDate: isWeekOrMonthView,
      isGroupByDate: true,
    };

    this.commitChanges = this.commitChanges.bind(this);
    this.onGroupOrderChange = () => {
      const { isGroupByDate } = this.state;
      this.setState({
        isGroupByDate: !isGroupByDate,
        groupByDate: isGroupByDate ? undefined : isWeekOrMonthView,
      });
    };
  }

  commitChanges({ added, changed, deleted }) {
    this.setState((state) => {
      let { data } = state;
      if (added) {
        const startingAddedId = data.length > 0 ? data[data.length - 1].id + 1 : 0;
        data = [...data, { id: startingAddedId, ...added }];
      }
      if (changed) {
        data = data.map(R => (
          changed[R.id] ? { ...R, ...changed[R.id] } : R));
      }
      if (deleted !== undefined) {
        data = data.filter(R => R.id !== deleted);
      }
      return { data };
    });
  }

  render() {
    const {
      data, resources, grouping, groupByDate
    } = this.state;
    const mystyle = {
      display:"flex",
      flexDirection:"row",

    };

    var d1 = [0,1,2,3,4,5,6].filter(D => D!==moment().weekday())
    var d2 = [0,1,2,3,4,5,6].filter(D => D!==moment().add(1,"days").weekday())
    var d3 = [0,1,2,3,4,5,6].filter(D => D!==moment().add(2,"days").weekday())
    var d4 = [0,1,2,3,4,5,6].filter(D => D!==moment().add(3,"days").weekday())
    var d5 = [0,1,2,3,4,5,6].filter(D => D!==moment().add(4,"days").weekday())
    var d6 = [0,1,2,3,4,5,6].filter(D => D!==moment().add(5,"days").weekday())
    var d7 = [0,1,2,3,4,5,6].filter(D => D!==moment().add(6,"days").weekday())
    var d8 = [0,1,2,3,4,5,6].filter(D => D!==moment().add(7,"days").weekday())
    var w1 = moment().format('YYYY-MM-DD')
    var w2 = moment().add(1,"days").format('YYYY-MM-DD')
    var w3 = moment().add(2,"days").format('YYYY-MM-DD')
    var w4 = moment().add(3,"days").format('YYYY-MM-DD')
    var w5 = moment().add(4,"days").format('YYYY-MM-DD')
    var w6 = moment().add(5,"days").format('YYYY-MM-DD')
    var w7 = moment().add(6,"days").format('YYYY-MM-DD')
    var w8 = moment().add(7,"days").format('YYYY-MM-DD')
    return (
      <React.Fragment>

        <Paper>
          <div style={mystyle}><Scheduler
              data={data}
              height={1600}
          >
            <ViewState
                defaultCurrentDate={w1}
            />
            <GroupingState
                grouping={grouping}
                groupByDate={groupByDate}
            />
            <WeekView
                startDayHour={9}
                endDayHour={23}
                excludedDays={d1}
            />
            <Appointments />
            <Resources
                data={resources}
                mainResourceName="priorityId"
            />
            <IntegratedGrouping />
            <GroupingPanel />
          </Scheduler><Scheduler
              data={data}
              height={1600}
          >
            <ViewState
                defaultCurrentDate={w2}
            />
            <GroupingState
                grouping={grouping}
                groupByDate={groupByDate}
            />
            <WeekView
                startDayHour={9}
                endDayHour={23}
                excludedDays={d2}
            />
            <Appointments />
            <Resources
                data={resources}
                mainResourceName="priorityId"
            />
            <IntegratedGrouping />
            <GroupingPanel />
          </Scheduler><Scheduler
              data={data}
              height={1600}
          >
            <ViewState
                defaultCurrentDate={w3}
            />
            <GroupingState
                grouping={grouping}
                groupByDate={groupByDate}
            />
            <WeekView
                startDayHour={9}
                endDayHour={23}
                excludedDays={d3}
            />
            <Appointments />
            <Resources
                data={resources}
                mainResourceName="priorityId"
            />
            <IntegratedGrouping />
            <GroupingPanel />
          </Scheduler><Scheduler
              data={data}
              height={1600}
          >
            <ViewState
                defaultCurrentDate={w4}
            />
            <GroupingState
                grouping={grouping}
                groupByDate={groupByDate}
            />
            <WeekView
                startDayHour={9}
                endDayHour={23}
                excludedDays={d4}
            />
            <Appointments />
            <Resources
                data={resources}
                mainResourceName="priorityId"
            />
            <IntegratedGrouping />
            <GroupingPanel />
          </Scheduler><Scheduler
              data={data}
              height={1600}
          >
            <ViewState
                defaultCurrentDate={w5}
            />
            <GroupingState
                grouping={grouping}
                groupByDate={groupByDate}
            />
            <WeekView
                startDayHour={9}
                endDayHour={23}
                excludedDays={d5}
            />
            <Appointments />
            <Resources
                data={resources}
                mainResourceName="priorityId"
            />
            <IntegratedGrouping />
            <GroupingPanel />
          </Scheduler><Scheduler
              data={data}
              height={1600}
          >
            <ViewState
                defaultCurrentDate={w6}
            />
            <GroupingState
                grouping={grouping}
                groupByDate={groupByDate}
            />
            <WeekView
                startDayHour={9}
                endDayHour={23}
                excludedDays={d6}
            />
            <Appointments />
            <Resources
                data={resources}
                mainResourceName="priorityId"
            />
            <IntegratedGrouping />
            <GroupingPanel />
          </Scheduler><Scheduler
              data={data}
              height={1600}
          >
            <ViewState
                defaultCurrentDate={w7}
            />
            <GroupingState
                grouping={grouping}
                groupByDate={groupByDate}
            />
            <WeekView
                startDayHour={9}
                endDayHour={23}
                excludedDays={d7}
            />
            <Appointments />
            <Resources
                data={resources}
                mainResourceName="priorityId"
            />
            <IntegratedGrouping />
            <GroupingPanel />
          </Scheduler><Scheduler
              data={data}
              height={1600}
          >
            <ViewState
                defaultCurrentDate={w8}
            />
            <GroupingState
                grouping={grouping}
                groupByDate={groupByDate}
            />
            <WeekView
                startDayHour={9}
                endDayHour={23}
                excludedDays={d8}
            />
            <Appointments />
            <Resources
                data={resources}
                mainResourceName="priorityId"
            />
            <IntegratedGrouping />
            <GroupingPanel />
          </Scheduler></div>
        </Paper>
      </React.Fragment>
    );
  }
}
