import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import { green, lightBlue, red, pink, orange } from '@material-ui/core/colors';
import {ViewState, GroupingState, IntegratedGrouping} from '@devexpress/dx-react-scheduler';
import {Scheduler, Resources, Appointments, GroupingPanel, WeekView} from '@devexpress/dx-react-scheduler-material-ui';
const fetch = require("node-fetch");
const moment = require('moment')


const isWeekOrMonthView = viewName => viewName === 'Week' || viewName === 'Month';;
var R = []
const priorityData = [
  { text: 'BW', id: 1, color: lightBlue },
  { text: 'BFF', id: 2, color: green },
  { text: 'OYY', id: 3, color: red },
  { text: 'LHC', id: 4, color: pink },
  { text: 'FB', id: 5, color: orange }
];


export default class Demo extends React.PureComponent {
  componentDidMount() {
    fetch("https://climbcalendar.herokuapp.com/api")
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

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      i_agree: false,
      today: moment().format('YYYY-MM-DD'),
      week: [0,1,2,3,4,5,6].filter(D => D!==moment().weekday()),
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

  }


  handleChange(event) {
    this.setState({i_agree: !this.state.i_agree});
  }

  handleClick(e) {
    let nw = [0,1,2,3,4,5,6].filter(D => D!==moment(this.state.today,'YYYY-MM-DD').add(1,"days").weekday());
    let nt = moment(this.state.today,'YYYY-MM-DD').add(1,"days").format('YYYY-MM-DD')
    this.setState({
      week: nw,
      today: nt
    });
    console.log(this.state.today)
      console.log(this.state.week)
  }

  render() {
    const {
      data, resources, grouping, groupByDate,today,week,i_agree
    } = this.state;
    const mystyle = {
      display:"flex",
      flexDirection:"row",
    };
    var d1 = [0,1,2,3,4,5,6].filter(D => D!==moment().weekday());
    var d2 = [0,1,2,3,4,5,6].filter(D => D!==moment().add(1,"days").weekday());
    var d3 = [0,1,2,3,4,5,6].filter(D => D!==moment().add(2,"days").weekday());
    var d4 = [0,1,2,3,4,5,6].filter(D => D!==moment().add(3,"days").weekday());
    var d5 = [0,1,2,3,4,5,6].filter(D => D!==moment().add(4,"days").weekday());
    var d6 = [0,1,2,3,4,5,6].filter(D => D!==moment().add(5,"days").weekday());
    var d7 = [0,1,2,3,4,5,6].filter(D => D!==moment().add(6,"days").weekday());
    var d8 = [0,1,2,3,4,5,6].filter(D => D!==moment().add(7,"days").weekday());
    var w1 = moment().format('YYYY-MM-DD');
    var w2 = moment().add(1,"days").format('YYYY-MM-DD');
    var w3 = moment().add(2,"days").format('YYYY-MM-DD');
    var w4 = moment().add(3,"days").format('YYYY-MM-DD');
    var w5 = moment().add(4,"days").format('YYYY-MM-DD');
    var w6 = moment().add(5,"days").format('YYYY-MM-DD');
    var w7 = moment().add(6,"days").format('YYYY-MM-DD');
    var w8 = moment().add(7,"days").format('YYYY-MM-DD');
    if(typeof(today)){
        if(i_agree){
            return (
                <React.Fragment>
                    <br/>
                    <div>
                        <label>
                            <button onClick={this.handleChange}>Daily View</button>
                        </label>
                    </div>
                    <br/>
                    <br/>
                    <Paper>
                        <div style={mystyle}>
                            <Scheduler
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
                            </Scheduler>
                            <Scheduler
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
                            </Scheduler>
                            <Scheduler
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
                            </Scheduler>
                            <Scheduler
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
                            </Scheduler>
                            <Scheduler
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
                            </Scheduler>
                            <Scheduler
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
                            </Scheduler>
                            <Scheduler
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
                            </Scheduler>
                            <Scheduler
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
                            </Scheduler>
                        </div>
                    </Paper>
                </React.Fragment>
            );
        }else{
            return (
                <React.Fragment>
                    <br/>
                    <div>
                        <label>
                            <button onClick={this.handleChange}>Weekly View</button>
                        </label>
                        <label>
                            <button onClick={this.handleClick}>X</button>
                        </label>
                    </div>
                    <br/>
                    <br/>
                    {today}
                    <Paper>
                        <div style={mystyle}>
                            <Scheduler
                                data={data}
                                height={1600}
                            >
                                <ViewState
                                    defaultCurrentDate={today}
                                />
                                <GroupingState
                                    grouping={grouping}
                                    groupByDate={groupByDate}
                                />
                                <WeekView
                                    startDayHour={9}
                                    endDayHour={23}
                                    excludedDays={week}
                                />
                                <Appointments />
                                <Resources
                                    data={resources}
                                    mainResourceName="priorityId"
                                />
                                <IntegratedGrouping />
                                <GroupingPanel />
                            </Scheduler>
                        </div>
                    </Paper>
                </React.Fragment>
            );
        }
    }
  }
}
